import React, {useContext} from 'react';
import mainContext from "../context/mainContext";


const ImageComp = () => {

    const {getImage, setImage} = useContext(mainContext)
    function removeImage(x, index){

        const removeImage = getImage.filter((x,i) => i !== index)
        setImage([...removeImage])
    }
    return (

        <div className="d-flex">
            {getImage.map((x,i)=>
            <div key={i}>
                <img src={x} alt=""/>
                <button onClick={() => removeImage(x,i)}>Remove</button>

            </div>)}


            
        </div>
    );
};

export default ImageComp;