import axios from "axios";
const API_URL = "http://localhost:8080/api";

class PostService {
  // Return Token;
  getToken() {
    if (localStorage.getItem("user")) {
      return JSON.parse(localStorage.getItem("user")).token;
    } else {
      return "";
    }
  }

  // Get all posts
  getAllPosts() {
    return axios.get(API_URL + "/read/");
  }

  // Get saved posts
  getHotPosts() {
    return axios.get(`${API_URL}/read/hot`);
  }

  getPostById(_id) {
    return axios.get(`${API_URL}/read/post/${_id}`);
  }

  // Get posts by category
  getPostsByCategory(category) {
    return axios.get(`${API_URL}/read/category/${category}`);
  }

  // Get posts by username
  getPostsByUsername(username) {
    return axios.get(`${API_URL}/read/name/${username}`);
  }

  // Get posts by _id
  getPostsByUserId(_id) {
    let token = this.getToken();
    return axios.get(`${API_URL}/post/user/${_id}`, {}, {
      headers: {
        Authorization: token,
      }
    });
  }

  // Get posts by keyword
  getPostsByKeyword(keyword) {
    return axios.get(`${API_URL}/read/keyword/${keyword}`);
  }

  // Post - create a new post
  createNewPost(title, content, category) {
    let token = this.getToken();
    return axios.post(`${API_URL}/post/`,{ title, content, category },{
        headers: {
          Authorization: token,
        },
      }
    );
  }

  // Post - save a post
  savePost(_id) {
    let token = this.getToken();
    return axios.post(
      `${API_URL}/post/save/${_id}`,
      {},
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }

  unsavedPost(_id) {
    let token = this.getToken();
    return axios.post(`${API_URL}/post/unsaved/${_id}`, {}, {
      headers: {
        Authorization: token,
      }
    })
  }

  // Get - get saved post
  getSavedPost()
  {
    let token = this.getToken();
    return axios.get(`${API_URL}/post/saved`, {
      headers: {
        Authorization: token,
      }
    });
  }

  // Post - like a post
  likePost(_id) {
    let token = this.getToken();
    return axios.post(
      `${API_URL}/post/like/${_id}`,
      {},
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }

  // Post - display a post
  dislikePost(_id) {
    let token = this.getToken();
    return axios.post(
      `${API_URL}/post/dislike/${_id}`,
      {},
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }

  likeReply(_id, index) {
    let token = this.getToken();
    return axios.post(`${API_URL}/post/like/${_id}/${index}`,{}, {
      headers: {
        Authorization: token,
      }
    });
  }

  dislikeReply(_id, index) {
    let token = this.getToken();
    return axios.post(`${API_URL}/post/dislike/${_id}/${index}`,{}, {
      headers: {
        Authorization: token,
      }
    });
  }
  // Post - reply a post
  reply(_id, content) {
    let token = this.getToken();
    return axios.post(
      `${API_URL}/post/reply/${_id}`,
      { content },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }
}

export default new PostService();
