import React, {useContext, useRef} from 'react';

import mainContext from "../context/mainContext";
import {Rating} from "@mui/material";

const OneRecipeComp = ({item}) => {

    const {getFav, setFav, value, setValue} =useContext(mainContext)

    function addToFavorites () {
        if (getFav.find(x => x.title === item.title)){
            setFav([...getFav])
        } else {
            setFav([...getFav, item])
        }
    }


    const commentsRef = useRef()

    function AddComment() {
        if(value >= 1 && commentsRef.current.value.length >0) {
            item.reviews.push({rating: value, comments: commentsRef.current.value})
            item.averageRating = Math.round(item.reviews.map(x=>x.rating).reduce((a,b) => (a+b)) / item.reviews.length)
            setValue(null)
        }
    }



    return (
        <div className="d-flex j-center">

            <div className="card d-flex a-center j-center">
                <div>
                    <h2>{item.title}</h2>
                    <Rating
                        name="simple-controlled"
                        value={item.averageRating} readOnly
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />

                </div>
                <div>
                    <h3>Ingredients:</h3>
                    <ul>
                        {item.ingredients.map((x, i) => <li key={i}>{x}</li>)}
                    </ul>
                    <h5>Preparation time: {item.preparationTime} min</h5>
                    <h3>Steps:</h3>
                    <ul>
                        {item.preparationSteps.map((x, i) => <li key={i}>{x}</li>)}
                    </ul>
                </div>
                <div>
                    {!getFav.includes(item) && <button onClick={addToFavorites}>Add To Favorites</button>}
                    <h4>your Review</h4>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                    <div>
                        <input ref={commentsRef} type="text" placeholder="Leave your comment here please..."/>
                    </div>
                    <button onClick={AddComment}>Submit</button>
                    {item.reviews.map((x, i) => <div key={i}>
                        <Rating name="read-only" value={x.rating} readOnly/>
                        <p>{x.comment}</p>
                    </div>)}
                </div>

            </div>




        </div>
    );
};

export default OneRecipeComp;