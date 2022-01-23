import React from 'react';
import Like from './like.component';

class Post extends React.Component {
  state = { liked: null };

  handleLike = () => {
    if (this.state.liked === null) {
      this.setState({ liked: true });
      this.props.increaseLike();
    } else if (this.state.liked !== true) {
      this.setState({ liked: true });
      this.props.increaseLike();
      this.props.decreaseDislike();
    } else {
      this.setState({ liked: null });
      this.props.decreaseLike();
    }
  };

  handleDislike = () => {
    if (this.state.liked === null) {
      this.setState({ liked: false });
      this.props.increaseDislike();
    } else if (this.state.liked === true) {
      this.setState({ liked: false });
      this.props.increaseDislike();
      this.props.decreaseLike();
    } else {
      this.setState({ liked: null });
      this.props.decreaseDislike();
    }
  };

  render() {
    console.log(this.props.image);
    return (
      <>
        <div className="container w-50 mt-4 ">
          <div className="card border border-info rounded-2 ">
            <div className="card-body">
              <h4 className="card-title">{this.props.title}</h4>
              <h6 className="card-subtitle mb-3">{this.props.date}</h6>
              <img
                src={this.props.image}
                width="400"
                height="300"
                alt="post-content"
                style={{ objectFit: 'contain' }}
              />
              <p className="card-text">{this.props.content}</p>
            </div>
            <form className="mb-3 p-2">
              <div className="form-group">
                <label className="m-3 mt-0 mb-0">Comments</label>
                <div className="d-flex flex-row justify-content-start align-items-center">
                  <input className="form-control m-3 mt-0 mb-0" />
                  <Like
                    liked={this.state.liked}
                    handleLike={this.handleLike}
                    handleDislike={this.handleDislike}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Post;
