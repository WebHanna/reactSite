export  default function reducerSetMore(state = {}, action) {

    if(action.type === 'SET_MORE'){
        let a = [
            'cpu',
            'camera',
            'size',
            'weight',
            'display',
            'battery',
            'memory'
        ];

        let arr = [];

        for (let key in action.item) {
            let arr_inner = [];
            arr_inner.push(key);
            arr_inner.push(action.item[key]);
            arr.push(arr_inner);
        };

        let filterArr = arr.filter(function(arr_inner) {
            return a.find(item => item === arr_inner[0]);
        });
        return {
            ...state,
            moreItem: action.item,
            filterArr: [...filterArr]
        };
    }
    return state;
};