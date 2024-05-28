import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Post } from 'pages/types/blog.type'

// Nếu bên slice chúng ta dùng createSlice để tạo slice thì bên RTK Query dùng createApi
// Với createApi chúng ta gọi là slice api
// Chúng ta sẽ khai báo baseUrl và các endpoints

// baseQuery được dùng cho mỗi endpoint để fetch api

// fetchBaseQuery là một function nhỏ được xây dựng trên fetch API
// Nó không thay thế hoàn toàn được Axios nhưng sẽ giải quyết được hầu hết các vấn đề của bạn
// Chúng ta có thể dùng Axios thay thế cũng được, nhưng để sau nhé

// endPoints là tập hợp những method giúp get, post, put, delete,...tương tác với server
// Khi khai báo endPoints nó sẽ sinh ra cho chúng ta các hooks tương ứng để dùng trong component
// endpoints có 2 kiểu là query và mutation
// Query: thường dùng cho GET
// Mutation: thường dùng cho các trường hợp thay đổi dữ liệu trên server như POST, PUT, DELETE

// Có thể ban đầu mọi người thấy nó phức tạp và khó hiểu
// Không sao, mình cũng thế, các bạn chỉ cần hiểu đây là cách setup RTK Query yêu cầu
// Chúng ta chỉ cần làm theo hướng dẫn là được

export const blogApi = createApi({
  reducerPath: 'blogApi', //Tên field trong Redux State
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000'
  }),
  endpoints: (build) => ({
    // Generic type theo thứ tự là kiểu response trả về và argument
    getPosts: build.query<Post[], void>({
      query: () => 'posts' // method không có argument
    })
  })
})

export const { useGetPostsQuery } = blogApi
