import React, { Component } from 'react';
import axios from 'axios';
import './Postlist.css';

class Postlist extends Component {
  state = {
    posts: [],
    comments: [],
    loading: true
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
      const posts = res.data;
      this.setState({ posts });
    });

    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=1`)
      .then(res => {
        const comments = res.data;
        this.setState({ comments, loading: false });
      });
  }

  render() {
    return this.state.loading ? (
      <div className="preloader-div">
        <div className="preloader-wrapper active">
          <div className="spinner-layer spinner-red-only">
            <div className="circle-clipper left">
              <div className="circle" />
            </div>
            <div className="gap-patch">
              <div className="circle" />
            </div>
            <div className="circle-clipper right">
              <div className="circle" />
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="main-postlist container">
        <div className="jumbotron-div col s12">
          <ul className="">
            {this.state.posts.map(post => (
              <div key={post.id} className="post-wrapper row">
                <li className="collection-item post avatar  red lighten-2">
                  <img
                    src="https://www.yourfirstpatient.com/assets/default-user-avatar-thumbnail@2x-ad6390912469759cda3106088905fa5bfbadc41532fbaa28237209b1aa976fc9.png"
                    alt="user thumbnail"
                    className="post-circle circle"
                  />
                  <br />
                  <p className="post-text">{post.body}</p>
                </li>
                <div className="jumbotron-div col s12">
                  <ul className="collection">
                    {this.state.comments.map(comment => (
                      <li
                        key={comment.id}
                        className="collection-item comment left-align z-depth-3"
                      >
                        <img
                          src="https://www.restingpets.co.uk/wp-content/uploads/2013/04/Team-Member-girl.png"
                          alt=""
                          className="comment-circle circle"
                        />
                        <p className="comment-text">{comment.body}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Postlist;
