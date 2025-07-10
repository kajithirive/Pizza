import React from "react";
import photo from "./Img.png"
import "./style.css"
// import Header from "./Header";
// import Pizza from "./Pizza.js";
// const pizzaData = [
//   {
//     name: "Focaccia",
//     ingredients: "Bread with italian olive oil and rosemary",
//     price: 6,
//     photoName: "pizzas/focaccia.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Margherita",
//     ingredients: "Tomato and mozarella",
//     price: 10,
//     photoName: "pizzas/margherita.jpg",
//     soldOut: true,
//   },
//   {
//     name: "Pizza Spinaci",
//     ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
//     price: 12,
//     photoName: "pizzas/spinaci.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Funghi",
//     ingredients: "Tomato, mozarella, mushrooms, and onion",
//     price: 12,
//     photoName: "pizzas/funghi.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Salamino",
//     ingredients: "Tomato, mozarella, and pepperoni",
//     price: 15,
//     photoName: "pizzas/salamino.jpg",
//     soldOut: true,
//   },
//   {
//     name: "Pizza Prosciutto",
//     ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
//     price: 18,
//     photoName: "pizzas/prosciutto.jpg",
//     soldOut: false,
//   },
// ];
 

// export default function App () {
//   return (
//     <>
//      <Header/>
//     <Pizza props={pizzaData}/>

//     </>
//   )
   
// }
function Skill(props){
    return(
        <div className="skill" style={{ backgroundColor: props.colour}}>
            <span>{props.course}</span>
            <span> {props.emoji}</span>
        </div>
   
    )
}
function SkillList(){
    return(
        <div className="skill-list">
        <Skill course="React" emoji="thumb" colour="red"/>
        <Skill course="CSS" emoji="hp" colour="blue"/>
        <Skill course="Java" emoji="terra" colour="Yellow"/>
        <Skill course="AWS" emoji="Azure" colour="green"/>
        </div>
    )
}
export default function App() {
    return (
       <div className="card">
        <div className="">
        <img className="avatar"src={photo} alt="Description" />
         <p>Here is the discription</p>
         <SkillList />
         </div>   
       </div> 
    )
}