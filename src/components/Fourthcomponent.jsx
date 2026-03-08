// Create a Fourthcomponent.jsx, have two variables i.e weight and height and bind them on the user interface. Then render the component on App.js
const Fourthcomponent = () => {
    let weight = 60;
    let height = 152;
    return (
        <div className="Fourthcomponent">
            <h1>Welcome to the Fourth component</h1>
            <h5>Weight is: {weight}</h5>
            <h5>Height is: {height}</h5>
        </div>
    )
}

//export your component
export default Fourthcomponent;