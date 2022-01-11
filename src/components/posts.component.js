import React from 'react';
import Post from './post.component';

class Posts extends React.Component {
  state = {
    posts: [
      {
        title: 'First post',
        date: '01-12-2021',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at sagittis lacus. Integer blandit rutrum lacus vitae porttitor. Pellentesque diam velit, tincidunt quis arcu ut, scelerisque finibus metus. Nulla risus odio, convallis sit amet mauris ac, rhoncus porttitor elit. Duis at ligula a nunc condimentum tempor eget nec magna. Nulla pharetra erat lorem, luctus imperdiet orci dapibus vitae. Nulla interdum at nulla non efficitur. Vestibulum nec dignissim ante.',
      },
      {
        title: 'Second post',
        date: '03-12-2021',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at sagittis lacus. Integer blandit rutrum lacus vitae porttitor. Pellentesque diam velit, tincidunt quis arcu ut, scelerisque finibus metus. Nulla risus odio, convallis sit amet mauris ac, rhoncus porttitor elit. Duis at ligula a nunc condimentum tempor eget nec magna. Nulla pharetra erat lorem, luctus imperdiet orci dapibus vitae. Nulla interdum at nulla non efficitur. Vestibulum nec dignissim ante.',
      },
      {
        title: 'Third post',
        date: '02-12-2021',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at sagittis lacus. Integer blandit rutrum lacus vitae porttitor. Pellentesque diam velit, tincidunt quis arcu ut, scelerisque finibus metus. Nulla risus odio, convallis sit amet mauris ac, rhoncus porttitor elit. Duis at ligula a nunc condimentum tempor eget nec magna. Nulla pharetra erat lorem, luctus imperdiet orci dapibus vitae. Nulla interdum at nulla non efficitur. Vestibulum nec dignissim ante.',
      },
      {
        title: 'Fourth post',
        date: '01-12-2021',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at sagittis lacus. Integer blandit rutrum lacus vitae porttitor. Pellentesque diam velit, tincidunt quis arcu ut, scelerisque finibus metus. Nulla risus odio, convallis sit amet mauris ac, rhoncus porttitor elit. Duis at ligula a nunc condimentum tempor eget nec magna. Nulla pharetra erat lorem, luctus imperdiet orci dapibus vitae. Nulla interdum at nulla non efficitur. Vestibulum nec dignissim ante.',
      },
      {
        title: 'Fifth post',
        date: '05-12-2021',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at sagittis lacus. Integer blandit rutrum lacus vitae porttitor. Pellentesque diam velit, tincidunt quis arcu ut, scelerisque finibus metus. Nulla risus odio, convallis sit amet mauris ac, rhoncus porttitor elit. Duis at ligula a nunc condimentum tempor eget nec magna. Nulla pharetra erat lorem, luctus imperdiet orci dapibus vitae. Nulla interdum at nulla non efficitur. Vestibulum nec dignissim ante.',
      },
    ],
  };

  onRemove = (title) => {
    const posts = [...this.state.posts];

    const newPosts = posts.filter((post) => {
      return post.title !== title;
    });

    this.setState({ posts: newPosts });
  };

  render() {
    return (
      <>
        {this.state.posts.map((post) => {
          return (
            <div
              key={post.title}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <Post
                title={post.title}
                date={post.date}
                content={post.content}
                increaseLike={this.props.increaseLike}
                decreaseLike={this.props.decreaseLike}
                increaseDislike={this.props.increaseDislike}
                decreaseDislike={this.props.decreaseDislike}
              />
              <button
                className="btn btn-primary w-25 mt-2"
                onClick={() => this.onRemove(post.title)}
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
