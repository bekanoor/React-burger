export default function (state, action) { 
    switch (action.type) {
        default: 
            case 'addItem': 
                return [
                    ...state, 
                    {
                        basket: [...basket, item]
                    }
                ]

    }
}