import LandingPageItems from "./LandingPageItems";
import {Link} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const LandingPage=()=>{

    const [items,setItems]=useState([]);

    useEffect(()=>{fetchData();},[]);

    const fetchData=()=>{
        fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.9974533&lng=73.78980229999999&restaurantId=&catalog_qa=undefined&submitAction=ENTER")
        .then((response)=>{
            return response.json();
        })
        .then((json)=>{
            console.log(json);
            setItems(json.data.cards);
            console.log(RestaurantsMenu);
        })
        .catch(()=>{
            console.log("request failed");
        });
    }

    return(
        <div className="main-container">
            <h1>Name and information of students:</h1>
            <div className="items-container">
                {items.map((cards,index)=>{
                return(<LandingPageItems data={cards} key={index}/>);
                })}
            </div>
            <div className="buttons">
                <button><Link to={"/add"} className="add button">Add Information</Link></button>
                <button><Link to={"/delete"} className="delete button">Delete Information</Link></button>
            </div>
        </div>
    );
}

export default LandingPage;