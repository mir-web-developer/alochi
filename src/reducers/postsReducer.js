const initialState = {
  selectedPost: null
//     id: 1,
//     postImage: "https://picsum.photos/300/400",
//     postTitle: "IT is title",
//     postContent: "This is the content of post",
//     postAuthor: "Mirjaxon",
//     postCreatedData: "10.01.10",
// }
};

//key, postImage, postTitle, postContent, postAuthor

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POST":
      state.selectedPost = action.payload;
      console.log(state.selectedPost)
      return state;
    default:
      return state;
  }
};

export const setPost = (post) => {
  return { type: "SET_POST", payload:post };
};
