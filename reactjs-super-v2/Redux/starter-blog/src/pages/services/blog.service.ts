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

/**
 * Mô hình sync dữ liệu danh sách bài post dưới local sau khi thêm 1 bài post
 * Thường sẽ có 2 cách tiếp cận
 *
 * Cách 1: đây là cách những video trước đây mình dùng ✅
 * 1. Sau khi thêm 1 bài post thì server sẽ trả về data của bài post đó
 * 2. Chúng ta sẽ tiến hành lấy data đó thêm vào state redux
 * 3. Lúc này data sẽ được sync
 *
 * ==> Rủi ro cách này là nếu khi gọi request add post mà server trả về data không đủ các field để chúng ta hiển thị thì sẽ gặp lỗi. Nếu có nhiều người cùng add post thì data sẽ sync thiếu. Chưa kể chúng ta phải quản lý việc cập nhật state nữa => hơi mệt 👎
 *
 * Cách 2: Đây là cách thường dùng với RTK Query ✅
 * 1. Sau khi thêm 1 bài post thì server sẽ trả về data của bài post đó
 * 2. Chúng ta sẽ tiến hành fetch lại API get posts để cập nhật state redux
 * 3. Lúc này UI chúng ta sẽ được sync
 *
 * ==> Cách này giúp data dưới local sẽ luôn mới nhất, luôn đồng bộ với server
 * ==> Khuyết điểm là chúng ta sẽ tốn thêm 1 lần gọi API. Thực ra thì điều này có thể chấp nhận được 👍
 */

export const blogApi = createApi({
  reducerPath: 'blogApi', //Tên field trong Redux State
  tagTypes: ['Posts'], // Những kiểu tag cho phép dùng trong blogApi
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000'
  }),
  endpoints: (build) => ({
    // Generic type theo thứ tự là kiểu response trả về và argument
    getPosts: build.query<Post[], void>({
      query: () => 'posts', // method không có argument
      /**
       * providesTag có thể là array hoặc callback return array
       * Nếu có bất kỳ một invalidatesTag nào match với providesTags này thì sẽ làm cho getPosts method chạy lại và cập nhật lại danh sách các bài post cũng như các tags phía dưới
       */
      providesTags(result) {
        /**
         * Cái callback này sẽ chạy mỗi khi getPosts chạy
         * Mong muốn sẽ là return về 1 mảng kiểu
         * ```ts
         * interface Tags: {
         *  type: "Posts";
         *  id: string;
         * }[]
         * ```
         * vì thế phải thêm as const vào để báo hiệu type là Read only, không thể mutate
         */
        if (result) {
          const final = [
            ...result.map(({ id }) => ({ type: 'Posts' as const, id })),
            {
              type: 'Posts' as const,
              id: 'LIST'
            }
          ]
          return final
        }
        // const final = [{ type: 'Posts' as const, id: 'LIST' }]
        // return final
        return [{ type: 'Posts', id: 'LIST' }]
      }
    }),
    /**
     * Chúng ta dùng mutation đối với các trường hợp POST, PUT, DELETE
     * POST là response trả về và Omit<Post, 'id'> là body gửi lên
     */
    addPost: build.mutation<Post, Omit<Post, 'id'>>({
      query(body) {
        return {
          url: 'posts',
          method: 'POST',
          body
        }
      },
      /**
       * invalidatesTags cung cấp các tag để báo hiệu cho những method nào có providesTags match với nó -> thì nó sẽ bị gọi lại
       * Trong trường hợp này getPosts sẽ chạy lại
       */
      invalidatesTags: (result, error, body) => [{ type: 'Posts', id: 'LIST' }]
    })
  })
})

export const { useGetPostsQuery, useAddPostMutation } = blogApi
