/**
 * - Trong bài này mình sử dụng callback hell ❌❌❌
 *
 * - Đây là lỗi sai của các Dev trẻ. Nên tránh cách làm này nhé ❌❌❌
 */
/**
 * - Dưới đây là một ví dụ phức tạp hơn, thể hiện việc sử dụng Promise, Axios và các phương thức mảng để thực hiện các yêu cầu HTTP song song và xử lý kết quả một cách phức tạp. Ví dụ này sẽ giả lập việc lấy thông tin về các người dùng, bài viết và bình luận từ API JSONPlaceholder:
 *
 * - Trong ví dụ này, chúng ta thực hiện nhiều yêu cầu HTTP đồng thời và xử lý kết quả một cách phức tạp từ các người dùng, bài viết và bình luận. Mỗi bước trong chuỗi yêu cầu được thực hiện bằng cách sử dụng .then() và .catch() để xử lý kết quả thành công hoặc lỗi. Các mảng Promise được sử dụng để theo dõi và xử lý đồng thời nhiều yêu cầu.
 */
const axios = require('axios')

function fetchData(url, callback) {
  axios
    .get(url)
    .then((response) => callback(null, response.data))
    .catch((error) => callback(error, null))
}

function processUser(user, callback) {
  const processedUser = {
    id: user.id,
    username: user.username,
    email: user.email,
    company: {
      name: user.company.name,
      catchPhrase: user.company.catchPhrase
    }
  }

  if (processedUser) {
    callback(null, processedUser)
  } else {
    callback('Lỗi xử lý dữ liệu người dùng', null)
  }
}

function processPost(post, callback) {
  const processedPost = {
    id: post.id,
    title: post.title.toUpperCase()
  }

  if (processedPost) {
    callback(null, processedPost)
  } else {
    callback('Lỗi xử lý dữ liệu bài viết', null)
  }
}

function processComment(comment, callback) {
  const processedComment = {
    id: comment.id,
    body: comment.body.toUpperCase()
  }

  if (processedComment) {
    callback(null, processedComment)
  } else {
    callback('Lỗi xử lý dữ liệu bình luận', null)
  }
}

function fetchDataAndProcess(callback) {
  const userIds = [1, 2, 3]
  const processedUsers = []

  function processUserIndex(index) {
    if (index === userIds.length) {
      setTimeout(() => {
        console.log('Processed Users:', processedUsers)
        callback(null, processedUsers)
      }, 2000)
      return
    }

    const userId = userIds[index]
    fetchData(`https://jsonplaceholder.typicode.com/users/${userId}`, (userError, userData) => {
      if (userError) {
        console.error('Error fetching user data:', userError)
        callback(userError, null)
      } else {
        processUser(userData, (userProcessError, processedUser) => {
          if (userProcessError) {
            console.error('Error processing user:', userProcessError)
            callback(userProcessError, null)
          } else {
            const postIds = [1, 2, 3]
            const processedPosts = []

            function processPostIndex(postIndex) {
              if (postIndex === postIds.length) {
                processedUser.posts = processedPosts
                processedUsers.push(processedUser)
                processUserIndex(index + 1)
                return
              }

              const postId = postIds[postIndex]
              fetchData(
                `https://jsonplaceholder.typicode.com/posts/${postId}`,
                (postError, postData) => {
                  if (postError) {
                    console.error('Error fetching post data:', postError)
                    callback(postError, null)
                  } else {
                    processPost(postData, (postProcessError, processedPost) => {
                      if (postProcessError) {
                        console.error('Error processing post:', postProcessError)
                        callback(postProcessError, null)
                      } else {
                        const commentIds = [1, 2, 3]
                        const processedComments = []

                        function processCommentIndex(commentIndex) {
                          if (commentIndex === commentIds.length) {
                            processedPost.comments = processedComments
                            processedPosts.push(processedPost)
                            processPostIndex(postIndex + 1)
                            return
                          }

                          const commentId = commentIds[commentIndex]
                          fetchData(
                            `https://jsonplaceholder.typicode.com/comments/${commentId}`,
                            (commentError, commentData) => {
                              if (commentError) {
                                console.error('Error fetching comment data:', commentError)
                                callback(commentError, null)
                              } else {
                                processComment(
                                  commentData,
                                  (commentProcessError, processedComment) => {
                                    if (commentProcessError) {
                                      console.error(
                                        'Error processing comment:',
                                        commentProcessError
                                      )
                                      callback(commentProcessError, null)
                                    } else {
                                      processedComments.push(processedComment)
                                      processCommentIndex(commentIndex + 1)
                                    }
                                  }
                                )
                              }
                            }
                          )
                        }

                        processCommentIndex(0)
                      }
                    })
                  }
                }
              )
            }

            processPostIndex(0)
          }
        })
      }
    })
  }

  processUserIndex(0)
}

// Chạy chuỗi yêu cầu và xử lý kết quả
fetchDataAndProcess((finalError, finalProcessedUsers) => {
  if (finalError) {
    console.error('Final Error processing data:', finalError)
  } else {
    console.log('Final Processed Users:', finalProcessedUsers)
  }
})
