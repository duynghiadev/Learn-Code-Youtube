
  export const getCommentList = ({page}) => {
    return fetch(`https://dummyapi.io/data/v1/comment?page=${page}&limit=5`, {
      headers: {
        "app-id": "6230c1b3d82bc9fe731c7d8c",
      },
    }).then((res) => res.json());
  };
