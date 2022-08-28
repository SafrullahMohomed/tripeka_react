import React, { useState, useEffect } from "react";
import axios from "axios";

const UserListUser = (props) => {
  const [user, setUser] = useState([]);

  function getUser(){
    axios.get("http://localhost:8080/api/v1/budget/user/1")
        .then(res => res.data).
        then((data) => {
          setUser(data);
        }).catch(err => console.log(err));
  }

  useEffect(() => {
    getUser();
    console.log(user.map(user => user.amount));
    
  } , []);

  return (
    
    user.map(user => <button onClick={{}} className="m-10 border-0">
    <div style={{backgroundColor: props.bgcolor}} class="block  max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-36">
      <h5 class="mb-2 text-L font-bold tracking-tight text-gray-900 dark:text-white">
        {user.title}
      </h5>
      <p class="font-normal text-gray-700 dark:text-gray-400">
        {user.amount}
      </p>
    </div>
  </button>)
      
  );
};

export default UserListUser;
