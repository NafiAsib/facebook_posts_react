import React from 'react';
import Like from './like.component';

class Post extends React.Component {
  state = {};

  handleLike = () => {
    if (this.state.liked === undefined) {
      this.setState({ liked: true });
      this.props.increaseLike();
    } else if (this.state.liked !== true) {
      this.setState({ liked: true });
      this.props.increaseLike();
      this.props.decreaseDislike();
    }
  };

  handleDislike = () => {
    if (this.state.liked === undefined) {
      this.setState({ liked: false });
      this.props.increaseDislike();
    } else if (this.state.liked === true) {
      this.setState({ liked: false });
      this.props.increaseDislike();
      this.props.decreaseLike();
    }
  };

  render() {
    return (
      <>
        <div className="container w-50 mt-4 ">
          <div className="card border border-info rounded-2 ">
            <div className="card-body">
              <h4 className="card-title">{this.props.title}</h4>
              <h6 className="card-subtitle mb-3">{this.props.date}</h6>
              <img
                src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%253A%252F%252Fstatic.onecms.io%252Fwp-content%252Fuploads%252Fsites%252F13%252F2015%252F04%252F05%252Ffeatured.jpg&q=85"
                width="400"
                height="400"
                alt="random"
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
