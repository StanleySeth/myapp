// Create a Sixthcomponent.jsx. Inside of it, have the useState with the initial value of weight being 50Kgs, have a button to update the weight to 55kgs when the button is clicked. Render the component on App.js.

import { useState } from "react";
const Sixthcomponent = () =>{
    const [weight, setWeight] = useState("50Kgs")   
    return(
        <div className="Sixthcomponent">
            <h1>Welcome to the Sixth component</h1>
            <h2>Current weight is: {weight}</h2>
            <button onClick={ () => setWeight("55Kgs")}>Click to update the Weight</button>
        </div>
    )
}

//export your component
export default Sixthcomponent;