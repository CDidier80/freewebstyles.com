import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import { __GetPost, __UpdatePost } from '../services/PostService'
export default class UpdatePost extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      location: '',
      image_url: '',
      description: ''
    }
  }

  componentDidMount() {
    this.getPost()
  }
  getPost = async () => {
    try {
      const post = await __GetPost(this.props.match.params.post_id)
      this.setState({
        title: post.title,
        description: post.description,
        image_url: post.image_url,
        location: post.location
      })
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await __UpdatePost(this.state, this.props.match.params.post_id)
      this.props.history.push('/profile')
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { title, location, image_url, description } = this.state
    return (
      <div className="upload content">
        <form className="flex-col" onSubmit={this.handleSubmit}>
          <TextInput
            placeholder="Title"
            name="title"
            value={title}
            onChange={this.handleChange}
          />
          <TextInput
            placeholder="Location"
            name="location"
            value={location}
            onChange={this.handleChange}
          />
          <TextInput
            placeholder="Image Url"
            name="image_url"
            value={image_url}
            onChange={this.handleChange}
          />
          <TextInput
            fieldType="textfield"
            name="description"
            placeholder="Description"
            value={description}
            onChange={this.handleChange}
          />
          <button>Update</button>
        </form>
      </div>
    )
  }
}
