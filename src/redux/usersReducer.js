const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    users: [
        {id: 1, profileIamge: 'https://cdn-icons-png.flaticon.com/512/5275/5275147.png', followed: true, firstName: 'Ivan', lastName: 'Avvakumov', status: 'The Best!!!', loaction: {city: "Zvenigorod", country: "Russia"}},
        {id: 2, profileIamge: 'https://cdn-icons-png.flaticon.com/512/5275/5275305.png', followed: false, firstName: 'Anton', lastName: 'Ivanov', status: 'The Beast!!!', loaction: {city: "Moscow", country: "Russia"}},
        {id: 3, profileIamge: 'https://cdn-icons-png.flaticon.com/512/5275/5275157.png', followed: true, firstName: 'Sam', lastName: 'Fisher', status: 'SAD', loaction: {city: "London", country: "England"}},
    ]
};

const sidebarReducer = (state = initialState, action) => {
    debugger;
    switch (action.type){

        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userid) {
                        u.followed = true;
                    }
                    return u;
                })
            }
            case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userid) {
                        u.followed = false;
                    }
                    return u;
                })
            }
        default:
            let copyState = {...state}
            return state;
    }
}

export default sidebarReducer;