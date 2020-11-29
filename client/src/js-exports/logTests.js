const consoleLogTests = (componentType, fileName, thisDotPropsOrProps, thisDotState, additionalTests, location) => {
    const varToString = (variable) => Object.keys(variable)[0]

    const classCompLogTests = (fileName, rccState, rccProps, additionalTests, thisDotStateDotPropsDotLocation) => {
        console.log(`//////////////////////RENDERING TEST BEGINS FOR ${fileName}////////////////////////////////////`)
        console.log(`The state of ${fileName} at render: `, rccState)
        console.log(`The props of ${fileName} at render: `, rccProps)
        if (typeof thisDotStateDotPropsDotLocation !== "undefined"){
            console.log(`this.props.location passed by a Link/NavLink component to ${fileName} at render: `, thisDotStateDotPropsDotLocation )
            console.log("this.props.location.state passed by a Link/NavLink component at render: ", thisDotStateDotPropsDotLocation.state)
        }
        console.log("this.state.currentUser: ", rccState.currentUser)
        console.log("this.state.authenticated: ", rccState.authenticated)
        if (typeof additionalTests !== "undefined") {
        additionalTests.forEach((variable) => {
            try {
                console.log(varToString(`${varToString({variable})} of ${fileName} at render: `, variable))
            } catch(error) {
                console.log(`Error: Invalid argument "${varToString({variable})}" passed to consoleLogTests() in `, fileName)
                console.log("Error message thrown by catch block is: ", error)
                }
            })
        }
        console.log(`//////////////////////END OF RENDERING TEST FOR ${fileName}////////////////////////////////////`)
    }
    
    const functionalCompTests = (fileName, props, additionalTests, location) => {
        console.log(`//////////////////////RENDERING TEST BEGINS FOR ${props.fileName}////////////////////////////////////`)
        console.log(`The props of ${fileName} at render: `, props )
        console.log(`props.location passed by a Link/NavLink component to ${fileName} at render: `, location)
        console.log("props.location.state passed by a Link/NavLink component at render: ", props.location.state)
        console.log("props.currentUser: ", props.currentUser)
        console.log("props.authenticated: ", props.authenticated)
        if (typeof additionalTests !== "undefined") {
        additionalTests.forEach((variable) => {
            try {
                console.log(varToString(`${varToString({variable})} of ${fileName} at render: `, variable))
            } catch(error) {
                console.log(`Error: Invalid argument "${variable}" passed to consoleLogTests() in `, fileName)
                console.log("Error message thrown by catch block is: ", error)
                }
            })
        }
        console.log(`//////////////////////END OF RENDERING TEST FOR ${fileName}////////////////////////////////////`)
    }

    if (componentType === "class") {
        classCompLogTests(fileName, thisDotState, thisDotPropsOrProps, additionalTests, location) 
    } else if (componentType = "functional"){
        functionalCompTests(thisDotPropsOrProps, additionalTests, location)
    }
}

module.exports = {
    consoleLogTests
}