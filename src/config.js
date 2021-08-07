const dev = {
    STRIPE_KEY: "pk_test_fgmL2p2LSsn7bv2V0aCpUFqM002onPyRWO",
    s3: {
      REGION: "us-east-1",
      BUCKET: "blogs-app-api-dev-attachmentsbucket-1flmh6d4lu9se"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://api.mrdaab.com/dev"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_rWV1pypnN",
      APP_CLIENT_ID: "4hs0ra9u1vg1acuhcnlv2346db",
      IDENTITY_POOL_ID: "us-east-1:e62882c2-c763-438d-9ec1-345e0e15e474"
    }
  };
  
  const prod = {
    STRIPE_KEY: "pk_test_v1amvR35uoCNduJfkqGB8RLD",
    s3: {
      REGION: "us-east-1",
      BUCKET: "blogs-app-api-prod-attachmentsbucket-i5qe4soom0bf"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://api.mrdaab.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_xBjpXsrud",
      APP_CLIENT_ID: "5o1lb149v16bfougaifk6celg5",
      IDENTITY_POOL_ID: "us-east-1:d902cfcc-c8c9-4821-9d56-b580435ebdd9"
    }
  };
  
  // Default to dev if not set
  const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;
  
  export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
  };
  