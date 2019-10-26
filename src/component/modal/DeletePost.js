import React from "react";
import { Button } from "reactstrap";
import axios from "axios";

function DeletePost(props) {
  const deleteHandler = () => {
    axios
      .delete(
        "https://vincegenesis-midterm-api.glitch.me/journal/" + props.postId
      )
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <Button color="danger" onClick={deleteHandler}>
        Delete
      </Button>
    </div>
  );
}

export default DeletePost;
