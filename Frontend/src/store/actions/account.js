export function login(token) {
    return { type: "LOGIN", payload: token }
}

export function logout() {
    return { type: "LOGOUT" }
}
