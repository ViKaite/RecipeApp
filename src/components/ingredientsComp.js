import React, {useContext} from 'react';
import mainContext from "../context/mainContext";


const IngredientsComp = () => {

    const {getIngredient, setIngredient} = useContext(mainContext)

    function removeIngredient(x, index) {

        const removeIngredient = getIngredient.filter((x, i) => i !== index)
        setIngredient([...removeIngredient])
    }

    return (

        <div className="d-flex">
            {getIngredient.map((x, i) =>
                <div key={i}>
                    <div>{x}</div>
                    <button onClick={() => removeIngredient(x, i)}>Remove</button>

                </div>)}


        </div>
    );
};

export default IngredientsComp;