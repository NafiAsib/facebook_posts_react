import React from 'react';
class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-light bg-light w-75">
          <span className="navbar-brand mb-0 h1">Facebook</span>
          <div className="">
            <span className="mb-0 h6">Like: {this.props.like} </span>
            <span className="mb-0 h6">Dislike: {this.props.unlike}</span>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
