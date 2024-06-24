import { Component, createRef } from 'react'

export class UncontrolledComponent extends Component {
  constructor(props) {
    super(props)

    this.input = createRef()
    this.fileInput = createRef()

    this.state = {
      selectedFile: null,
      name: undefined
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('document:', document.getElementById('name').value)
    console.log(this.input.current.value)

    const formData = new FormData()
    formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name)

    console.log('selectedFile:', this.state.selectedFile)
  }

  onFileChange = (event) => {
    console.log(event.target.files[0])
    this.setState({
      selectedFile: event.target.files[0]
    })
  }

  onChangeInput = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type='text'
              value={this.state.name}
              ref={this.input}
              id='name'
              defaultValue='duynghiadev'
              onChange={this.onChangeInput}
            />
          </label>
          <input type='file' name='avatar' ref={this.fileInput} onChange={this.onFileChange} />
          <input type='submit' value='submit' />
        </form>
      </div>
    )
  }
}
