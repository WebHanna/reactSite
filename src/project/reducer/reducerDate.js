const initialState = {
    arr_categories: [
        {
            id:"0",
            name:"All",
            active:true,

        },
        {
            id:"1",
            name: "Apple",
            active: false,
        },
        {
            id:"2",
            name:"Samsung",
            active: false,
        },
        {
            id:"3",
            name:"Hic",
            active: false,
        },
        {
            id:"4",
            name:"Lenovo",
            active: false,
        },
        {
            id:"5",
            name:"Microsoft",
            active: false,
        },

    ],

};

export  default function reducerDate (state = initialState , action) {
    if (action.type === 'ADD_DATA') {
        return {
            devices: action.payload,
            devices_copy: action.payload,
            arr_categories: state.arr_categories,

        };

    }  else if (action.type === 'FIND_DEVICES') {
        if(action.category === "0" ) {
            return {
                ...state,
                devices: [...state.devices_copy]
            };
        } else {
            return {
                ...state,
                devices: state.devices_copy.filter(item => item.categoryId === action.category)

            };
        }
    } else if (action.type === 'FIND_СATEGORY') {
        let arr = state.arr_categories;
        arr.forEach(function (item) {
            if (action.category === item.id) {
                item.active = true;
            } else {
                item.active = false;
            }
        });
        return {
            ...state,
            arr_categories: [...arr]
        }
    } else if (action.type === 'FIND_DEVICES_INPUT') {
        let search_name = action.search_name.toLowerCase();
        if(search_name){
            return {
                ...state,
                devices: state.devices_copy.filter(item => item.name.toLowerCase().includes(search_name)),
            }
        }else {
            return {
                ...state,
                devices: [
                    ...state.devices_copy
                ]
            };
        }

    }  return state;
}