export default (state = { currentPlayer: {}, jwtToken: null , errors: [] }, action) => {
    switch (action.type) {

        case "SET_PLAYER":
            return {
                ...state,
                currentPlayer: action.player
            }

        case "CLEAR_PLAYER":
            return {
                ...state,
                currentPlayer: null
            }

        case "SET_TOKEN":
            if (localStorage.getItem("jwtToken")) {
                return {
                    ...state,
                    jwtToken: localStorage.getItem("jwtToken")
                }
            } else {
                return state
            }

        case "DELETE_TOKEN":
            return {
                ...state,
                jwtToken: null
            }

        case "SET_ERRORS":
            return {
                ...state,
                errors: action.errors
            }

        default: return state
    }
}