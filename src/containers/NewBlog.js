import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import { onError } from "../libs/errorLib";
import config from "../config";
import { Label } from "semantic-ui-react";
import { API } from "aws-amplify";


export default function NewBlog() {
  const file = useRef(null);
  const history = useHistory();
  const [content, setContent] = useState("");
  const [topic, setTopic] = useState("");
  const [date, setDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    return content.length > 0;
  }

  function handleFileChange(event) {
    file.current = event.target.files[0];
  }

  async function handleSubmit(event) {
    event.preventDefault();
  
    if (file.current && file.current.size > config.MAX_ATTACHMENT_SIZE) {
      alert(
        `Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE /
          1000000} MB.`
      );
      return;
    }
  
    setIsLoading(true);
  
    try {
      await createBlog({ content, topic, date });
      history.push("/");
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }

  function createBlog(blog) {
    return API.post("blogs", "/blogs", {
      body: blog
    });
  }

  return (
    <div className="NewBlog">
      <form onSubmit={handleSubmit}>
        <Label>Date</Label>
        <FormGroup controlId="date">
          <FormControl
            name="date"
            value={date}
            type="text"
            onChange={e => setDate(e.target.value)}
          />
        </FormGroup>
        <Label>Topic</Label>
        <FormGroup controlId="topic">
          <FormControl
            name="topic"
            value={topic}
            type="text"
            onChange={e => setTopic(e.target.value)}
          />
        </FormGroup>
        <Label>Blog Post</Label>
        <FormGroup controlId="content">
          <FormControl
            value={content}
            componentClass="textarea"
            onChange={e => setContent(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="file">
          <ControlLabel>Attachment</ControlLabel>
          <FormControl onChange={handleFileChange} type="file" />
        </FormGroup>
        <LoaderButton
          block
          type="submit"
          bsSize="large"
          bsStyle="primary"
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          Create
        </LoaderButton>
      </form>
    </div>
  );
}