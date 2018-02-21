export const setMore = (dispatch, item) => {
    dispatch({
        type: 'SET_MORE',
        item: item
    });
};

export const findCategory = (dispatch, category, item) => {
    dispatch({
        type: 'FIND_DEVICES',
        category: category,

    });

    dispatch({
        type: 'FIND_СATEGORY',
        category: category,
        item: item,
    });
};

export const addBasketItemId = (dispatch, item) => {
    if(!item.quantity){
        item.quantity = 1;
    }

    dispatch({
        type: 'ADD_BASKET_ITEM',
        item: item,
    });
};

export const deleteItem = (dispatch, id_del) => {
    dispatch({
        type: 'DELETE_ITEM',
        id_del: id_del
    });
};

export const clearCart = (dispatch) => {
    dispatch({
        type: 'CLEAR_CART'
    });
};

export const onFindDevice = (dispatch, search_name) => {
    dispatch({
        type: 'FIND_DEVICES_INPUT',
        search_name: search_name,
    });
};

export const changeActive = (dispatch, elem) => {
    dispatch({
        type: 'CHANGE_ACTIVE',
        elem: elem,
    });
};