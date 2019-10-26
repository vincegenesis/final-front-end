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

const ModalExample = props => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const submitHandler = e => {
    console.log({ title, message, imageUrl });

    axios
      .patch(
        "http://vincegenesis-midterm-api.glitch.me/journal/" + props.post._id,
        {
          title,
          message,
          imageUrl
        }
      )
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
        <Button color="primary" onClick={toggle}>
          Update
        </Button>
        <Modal isOpen={modal} backdropTransition={{ timeout: 1300 }} size="lg">
          <ModalBody>
            <Label for="exampleText">Enter post information below</Label>
            <InputGroup size="lg">
              <Input
                type="text"
                value={title}
                onChange={event => setTitle(event.target.value)}
                placeholder={props.post.title}
              />
            </InputGroup>
            <Input
              type="textarea"
              name="message"
              id="exampleText"
              rows="15"
              placeholder={props.post.message}
              value={message}
              onChange={event => setMessage(event.target.value)}
            />
            <InputGroup>
              <Input
                type="text"
                name="imageUrl"
                placeholder={props.post.imageUrl}
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
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </Form>
    </div>
  );
};

export default ModalExample;
