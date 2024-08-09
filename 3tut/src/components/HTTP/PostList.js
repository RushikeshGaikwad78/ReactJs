import React, { Component } from "react";
import axios from "axios"; //1 step

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [], //2 step
      errormsg: "",
    };
  }

  componentDidMount() {
    //3 step
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errormsg: "error in displaying " });
      });
  }

  render() {
    const { posts, errormsg } = this.state;
    return (
      <div>
        List of Posts
        {posts.length
          ? posts.map((post) => (
              <div key={post.id}>
                {post.id}. {post.title} :- {post.body}
              </div>
            ))
          : null}
        {errormsg ? <div>{errormsg}</div> : null}
      </div>
    );
  }
}

export default PostList;
