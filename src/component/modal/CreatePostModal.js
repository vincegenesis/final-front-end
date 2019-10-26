import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  Label,
  Input,
  InputGroup,
  Form
} from "reactstrap";
import axios from "axios";
import "./modal.css";

const ModalExample = props => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const submitHandler = e => {
    console.log({ title, message, imageUrl });

    axios
      .post("http://vincegenesis-midterm-api.glitch.me/journal/", {
        title,
        message,
        imageUrl,
        ownerId: props.ownerId
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="modal-container">
      <Form onSubmit={submitHandler}>
        <Button color="primary" size="lg" onClick={toggle}>
          <h5>Create Post</h5>
        </Button>
        <Modal isOpen={modal} backdropTransition={{ timeout: 1300 }} size="lg">
          <ModalBody>
            <Label for="exampleText">{props.postId}</Label>
            Enter post information below
            <InputGroup size="lg">
              <Input
                type="text"
                value={title}
                onChange={event => setTitle(event.target.value)}
                placeholder="Title"
              />
            </InputGroup>
            <Input
              type="textarea"
              name="message"
              id="exampleText"
              rows="15"
              placeholder="Message"
              value={message}
              onChange={event => setMessage(event.target.value)}
            />
            <InputGroup>
              <Input
                type="text"
                name="imageUrl"
                placeholder="Image Url"
                value={imageUrl}
                onChange={event => setImageUrl(event.target.value)}
              />
            </InputGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit" onClick={submitHandler}>
              Save Changes
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Form>
    </div>
  );
};

export default ModalExample;
