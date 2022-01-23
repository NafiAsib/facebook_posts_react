import React from 'react';
import Post from './post.component';

class Posts extends React.Component {
  render() {
    return (
      <>
        {this.props.posts.map((post) => {
          return (
            <div
              key={post.id}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <Post
                title={post.title}
                date={post.date}
                content={post.content}
                image={post.image}
                increaseLike={this.props.increaseLike}
                decreaseLike={this.props.decreaseLike}
                increaseDislike={this.props.increaseDislike}
                decreaseDislike={this.props.decreaseDislike}
              />
              <button
                className="btn btn-primary w-25 mt-2"
                onClick={() => this.props.onRemove(post.id)}
              >
                Remove
              </button>
            </div>
          );
        })}
      </>
    );
  }
}

export default Posts;
