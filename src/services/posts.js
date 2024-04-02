import { posts as data } from "../data/posts.js";

//private
let posts = [...data];

function getPosts() {
  return [...posts];
}

function getPostsByUser(userId) {
  return posts.filter(post => post.userId === userId);
}

function getPostById(id) {
  return posts.find(post => post.id === id);
}

function addPost(post) {
  const newPost = { id: generateId(posts), ...post };
  posts.unshift(newPost);
  return newPost;
}

function updatePostTitle(id, title) {
  const post = getPostById(id);
  if (post) {
    post.title = title;
    return true;
  }
  return false;
}

function updatePostBody(id, body) {
  const post = getPostById(id);
  if (post) {
    post.body = body;
    return true;
  }
  return false;
}

function updatePost(id, post) {
  const postIndex = posts.findIndex(post => post.id === id);
  if (postIndex !== -1) {
    posts[postIndex] = { ...posts[postIndex], ...updatePost };
    return true;
  }
  return false;
}

function deletePostBy(id) {
  const initialLength = posts.length;
  posts = posts.filter(post => post.id !== id);
  return initialLength !== posts.length;
}

function deletePostsByUserId(userId) {
  const initialLength = posts.length;
  posts = posts.filter(post => post.userId !== userId);
  return initialLength !== posts.length;
}

function generateId(data) {
  return data.length ? Math.max(...data.map(item => item.id)) + 1 : 1;
}

export {
  addPost, deletePostBy,
  deletePostsByUserId, getPostById, getPosts,
  getPostsByUser, updatePost, updatePostBody, updatePostTitle
};

