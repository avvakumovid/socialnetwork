let initialState = {friends: [
        {id: 1, src: "https://cdn-icons-png.flaticon.com/512/1658/1658751.png", name: 'Rabbit'},
        {id: 2, src: "https://cdn-icons-png.flaticon.com/512/1658/1658753.png", name: 'Deer'},
        {id: 3, src: "https://cdn-icons-png.flaticon.com/512/1658/1658749.png", name: 'Bear'}
    ]};

const sidebarReducer = (state = initialState, action) => {
    switch (action.type){
        default:
            let copyState = {...state}
            return state;
    }
}

export default sidebarReducer;