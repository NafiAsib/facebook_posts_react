import React from 'react';
import Form from './components/form.component';
import Navbar from './components/navbar.component';
import Posts from './components/posts.component';

class App extends React.Component {
  state = {
    noOfLike: 0,
    noOfDislike: 0,
    id: 6,
    appearButton: false,
    posts: [
      {
        id: 1,
        title: 'First post',
        date: '01-12-2021',
        // like: undefined,
        image:
          'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%253A%252F%252Fstatic.onecms.io%252Fwp-content%252Fuploads%252Fsites%252F13%252F2015%252F04%252F05%252Ffeatured.jpg&q=85',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at sagittis lacus. Integer blandit rutrum lacus vitae porttitor. Pellentesque diam velit, tincidunt quis arcu ut, scelerisque finibus metus. Nulla risus odio, convallis sit amet mauris ac, rhoncus porttitor elit. Duis at ligula a nunc condimentum tempor eget nec magna. Nulla pharetra erat lorem, luctus imperdiet orci dapibus vitae. Nulla interdum at nulla non efficitur. Vestibulum nec dignissim ante.',
      },
      {
        id: 2,
        title: 'Second post',
        date: '03-12-2021',
        // like: undefined,
        image:
          'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%253A%252F%252Fstatic.onecms.io%252Fwp-content%252Fuploads%252Fsites%252F13%252F2015%252F04%252F05%252Ffeatured.jpg&q=85',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at sagittis lacus. Integer blandit rutrum lacus vitae porttitor. Pellentesque diam velit, tincidunt quis arcu ut, scelerisque finibus metus. Nulla risus odio, convallis sit amet mauris ac, rhoncus porttitor elit. Duis at ligula a nunc condimentum tempor eget nec magna. Nulla pharetra erat lorem, luctus imperdiet orci dapibus vitae. Nulla interdum at nulla non efficitur. Vestibulum nec dignissim ante.',
      },
      {
        id: 3,
        title: 'Third post',
        date: '02-12-2021',
        // like: undefined,
        image:
          'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%253A%252F%252Fstatic.onecms.io%252Fwp-content%252Fuploads%252Fsites%252F13%252F2015%252F04%252F05%252Ffeatured.jpg&q=85',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at sagittis lacus. Integer blandit rutrum lacus vitae porttitor. Pellentesque diam velit, tincidunt quis arcu ut, scelerisque finibus metus. Nulla risus odio, convallis sit amet mauris ac, rhoncus porttitor elit. Duis at ligula a nunc condimentum tempor eget nec magna. Nulla pharetra erat lorem, luctus imperdiet orci dapibus vitae. Nulla interdum at nulla non efficitur. Vestibulum nec dignissim ante.',
      },
      {
        id: 4,
        title: 'Fourth post',
        date: '01-12-2021',
        // like: undefined,
        image:
          'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%253A%252F%252Fstatic.onecms.io%252Fwp-content%252Fuploads%252Fsites%252F13%252F2015%252F04%252F05%252Ffeatured.jpg&q=85',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at sagittis lacus. Integer blandit rutrum lacus vitae porttitor. Pellentesque diam velit, tincidunt quis arcu ut, scelerisque finibus metus. Nulla risus odio, convallis sit amet mauris ac, rhoncus porttitor elit. Duis at ligula a nunc condimentum tempor eget nec magna. Nulla pharetra erat lorem, luctus imperdiet orci dapibus vitae. Nulla interdum at nulla non efficitur. Vestibulum nec dignissim ante.',
      },
      {
        id: 5,
        title: 'Fifth post',
        date: '05-12-2021',
        // like: undefined,
        image:
          'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%253A%252F%252Fstatic.onecms.io%252Fwp-content%252Fuploads%252Fsites%252F13%252F2015%252F04%252F05%252Ffeatured.jpg&q=85',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at sagittis lacus. Integer blandit rutrum lacus vitae porttitor. Pellentesque diam velit, tincidunt quis arcu ut, scelerisque finibus metus. Nulla risus odio, convallis sit amet mauris ac, rhoncus porttitor elit. Duis at ligula a nunc condimentum tempor eget nec magna. Nulla pharetra erat lorem, luctus imperdiet orci dapibus vitae. Nulla interdum at nulla non efficitur. Vestibulum nec dignissim ante.',
      },
    ],
  };

  // Minimal placeholder image
  // https://designshack.net/wp-content/uploads/placeholder-image.png

  onPostRemove = (id) => {
    const posts = [...this.state.posts];

    const newPosts = posts.filter((post) => {
      return post.id !== id;
    });

    this.setState({ posts: newPosts });
  };

  onAdd = () => {
    this.setState({ appearButton: true });
  };

  addPost = (post) => {
    this.setState({ appearButton: false });
    const posts = [...this.state.posts];
    posts.push(post);
    this.setState({ posts });
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
          <button className="btn btn-primary mt-2" onClick={this.onAdd}>
            Add new post
          </button>
          {this.state.appearButton ? <Form addPost={this.addPost} /> : null}
          <Posts
            posts={this.state.posts}
            onRemove={this.onPostRemove}
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
