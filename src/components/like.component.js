import React from 'react';

class Like extends React.Component {
  getLikeClass = () => {
    let className = this.props.liked
      ? 'bi bi-hand-thumbs-up-fill'
      : 'bi bi-hand-thumbs-up';
    return className;
  };

  getUnLikeClass = () => {
    let className = this.props.liked
      ? 'bi bi-hand-thumbs-down'
      : 'bi bi-hand-thumbs-down-fill';
    return className;
  };

  render() {
    return (
      <>
        <i
          className={this.getLikeClass()}
          type="button"
          onClick={this.props.handleLike}
        />
        <i
          className={this.getUnLikeClass()}
          type="button"
          onClick={this.props.handleDislike}
        />
      </>
    );
  }
}

export default Like;
