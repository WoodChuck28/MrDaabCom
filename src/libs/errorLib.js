import * as Sentry from "@sentry/browser";

const isLocal = process.env.NODE_ENV === "development";
Sentry.init({dsn: "https://985cd0d21ebc4a039147eafd5fe85595@o399069.ingest.sentry.io/5261818"});

export function initSentry() {
  if (isLocal) {
    return;
  }
}

export function logError(error, errorInfo = null) {
  if (isLocal) {
    return;
  }

  Sentry.withScope((scope) => {
    errorInfo && scope.setExtras(errorInfo);
    Sentry.captureException(error);
  });
}

export function onError(error) {
  let errorInfo = {};
  let message = error.toString();

  // Auth errors
  if (!(error instanceof Error) && error.message) {
    errorInfo = error;
    message = error.message;
    error = new Error(message);
    // API errors
  } else if (error.config && error.config.url) {
    errorInfo.url = error.config.url;
  }

  logError(error, errorInfo);

  alert(message);
}
