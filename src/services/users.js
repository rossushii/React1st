import { users as data } from "../data/users.js";

//private
let users = [...data];

export function getAllUsers() {
  return [...users];
}

export function getUserById(id) {
  return users.find((user) => user.id === id);
}

export function updateUser(id, userInfo) {
  users = users.map((user) => {
    if (user.id === id) {
      console.log(user.id===id)
      console.log(user.id===1)
      
      return {
        ...user,
        ...userInfo,
        
      }
    }

    return user
  });
  return users
}

export function addUser(userInfo) {
  const newUserId = users.length > 0 ? users[users.length - 1].id + 1 : 1;

  const newUser = {
    id: newUserId,
    ...userInfo
  };

  users.push(newUser);

  return newUser;
}