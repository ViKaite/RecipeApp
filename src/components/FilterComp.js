import React, {useRef, useContext} from 'react';
import mainContext from "../context/mainContext";

const FilterComp = () => {
    const {
        setTitleFilter,
        setIngredientFilter,
        setIngredientAmountFilter,
        setPreparationTimeFilter,
        setReviewsCountFilter,
        setAverageRatingFilter,


    } = useContext(mainContext)


    const TitleFilterRef = useRef()
    const IngredientFilterRef = useRef()
    const IngredientAmountFilterRef = useRef()
    const PreparationTimeFilterRef = useRef()
    const ReviewsCountFilterRef = useRef()
    const AverageRatingFilterRef = useRef()

    function filter() {
        setTitleFilter(TitleFilterRef.current.value)
        setIngredientFilter(IngredientFilterRef.current.value)
        setIngredientAmountFilter(IngredientAmountFilterRef.current.value)
        setPreparationTimeFilter(PreparationTimeFilterRef.current.value)
        setReviewsCountFilter(ReviewsCountFilterRef.current.value)
        setAverageRatingFilter(AverageRatingFilterRef.current.value)

        TitleFilterRef.current.value = ""
        IngredientFilterRef.current.value  = ""
        IngredientAmountFilterRef.current.value  = ""
        PreparationTimeFilterRef.current.value  = ""
        ReviewsCountFilterRef.current.value  = ""
        AverageRatingFilterRef.current.value  = ""
    }

    function showAll() {
        setTitleFilter("")
        setIngredientFilter("")
        setIngredientAmountFilter("")
        setPreparationTimeFilter("")
        setReviewsCountFilter("")
        setAverageRatingFilter("")
    }



    return (
        <div>

            <input ref={TitleFilterRef} placeholder="Title filter" type="text"/>
            <input ref={IngredientFilterRef} placeholder="Ingredient filter" type="text"/>
            <input ref={IngredientAmountFilterRef} placeholder="Ingredient amount filter" type="number"/>
            <input ref={PreparationTimeFilterRef} placeholder="Preparation time filter" type="number"/>
            <input ref={ReviewsCountFilterRef} placeholder="Reviews Count filter" type="number"/>
            <input ref={AverageRatingFilterRef} defaultValue={0} placeholder="Average Rating filter"  min="0" max="5" step="1" type="range"/>
            <button onClick={showAll}>Show all recipes</button>
            <button onClick={filter}>Filter</button>
        </div>
    );
};

export default FilterComp;