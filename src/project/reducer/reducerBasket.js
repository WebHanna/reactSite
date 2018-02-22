const initialState = {
    arr_item:[],
    price:0,
    all_quantity:0
};

export  default function reducerBasket(state = initialState, action) {
    if(action.type === 'ADD_BASKET_ITEM'){
        let all_quantity = 0;
        let changed = false;
        const arr = state.arr_item.map(item => {
            if(item.id === action.item.id){
                item.quantity++;
                changed = true;
            }
            return item;
        });

        if(changed){
            arr.forEach(function(item) {
                all_quantity += item.quantity;
            });
        } else {
            state.arr_item.forEach(function(item) {
                all_quantity += item.quantity;
            });

            all_quantity += action.item.quantity;
        }

        return {
            ...state,
            arr_item: changed ? arr : [...state.arr_item, {...action.item}],
            price: state.price + action.item.price,
            all_quantity: all_quantity,
        }
    }

    if(action.type === 'DELETE_ITEM'){
        let all_quantity = 0,
            price = 0;

        let arr2 = state.arr_item.filter((item) => item.id !== action.id_del);

        arr2.forEach(function(item) {
            all_quantity += item.quantity;
            price += item.price;
        });

        return {
            ...state,
            arr_item: [...arr2],
            price: price,
            all_quantity: all_quantity,
        };

    }

    if(action.type === 'CLEAR_CART'){
        return {
            ...state,
            arr_item: [],
            price: 0,
            all_quantity: 0,
        };

    }

    return state;
};

