import React, {useState, useEffect} from "react";
import UserList from "./UserList";
import List2 from "./List2";
import ExpenseList from "./ExpenseList";
import FormPart from "./FormPart";
// import Chart from "./chart/ChartBudget";
// import { Doughnut } from "react-chartjs-2";
// import ChartBudget from "./chart/ChartBudget";
// import Charts from './chart/Chart';
import SearchBar from "./SearchBar";
import HoverBoxes from "./HoverBoxes";
import axios from "axios";


const Budget = () => {


// for the hover boxes
  const [yourAmount, setYourAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [individualAmount, setIndividualAmount] = useState(0);
  const [yourDue, setYourDue] = useState(0);
  // end for the hover boxes
  

  function getEvent(){
    axios.get("http://localhost:8080/api/v1/budget/totalamount/1")
        .then(res => res.data).
        then((data) => {
          setTotalAmount(parseFloat(data).toFixed(2));
        }).catch(err => console.log(err));

        axios.get("http://localhost:8080/api/v1/budget/averageamount/1")
        .then(res => res.data)
        .then((data) => {
          setIndividualAmount(parseFloat(data).toFixed(2));
        }).catch(err => console.log(err));
       

        axios.get("http://localhost:8080/api/v1/budget/individualamount/1/1")
        .then(res => res.data)
        .then((data) => {
          setYourAmount(parseFloat(data).toFixed(2));
        }).catch(err => console.log(err));

        setYourDue(parseFloat(yourAmount - individualAmount).toFixed(2));
  }

  useEffect(() => {
    getEvent();
  } , []);
  
  return (
    <div className="main-budget">
      <div className="first-row">
        <div className="first-row-row1 justify-between ">
        

          <div className="first-row-row1-col2 profile-pic flex items-center">
            <p className="font-medium mr-3 ">Hey, Mohomed</p>
            <img
              class="inline pro-img object-cover w-16 h-16 mr-2 rounded-full"
              src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Profile image"
            />
          </div>
          {/* profile pic ends here */}
        </div>

        {/* cards starts here  */}
        
      

        

        <div className="first-row-row2 flex flex-wrap justify-around">
          <div className="first-row-row2-col1 w-40 m-3">
            <HoverBoxes title="Your Amount" amount={yourAmount} />
          </div>
          <div className="first-row-row2-col2 w-40 h-20 m-3">
            <HoverBoxes title="Total Expenses" amount={totalAmount} />
          </div>
          <div className="first-row-row2-col3 w-40 m-3">
            <HoverBoxes title="Individual Expense" amount={individualAmount} />
          </div>
          <div className="first-row-row2-col3 w-40 m-3">
            <HoverBoxes title="Your Due" amount={yourDue} />
          </div>
        </div>
        {/* cards ends here  */}

        <div className="first-row-row3"></div>
      </div>
      {/* user carousel starts here */}

      <UserList> </UserList>

      {/* user carousel ends here */}

      {/* <div className="second-row"><ChartBudget></ChartBudget></div> */}
      <div className="third-row mx-5 mb-20">
        <ExpenseList className=""></ExpenseList>
      </div>
    </div>
  );
};

export default Budget;
