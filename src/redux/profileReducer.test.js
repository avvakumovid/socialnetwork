import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";

it('should add new post', function () {
    let state =  {
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
    };
    let action = addPostActionCreator('test-text')

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(5)
});
it('message text correct', function () {
    let state =  {
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
    };
    let action = addPostActionCreator('test-text')

    let newState = profileReducer(state, action)

    expect(newState.posts[4].text).toBe('test-text')
});
it('delete post by id', function () {
    let state =  {
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
    };
    let action = deletePost(1)

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
});