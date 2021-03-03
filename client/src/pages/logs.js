export const MainPageRenderLogs = (state, props, currentUser, authenticated, userHTML, userCSS) => {

    logs = [
        [true, `The state of MainPage at render: ${state}`],
        [true, `this.props of MainPage at rendering: ${props}`],
        [true, `Current User: ${currentUser}`],
        [true, `Authenticated: ${authenticated})`],
        [true, `new HTML value: ${userHTML}`],
        [true, `new CSS value:  ${userCSS}`],
        [true, `typeof ${userHTML}`],
    ]

    logs.forEach((log) => {
        if (log[0]) {
            console.log(logs[1])
        }
    })
}


// pasted from p4 for future implementation in this project
// export const MainPageLogs = (index, variable1, variable2) => {
//     // toggle logs on and off on line 3
//     const show = true 
//     const logs = {
//         0: "LOG --> PAYLOAD RESPONSE FROM LOG IN: ", variable1,
//         1: "User entered email and password: ", variable1, variable2,
//         2: "TRY{}CATCH{} ERROR --> FILE: SignInSignUpPage.js --> FUNCTION: handleSignIn(): ", variable1,
//         3: "LOG --> User clicked sign up button.",
//         4: "LOG --> FILE: SignInSignUpPage.js --> FUNCTION: handleSignUp --> USER ACCOUNT CREATED SUCCESSFULLY --> RESPONSE:", variable1,
//         5: "LOG --> FILE: SignInSignUpPage.js --> FUNCTION: handleSignUp --> CreateUser response: ", variable1,
//         6: "LOG --> FILE: SignInSignUpPage.js --> FUNCTION: handleSignUp --> failed to create account, but no error was thrown",
//         7: "LOG : SignInSignUpPage.js : handleSignUp --> response: ", variable1,
//         8: "TRY{}CATCH{} ERROR --> FILE: SignInSignUpPage.js --> FUNCTION: handleSignUp(): ", variable1,
//         9: "LOG --> FILE: SignInSignUpPage.js --> FUNCTION: handleSignUp --> response.message: ", variable1
//     }
//     if (show) console.log(logs[index])
// }


export const LandingPageRenderLogs = (state, props, currentUser, authenticated) => {

    logs = [
        [true, `The state of LandingPage at render: this.state`],
        [true, `this.props of LandingPage at rendering: this.props`],
        [true, `Current User: ${currentUser}`],
        [true, `Authenticated: ${authenticated})`],
    ]

    logs.forEach((log) => {
        if (log[0]) {
            console.log(logs[1])
        }
    })
}




export const SignupPageRenderLogs = (state, props, currentUser, authenticated) => {

    logs = [
        [true, `The state of SignupPage at render: this.state`],
        [true, `this.props of SignupPage at rendering: this.props`],
        [true, `Current User: ${currentUser}`],
        [true, `Authenticated: ${authenticated})`],
    ]

    logs.forEach((log) => {
        if (log[0]) {
            console.log(logs[1])
        }
    })
}