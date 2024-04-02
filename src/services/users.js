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
  const newUserId = generateId(users);

  const newUser = {
    id: newUserId,
    ...userInfo
  };

  users.push(newUser);

  return newUser;
}

function generateId(usersArray) {
  const maxId = usersArray.reduce((max, user) => (user.id > max ? user.id : max), 0);
  return maxId + 1;
}