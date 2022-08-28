import React, { useEffect, useState } from "react";
import "../styles/Budget.css";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackspace, faTrash, faPencil } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

const ListItem = (props) => {
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
    user.map(user => (<div className="mainclass-list flex mr-3 ml-3 items-center">
    <div className="list flex items-center bg-slate-200">
      <div className="first-column mr-5">
        <div className="title font-medium text-xl">{user.title}</div>
        <div className="description text-gray-700 ">{user.description}</div>
      </div>
      <div className="second-column ">
        <div className="price font-medium ">Rs. {props.amount}</div>
        <div className="time">
          {props.date} at{" "}
          <span className="text-sm text-red-900	">{props.time}</span>
        </div>
      </div>
    </div>
    <div className="edit-delete ml-2 ">
      <div className="edit-list"><FontAwesomeIcon style={{color:"green"}} icon={faPencil} /></div>
      <div className="delete-list">
      {/*Or*/}
       <FontAwesomeIcon style={{color:"red"}} icon={faTrash} /></div>
    </div>
  </div>))
    
  );
};

export default ListItem;
