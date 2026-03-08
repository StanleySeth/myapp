//HOOKS IN REACTJS
 //Are functions that allow you to use state and other React features in functional components.
//Hooks provide a simpler and more readable approach for using state, context, refs, and other React features in functional components.
import { useState } from "react";
//Declares a functional component, "Ffthcomponent" using an arrow function
const Fifthcomponent = () =>{
    //The useState() hook enables us to create dynamic websites whereby it usually has the start/initial state follwed by a state that get show when some effects happen on our website.
    const [number, setNumber] = useState(10)
    //The component returns the JSX, which describes the user interface structure.
    return(
        <div className="Fifthcomponent">
            {/*Below we bind our value for number. */}
            <h1>Welcome to the Fifth component</h1>

            <h2>Current number is: {number}</h2>
            {/*Call the setNumber function to update the number after a click effect. */}
            <button onClick={ () => setNumber(20)}>Click to update the Number</button>
        </div>
    )
}

//export your component so that it can be imported and used in other files
export default Fifthcomponent;


