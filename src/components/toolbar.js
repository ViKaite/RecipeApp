import React from 'react';
import {Link} from "react-router-dom";

const Toolbar = ({favCount}) => {
    return (
        <div className="toolbar space-btw d-flex a-center">
            <Link to="/">All Recipes</Link>
            <Link to="/create">Create Recipe</Link>
            <Link to="/favorites">Favorites ({favCount.length})</Link>
        </div>
    );
};

export default Toolbar;