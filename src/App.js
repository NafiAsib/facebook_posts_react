import React from 'react';
import Navbar from './components/navbar.component';
import Posts from './components/posts.component';

class App extends React.Component {
  state = {
    noOfLike: 0,
    noOfDislike: 0,
  };

  addButton = () => {
    console.log('addbutton clicked');
  };

  increaseLike = () => {
    this.setState({ noOfLike: this.state.noOfLike + 1 });
  };

  decreaseLike = () => {
    this.setState({ noOfLike: this.state.noOfLike - 1 });
  };

  increaseDislike = () => {
    this.setState({ noOfDislike: this.state.noOfDislike + 1 });
  };

  decreaseDislike = () => {
    this.setState({ noOfDislike: this.state.noOfDislike - 1 });
  };

  render() {
    return (
      <>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Navbar like={this.state.noOfLike} unlike={this.state.noOfDislike} />
          <button className="btn btn-primary mt-2" onClick={this.addButton}>
            Add new post
          </button>
          <Posts
            increaseLike={this.increaseLike}
            decreaseLike={this.decreaseLike}
            increaseDislike={this.increaseDislike}
            decreaseDislike={this.decreaseDislike}
          />
        </div>
      </>
    );
  }
}

export default App;
