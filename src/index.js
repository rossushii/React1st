//Call all functions inside services and log updated value/s
import {
    addComment,
    deleteCommentById,
    getCommentById,
    getCommentsByPostId,
    updateCommentBody
} from "./services/comments.js";
import {
    addPost,
    deletePostBy,
    deletePostsByUserId,
    getPostById,
    getPosts,
    getPostsByUser,
    updatePost,
    updatePostBody,
    updatePostTitle
} from "./services/posts.js";
import { getAllUsers, getUserById, updateUser } from "./services/users.js";


updateUser(1, { email: "roger@77.com" });
console.log(getAllUsers());


console.log("Comments:");
console.log(getCommentById(1));
console.log(getCommentsByPostId(1));
console.log('Updated comment',updateCommentBody(1, "New Body"));
console.log('Deleted comment',deleteCommentById(1));
console.log(addComment({ postId: 1, name: "New Comment", email: "test@test.com", body: "Test body" }));


console.log("\nPosts:");
console.log(getPosts());
console.log(getPostsByUser(1));
console.log(getPostById(1));
console.log(addPost({ userId: 1, title: "New Post", body: "Test body" }));
console.log('Updated title',updatePostTitle(1, "New Title"));
console.log('Updated body',updatePostBody(1, "New Body"));
console.log('Updated post',updatePost(1, { title: "Updated Title", body: "Updated Body" }));
console.log('Deleted post',deletePostBy(1));
console.log('Deleted id',deletePostsByUserId(1));

console.log("\nUsers:");
console.log(getAllUsers());
console.log(getUserById(1));
console.log('Updated user',updateUser(1, { name: "Updated Name" }));