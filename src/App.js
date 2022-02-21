import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import mainContext from "./context/mainContext";
import Toolbar from "./components/toolbar";
import {useState} from "react";
import AllRecipes from "./pages/allRecipes";
import CreateRecipePage from "./pages/createRecipePage";
import SingleRecipeCard from "./components/SingleRecipeCard";
import FavoriteRecipes from "./pages/favoriteRecipes";
import OneRecipePage from "./pages/oneRecipePage";

function App() {
    const [recipe, setRecipe] = useState([])
    const [single, setSingle] = useState([])
    const [getImage, setImage] = useState([])
    const [getIngredient, setIngredient] = useState([])
    const [getSteps, setSteps] = useState([])
    const [getFav, setFav] = useState([])
    const [value, setValue]  = useState( null)
    const [getTitleFilter,  setTitleFilter] = useState("")
    const [getIngredientFilter, setIngredientFilter] = useState("")
    const [getIngredientAmountFilter, setIngredientAmountFilter] = useState("")
    const [getPreparationTimeFilter, setPreparationTimeFilter] = useState("")
    const [getReviewsCountFilter, setReviewsCountFilter] = useState("")
    const [getAverageRatingFilter, setAverageRatingFilter] = useState("")


    return (
        <div className="App">
            <mainContext.Provider value={{
                recipe, setRecipe,
                single, setSingle,
                getImage, setImage,
                getIngredient, setIngredient,
                getSteps, setSteps,
                getFav,  setFav,
                value, setValue,
                getTitleFilter,  setTitleFilter,
                getIngredientFilter, setIngredientFilter,
                getIngredientAmountFilter, setIngredientAmountFilter,
                getPreparationTimeFilter, setPreparationTimeFilter,
                getReviewsCountFilter, setReviewsCountFilter,
                getAverageRatingFilter, setAverageRatingFilter
            }}>

                <Router>
                    <Toolbar favCount={getFav}/>
                    <Routes>
                        <Route path="/" element={<AllRecipes/>}/>
                        <Route path="/create" element={<CreateRecipePage/>}/>
                        <Route path="/recipe/:title" element={<OneRecipePage/>}/>
                        <Route path="/favorites" element ={<FavoriteRecipes/>}/>

                    </Routes>
                </Router>

            </mainContext.Provider>
        </div>
    );
}

export default App;
