import { comments as data } from "../data/comments.js";

//private
let comments = [...data];

function getCommentById(id) {
  return comments.find(comment => comment.id === id);
}

function getCommentsByPostId(postId) {
  return comments.filter(comment => comment.postId === postId);
}

function updateCommentBody(id, body) {
  const commentIndex = comments.findIndex(comment => comment.id === id);
  if (commentIndex !== -1) {
    comments[commentIndex].body = body;
    return true;
  }
  return false;
}

function deleteCommentById(id) {
  const initialLength = comments.length;
  comments = comments.filter(comment => comment.id !== id);
  return initialLength !== comments.length;
}

function addComment(comment) {
  let nextId = data.length > 0 ? Math.max(...data.map(comment => comment.id)) + 1 : 1
  const newComment = { id: nextId++, ...comment };
  comments.push(newComment);
  return newComment;
}

export {
  addComment, deleteCommentById, getCommentById,
  getCommentsByPostId,
  updateCommentBody
};

