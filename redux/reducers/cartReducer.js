let defaultState = {
    selectedItems: { items: [], restaurantName: "" },
};

let cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            let newState = { ...state };

            if (action.payload.checkboxValue) {
                console.log("ADD TO CART");

                newState.selectedItems = {
                    items: [...newState.selectedItems.items, action.payload],
                    restaurantName: action.payload.restaurantName,
                };
            } else {
                console.log("REMOVE FROM CART");
                newState.selectedItems = {
                    items: [
                        ...newState.selectedItems.items.filter(
                            //if my item is found, but checkbox is false. then simple filter out my item which is in the cart
                            // gives the item which is in the checkbox
                            (item) => item.title !== action.payload.title
                        ),
                    ],
                    restaurantName: action.payload.restaurantName,
                };
            }
            console.log(newState, "👉");
            return newState;
        }

        default:
            return state;
    }
};


export default cartReducer;
