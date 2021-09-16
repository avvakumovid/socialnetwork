
let state = {
    profilePage: {
        posts: [
            {
                id: 1,
                src: 'https://image.flaticon.com/icons/png/512/2077/2077407.png',
                text: 'Lorem ipsum dolor.',
                likeCount: 14
            },
            {
                id: 2,
                src: 'https://image.flaticon.com/icons/png/512/2077/2077402.png',
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.\n' +
                    '                  Laboriosam, libero.',
                likeCount: 19
            },
            {
                id: 3,
                src: 'https://image.flaticon.com/icons/png/512/2077/2077407.png',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
                likeCount: 8
            },
            {
                id: 4,
                src: 'https://image.flaticon.com/icons/png/512/2077/2077402.png',
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.\n' +
                    '                  Laboriosam, libero.',
                likeCount: 23
            },
        ]

    },
    messagesPage: {
        dialogs: [
            {name: 'Elena', id: 1},
            {name: 'Alex', id: 2},
            {name: 'Mark', id: 3},
            {name: 'Steve', id: 4},
            {name: 'Ivan', id: 5},

        ],
        messages: [
            {message: 'Hi!', id: 1},
            {message: 'How are you?', id: 2},
            {message: 'What are you doing?', id: 3},
            {message: 'lol 🚀', id: 3},
        ]

    }
}

export default state;