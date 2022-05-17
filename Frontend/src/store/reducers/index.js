import jwt_decode from "jwt-decode";

const initialUserData = localStorage.getItem("6f0bb1e57b8223a94ededf83ad6e1e40") !== null ?
    jwt_decode(localStorage.getItem("6f0bb1e57b8223a94ededf83ad6e1e40")) : null;


const initalState = {
    loggedIn: !!initialUserData,
    userData: initialUserData
}

function rootReducer(state = initalState, action) {
    if (action.type === "LOGIN") {
        localStorage.setItem("6f0bb1e57b8223a94ededf83ad6e1e40", JSON.stringify(action.payload))
        console.log(jwt_decode(localStorage.getItem("6f0bb1e57b8223a94ededf83ad6e1e40")))
        return {
            loggedIn: true,
            userData: jwt_decode(localStorage.getItem("6f0bb1e57b8223a94ededf83ad6e1e40"))
        }
    }
    if (action.type === "LOGOUT") {
        localStorage.removeItem("6f0bb1e57b8223a94ededf83ad6e1e40")
        return {
            loggedIn: false,
            userData: null
        }
    }
    return state
}



export default rootReducer
