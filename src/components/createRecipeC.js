import {useRef, useContext} from 'react';
import mainContext from "../context/mainContext";
import {useNavigate} from "react-router-dom";
import ImageComp from "./imageComp";
import IngredientsComp from "./ingredientsComp";
import PrepSteps from "./prepSteps";

const CreateRecipeC = () => {
    const {
        recipe,
        setRecipe,
        getImage,
        setImage,
        getIngredient,
        setIngredient,
        getSteps,
        setSteps
    } = useContext(mainContext)

    const nav = useNavigate

    const image = useRef()
    const title = useRef()
    const ingredients = useRef()
    const preparationTime = useRef()
    const preparationSteps = useRef()



    function addImage() {
        const newImage = image.current.value
        setImage([...getImage, newImage])
    }

    function addIngredient() {
        const newIngredient = ingredients.current.value
        setIngredient([...getIngredient, newIngredient])

    }

    function addSteps() {
        const newStep = preparationSteps.current.value
        setSteps([...getSteps, newStep])
    }

    function createRecipe() {
        const recipeCard = {
            url: title.current.value.replace(/ /g, "-"),
            image: getImage,
            title: title.current.value,
            ingredients: getIngredient,
            preparationTime: preparationTime.current.value,
            preparationSteps: getSteps,
            reviews: [],
            allRating: [],
            averageRating: 0
        }
        setRecipe([...recipe, recipeCard])
    }

    return (

        <div className="d-flex">
            <div className="CreateRecipeForm d-flex column j-center">
                <h1>Create Recipe</h1>

                <ImageComp/>
                <div className="d-flex">
                    <input defaultValue="https://www.kindpng.com/picc/m/66-660011_mimosa-drink-png-mimosa-cocktail-transparent-png.png" type="text" ref={image} placeholder="image"/>
                    <div className="d-flex a-center j-center">
                        <button  className="btn" onClick={addImage}>Add</button>
                    </div>
                </div>


                <input defaultValue="Mimosa" type="text" ref={title} placeholder="title"/>

                <IngredientsComp/>
                <div className="d-flex">
                    <input defaultValue="prosecco" type="text" ref={ingredients} placeholder="ingredients"/>
                    <div className="d-flex a-center j-center">
                        <button className="btn" onClick={addIngredient}>Add</button>
                    </div>
                </div>


                <input defaultValue="5 min" type="text" ref={preparationTime} placeholder="preparation time"/>
                <PrepSteps/>

                <div className="d-flex">
                    <input defaultValue="mix" type="text" ref={preparationSteps} placeholder="preparation steps"/>
                    <div className="d-flex a-center j-center">
                        <button className="btn" onClick={addSteps}>Add</button>
                    </div>
                </div>


                <button onClick={createRecipe}>Add Recipe</button>

            </div>


        </div>
    );
};


export default CreateRecipeC;