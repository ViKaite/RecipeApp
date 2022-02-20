import React, {useContext} from 'react';
import mainContext from "../context/mainContext";


const FavRecipesComp = () => {
    const {getFav, setFav} = useContext(mainContext)


    function remove (x, index) {
        const newArr = getFav.filter((x, i) => i !== index)
        setFav([...newArr])
    }





    return (
        <div className="d-flex column">
            {getFav.map((x,i) =>
                <div key={i} className="mb-20 singleRecCard d-flex space-btw a-center">
                <div>
                    <h2>{x.title}</h2>

                    <img src={x.image} alt=""/>
                </div>

                <div>
                    <h2>Ingredients</h2>
                    <ul>
                        {x.ingredients.map((x,i) => <li key={i}>{x}</li>  )}
                    </ul>
                </div>
                    <div>
                        <h2>Preparation Steps</h2>
                        <ul>
                            {x.preparationSteps.map((x, i) => <li key={i}>{x}</li>)}
                        </ul>
                    </div>
                    <button onClick={() => remove(x, i)}>Remove from favorites</button>

            </div>)}

        </div>
    );
};

export default FavRecipesComp;