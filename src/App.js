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

    return (
        <div className="App">
            <mainContext.Provider value={{
                recipe, setRecipe,
                single, setSingle,
                getImage, setImage,
                getIngredient, setIngredient,
                getSteps, setSteps,
                getFav,  setFav,
                value, setValue
            }}>

                <Router>
                    <Toolbar favCount={getFav}/>
                    <Routes>
                        <Route path="/" element={<AllRecipes/>}/>
                        <Route path="/create" element={<CreateRecipePage/>}/>
                        <Route path="/recipe/:titleRecipe" element={<OneRecipePage/>}/>
                        <Route path="/favorites" element ={<FavoriteRecipes/>}/>

                    </Routes>
                </Router>

            </mainContext.Provider>
        </div>
    );
}

export default App;
