/**
 * - Trong bài này mình sử dụng async await để chỉnh sửa bài promise-axios-3 ❌❌❌
 */
const axios = require('axios')

function fetchData(url) {
  return axios.get(url).then((response) => response.data)
}

async function processUser(user) {
  return {
    id: user.id,
    username: user.username,
    email: user.email,
    company: {
      name: user.company.name,
      catchPhrase: user.company.catchPhrase
    }
  }
}

async function processPost(post) {
  return {
    id: post.id,
    title: post.title.toUpperCase()
  }
}

async function processComment(comment) {
  return {
    id: comment.id,
    body: comment.body.toUpperCase()
  }
}

async function fetchDataAndProcess() {
  const userIds = [1, 2, 3]
  const processedUsers = []

  async function processUserIndex(index) {
    if (index === userIds.length) {
      setTimeout(() => {
        console.log('Processed Users:', processedUsers)
      }, 2000)
      return
    }

    const userId = userIds[index]
    try {
      const userData = await fetchData(`https://jsonplaceholder.typicode.com/users/${userId}`)
      const processedUser = await processUser(userData)

      const postIds = [1, 2, 3]
      const processedPosts = []

      async function processPostIndex(postIndex) {
        if (postIndex === postIds.length) {
          processedUser.posts = processedPosts
          processedUsers.push(processedUser)
          await processUserIndex(index + 1)
          return
        }

        const postId = postIds[postIndex]
        try {
          const postData = await fetchData(`https://jsonplaceholder.typicode.com/posts/${postId}`)
          const processedPost = await processPost(postData)

          const commentIds = [1, 2, 3]
          const processedComments = []

          async function processCommentIndex(commentIndex) {
            if (commentIndex === commentIds.length) {
              processedPost.comments = processedComments
              processedPosts.push(processedPost)
              await processPostIndex(postIndex + 1)
              return
            }

            const commentId = commentIds[commentIndex]
            try {
              const commentData = await fetchData(
                `https://jsonplaceholder.typicode.com/comments/${commentId}`
              )
              const processedComment = await processComment(commentData)

              processedComments.push(processedComment)
              await processCommentIndex(commentIndex + 1)
            } catch (commentError) {
              console.error('Error processing comment:', commentError)
            }
          }

          await processCommentIndex(0)
        } catch (postError) {
          console.error('Error processing post:', postError)
        }
      }

      await processPostIndex(0)
    } catch (userError) {
      console.error('Error processing user:', userError)
    }
  }

  await processUserIndex(0)
}

// Chạy chuỗi yêu cầu và xử lý kết quả
fetchDataAndProcess()
