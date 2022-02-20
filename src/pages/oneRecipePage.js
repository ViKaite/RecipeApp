import React, {useContext} from 'react';

import OneRecipeComp from "../components/oneRecipeComp";
import mainContext from "../context/mainContext";
import {useParams} from "react-router-dom";

const OneRecipePage = () => {

    const {recipe} = useContext(mainContext)

    const {title} =useParams()

    const item = recipe.find(x => x.title === title)

    return (
        <div>
            <OneRecipeComp item={item}/>
        </div>
    );
};

export default OneRecipePage;