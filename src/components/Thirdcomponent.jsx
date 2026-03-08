const Thirdcomponent = () => {
    //Variables enable us to create dynamic websites. (This means that the contents of the website will be changing over time.)
    //Below we declare some variables. Note: variables are usually declared just before the return statement in Reactjs.
    let name = "Stanley";
    let age = 19;
    let message = "I love programming"

    return (
        <div className="Thirdcomponent">
            <h1>Welcome to the Third component</h1>
            {/*Below we bind the variables. We use the variable names that we had declared before. */}
            <h5>My name is: {name}</h5>
            <h5>My age is: {age}</h5>
            <h5>And {message}</h5>
        </div>
    )
}

//export your component
export default Thirdcomponent;