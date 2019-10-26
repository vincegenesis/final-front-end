import React, { Component } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import UpdateModal from "./modal/UpdateModal";
import DashBoardNav from "./DashBoardNav";
import DeletePost from "./modal/DeletePost";
import PostListHeader from "./PostListHeader";
import "./Nav.css";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://vincegenesis-midterm-api.glitch.me/journal/" +
          this.props.location.state.data
      )
      .then(response => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="post-list-container">
        <DashBoardNav props={this.props}></DashBoardNav>
        <PostListHeader
          ownerId={this.props.location.state.data}
        ></PostListHeader>
        {/* ownerId : {this.props.location.state.data} */}

        {posts.reverse().map(post => (
          <div className="container" key={post._id}>
            <Card>
              <div className="card-container">
                <Card.Img variant="top" src={post.imageUrl} alt="new" />

                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.message}</Card.Text>
                  {/* <Button variant="primary"> Update </Button> */}
                  <div className="updateBtn">
                    <UpdateModal post={post}></UpdateModal>
                  </div>
                  <div className="deleteBtn">
                    <DeletePost postId={post._id}></DeletePost>
                  </div>
                </Card.Body>
              </div>
            </Card>
          </div>
        ))}
      </div>
    );
  }
}

export default PostList;
