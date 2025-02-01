import React from "react";
import ReactDOM from "react-dom/client";
import data from "./ResData.json";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/burger-cheese-with-fire-cartoon-vector-icon-illustration-food-object-icon-concept-isolated-premium_138676-5539.jpg?w=826&t=st=1695148160~exp=1695148760~hmac=15fbe29d7fb2f694e05ac95449f779d2228e6c1f46233dfd51c55f3bf5db4bdc"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
//! Dynamic Data with json
const RestaurantCard = (props) => {
  const { item } = props;
  const { name, avgRating, cuisines, areaName, cloudinaryImageId } = item;
  const imgSrc = `https://glovo.dhmedia.io/image/stores-glovo/stores/${cloudinaryImageId}`;
  return (
    <div className="res-card">
      <img src={imgSrc} alt="res-logo" className="res-logo" />
      <h3 className="res-name">{name}</h3>

      <h4 className="res-rating">
        <img
          className="res-star"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1077px-Star_icon_stylized.svg.png"
          alt="star"
        />
        {avgRating}
      </h4>
      <div className="res-items">{cuisines.join(", ")}</div>
      <div className="res-location">{areaName}</div>
    </div>
  );
};
const Body = () => {
  const resData = data?.resData;
  return (
    <div className="body">
      <div className="res-container">
        {resData.map((item) => (
          <RestaurantCard item={item.info} key={item.info.id} />
        ))}
      </div>
    </div>
  );
};
const Footer = () => {
  return <div className="footer"></div>;
};

const element = <span>React Element</span>;
const Title = () => <h1 className="head">Hello I'm Ahlem</h1>;
// React Functional Component
const number = 1000;
const HeadingComponenet = () => (
  <div id="container">
    <h2>{number}</h2>
    {element}
    <Title />
    <Title></Title>
    {Title()}
    <h1>Learn React</h1>
  </div>
);
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponenet />);
root.render(<AppLayout />);
// Destructuring
//  array destructuring
// const numbers = [1, 2, 3];
// const [first, second, third] = numbers;
// console.log(first, third); // => 1 , 3
//Object Destructuring
// const person = {
//   name: "Ahlem",
//   age: 22,
// };
// const {name} = person;
// console.log(name);
// const {name : userName, age : userAge} = person ;
// console.log(userName);
// const user = {
//   name : "Ahlem",
//   age : 25,
//   isDeveloper : true
// }
// const jsonData = JSON.stringify(user);
// const jsonData = {
//   "name" : "Ahlem",
//   "age" : 25,
//   "isDeveloper" : true
// }
// const userObject = JSON.parse(jsonData)
// const numbers = [1,2,3,4];
// console.log(numbers.join("  |  "));
// const resData = data?.resData
// const user = {
//   name : "Ahlem",
//   details : null
// }
// user.details?.email
