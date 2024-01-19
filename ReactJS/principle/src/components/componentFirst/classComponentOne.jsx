/**
 * cho ví dụ phức tạp sử dụng class component có sử dụng các Lifecycle
 */
/**
 * - Trong ví dụ này, ComplexClassComponent sử dụng componentDidMount để giả lập việc gọi API và cập nhật trạng thái của component khi dữ liệu đã được tải. Nó sử dụng state để theo dõi trạng thái loading, dữ liệu và lỗi.
 *
 * - Mặc dù đây là một ví dụ sử dụng class component, nhưng nếu bạn lưu ý, cũng có thể triển khai cùng chức năng bằng cách sử dụng function component và hooks, điều này sẽ giảm bớt boilerplate code và làm cho mã nguồn trở nên ngắn gọn hơn.
 */
import React, { Component } from 'react'

class ComplexClassComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      loading: true,
      error: null
    }
  }

  componentDidMount() {
    // Simulate fetching data from an API after component mounts
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({
          data: data,
          loading: false
        })
      })
      .catch((error) => {
        this.setState({
          loading: false,
          error: 'An error occurred while fetching data.'
        })
      })
  }

  render() {
    const { data, loading, error } = this.state

    if (loading) {
      return <div>Loading...</div>
    }

    if (error) {
      return <div>Error: {error}</div>
    }

    return (
      <div>
        <h1>Data from API:</h1>
        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default ComplexClassComponent
