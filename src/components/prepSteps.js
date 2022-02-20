import React, {useContext} from 'react';
import mainContext from "../context/mainContext";

const PrepSteps = () => {
    const {getSteps, setSteps} = useContext(mainContext)

    function removeStep(x, index) {

        const removeStep = getSteps.filter((x, i) => i !== index)
        setSteps([...removeStep])
    }

    return (

        <div className="d-flex">
            {getSteps.map((x, i) =>
                <div key={i}>
                    <div>{x}</div>
                    <button onClick={() => removeStep(x, i)}>Remove</button>

                </div>)}
        </div>
    );
};

export default PrepSteps;