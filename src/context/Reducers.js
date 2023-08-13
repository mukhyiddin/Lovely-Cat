export const initialState = {
    items: [],
    total: 0,
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOTAL_CART':
            return {
                counterCart: action.totalCart,
            }
        case 'ADD_CART':
            return {
                ...state,
                items: [...state.items, action.addCart],
            }
        case 'DEC_CART':
            return {
                counterCart: action.decCart
            }

        default:
            return state;
    }
}



export default Reducer
