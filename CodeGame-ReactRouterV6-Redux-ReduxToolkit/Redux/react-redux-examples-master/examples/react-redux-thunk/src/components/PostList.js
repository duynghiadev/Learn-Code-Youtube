import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchPostsAndUsers } from '../actions'
import PostUser from './PostUser'

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers()
  }

  renderList = () => {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user"></i>
          <div className="content">
            <div className="description">
               <h2>{post.title}</h2>
               <p>{post.body}</p>
               <PostUser userId={post.userId} />
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="ui relaxed divided list">
        { this.renderList() }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {
  fetchPostsAndUsers
})(PostList)