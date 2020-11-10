import React, { Component } from 'react'
import { __GetPosts } from '../../services/PostService'
import Card from '../../components/Card'
import '../styles/Discover.css'

export default class Discover extends Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.fetchPosts()
  }

  fetchPosts = async () => {
    const posts = await __GetPosts()
    console.log(posts)
    this.setState({ posts: posts })
  }

  render() {
    return (
      <div className="discover wrapper">
        <div className="content-wrapper">
          {this.state.posts.map((post) => {
            return (
              <Card key={post._id}>
                <div className="mask flex-col discover">
                  <div className="flex-col">
                    <div className="card-content">
                      <h3>{post.title}</h3>
                      <p>{post.description.substring(0, 50)}...</p>
                    </div>
                    <div className="card-content-top flex-row">
                      <div className="stats">
                        <p>Comments</p>
                        <p>{post.comments.length}</p>
                      </div>
                      <div className="stats">
                        <p>Likes</p>
                        <p>{post.popularity_rating}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <img src={post.image_url} alt="sf" />
              </Card>
            )
          })}
        </div>
      </div>
    )
  }
}
