const getUserArr = () => {
   let userArr = JSON.parse(localStorage.getItem("userArr"));
   if (!Array.isArray(userArr)) {
      userArr = [];
   }
   return userArr;
};
const saveUser = (user) => {
   let userArr = getUserArr();
   localStorage.setItem("userArr", JSON.stringify([...userArr, user]));
};
const saveCurrentUser = (user) => {
   localStorage.setItem("currentUser", JSON.stringify(user));
};
const getCurrentUser = () => {
   let currentUser = JSON.parse(localStorage.getItem("currentUser"));
   if (typeof currentUser !== "object") {
      currentUser = null;
   }
   return currentUser;
};
const removeCurrentUser = () => {
   localStorage.removeItem("currentUser");
};

const getListCart = () => {
   let listCart = JSON.parse(localStorage.getItem("listCart"));
   if (!Array.isArray(listCart)) {
      listCart = [];
   }
   return listCart;
};

const saveListCart = (listCart) => {
   localStorage.setItem("listCart", JSON.stringify(listCart));
};

const removeListCart = () => {
   localStorage.removeItem("listCart");
};

export default getCurrentUser;
export {
   getUserArr,
   saveCurrentUser,
   saveUser,
   removeCurrentUser,
   getListCart,
   saveListCart,
   removeListCart,
};
