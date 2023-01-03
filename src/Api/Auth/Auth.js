// import React from "react";
// import { useContext } from "react";
// import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

import { toast } from "react-hot-toast";

export const setAuthToken = (user) => {
 
  const currentUser = {
    email: user.email,
    name: user.name,
    image: user.image,
    universityName: user.universityName,
    adress:user.adress
  };

  console.log("This is from auth function", user.email);

  //save user in db and get the token
  fetch(`http://localhost:5000/user/${user.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("social-token")}`,
      },
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("This is from auth.js function", data);
      
      // if(data.message==='Forbidden access' || data.message==='unauthorized access'){
      //     logOut();
      // }
      // save token in local storage
      localStorage.setItem("social-token", data.token);
    });
};
