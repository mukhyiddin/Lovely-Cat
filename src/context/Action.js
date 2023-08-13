
export function totalCart(dispatch, state) {
    return dispatch({
        type: 'TOTAL_CART',
        totalCart: state + 1,
    });

}

export function addCart(dispatch, state) {
    console.log(state);
    return dispatch({
        type: 'ADD_CART',
        addCart: state,
    });

}


export function decCart(dispatch, state) {
    return dispatch({
        type: 'DEC_CART',
        decCart: state - 1,
    });

}
