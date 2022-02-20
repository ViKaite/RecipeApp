import React from 'react';
import SingleRecipeCard from "../components/SingleRecipeCard";
import mainContext from "../context/mainContext";
import {useContext} from "react";

const AllRecipes = () => {
    const {recipe} = useContext(mainContext)


    return (
        <div className="d-flex wrap">

                       {recipe.map((x,i) => {
                return(
                    <SingleRecipeCard  item={x} key={i}/>
                )
            })}


        </div>
    );
};

export default AllRecipes;