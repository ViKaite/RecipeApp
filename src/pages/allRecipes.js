import React from 'react';
import SingleRecipeCard from "../components/SingleRecipeCard";
import context from "../context/mainContext";
import {useContext} from "react";
import FilterComp from "../components/FilterComp";
import mainContext from "../context/mainContext";

const AllRecipes = () => {
    const {recipe, getTitleFilter,
        getIngredientFilter,
        getIngredientAmountFilter,
        getPreparationTimeFilter,
        getReviewsCountFilter,
        getAverageRatingFilter,} = useContext( mainContext)

    const filtered = recipe.filter(x => {
        if (getTitleFilter === "" && getIngredientFilter === ""
            && getIngredientAmountFilter === "" && getPreparationTimeFilter === ""
            && getReviewsCountFilter === "" && getAverageRatingFilter === "") {
            return x

        }
        if (getTitleFilter.length > 0 && getIngredientFilter === ""
            && getIngredientAmountFilter === "" && getPreparationTimeFilter === ""
            && getReviewsCountFilter === "" && getAverageRatingFilter === "") {
            return x.title === getTitleFilter
        }
        if (getTitleFilter=== "" && getIngredientFilter.length > 0
            && getIngredientAmountFilter === "" && getPreparationTimeFilter === ""
            && getReviewsCountFilter === "" && getAverageRatingFilter === "") {
            return x.ingredients.includes(getIngredientFilter)
        }
        if (getTitleFilter=== "" && getIngredientFilter === ""
            && getIngredientAmountFilter.length > 0 && getPreparationTimeFilter === ""
            && getReviewsCountFilter === "" && getAverageRatingFilter === "") {
            return x.ingredients.length === Number(getIngredientAmountFilter)

        }
        if (getTitleFilter=== "" && getIngredientFilter === ""
            && getIngredientAmountFilter === "" && getPreparationTimeFilter > 0
            && getReviewsCountFilter === "" && getAverageRatingFilter === "") {
            return Number(x.preparationTime) === Number(getPreparationTimeFilter)
        }
        if (getTitleFilter=== "" && getIngredientFilter === ""
            && getIngredientAmountFilter === "" && getPreparationTimeFilter === ""
            && getReviewsCountFilter > 0 && getAverageRatingFilter === "") {
            return x.reviews.length === Number(getReviewsCountFilter)
        }
        if (getTitleFilter=== "" && getIngredientFilter === ""
            && getIngredientAmountFilter === "" && getPreparationTimeFilter === ""
            && getReviewsCountFilter === "" && getAverageRatingFilter > 0) {
            return Number(x.avgRating) === Number(getAverageRatingFilter)
        }





    })


    return (
        <div className="d-flex wrap">
                <FilterComp/>
                       {filtered.map((x,i) => {
                return(
                    <SingleRecipeCard  item={x} key={i}/>
                )
            })}


        </div>
    );
};

export default AllRecipes;