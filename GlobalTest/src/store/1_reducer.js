export const list = (state, action) => {
    switch (action.type) {
        case "ADD_LIST":
            return [...state, action.payload];
        case "REMOVE_BTN":
            return state.filter((el) => el.id !== action.id);
    }
};
