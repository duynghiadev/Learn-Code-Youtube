export const getCommentList = ({ page }) => {
  return fetch(`https://dummyapi.io/data/v1/comment?page=${page}&limit=5`, {
    headers: {
      'app-id': '65387c2c05dbc428ea6c1890'
    }
  }).then((res) => res.json())
}
