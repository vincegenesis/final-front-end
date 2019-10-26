import React, { Component } from "react";
import { Button } from "react-bootstrap";
import CreatePostModal from "./modal/CreatePostModal";
import "./Nav.css";

class PostListHeader extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="label">
          <label>
            <h2>Posts </h2>
          </label>
        </div>
        <div className="button-create">
          <CreatePostModal ownerId={this.props.ownerId}></CreatePostModal>
        </div>
      </div>
    );
  }
}

export default PostListHeader;
