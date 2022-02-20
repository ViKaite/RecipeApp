import React, {useContext} from 'react';

import OneRecipeComp from "../components/oneRecipeComp";
import mainContext from "../context/mainContext";
import {useParams} from "react-router-dom";

const OneRecipePage = () => {

    const {recipe} = useContext(mainContext)

    const params =useParams()

    const item = recipe.find(x => x.title === params.title)
    const click = () =>{
        console.log(params.title)
        console.log(recipe)
        console.log(item)
    }


    return (
        <div>
            <OneRecipeComp item={item}/>
        </div>
    );
};

export default OneRecipePage;