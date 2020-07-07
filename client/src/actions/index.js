import axios from 'axios'


export function getBooks(
    limit = 10,
    start = 0,
    order = 'asc',
    list = ''
) {
    const request = axios.get(`/api/books?limit=${limit}&skip=${start}&order=${order}`)
                    .then(response => {
                        if(list) {
                            return [...list, ...response.data]
                        }
                        else{
                            return response.data
                        }
                    })

    return {
        type : 'GET_BOOKS',
        payload: request
    }
}

export function getBooksWithReviewer (id) {
    const request = axios.get(`/api/getBook?id=${id}`)

    return (dispatch) => {
        request.then(({data}) => {
            let book = data
            // console.log(book)

            axios.get(`/api/getReviewer?id=${book.ownerId}`)
            .then(({data}) => {
                let response = {
                    book,
                    reviewer: data
                }

                // console.log(response)

                dispatch({
                    type : 'GET_BOOKS_W_REVIEWER',
                    payload: response
                })

            })

        })
    }
}

export function clearBooksWithReviewer () {
    return {
        type : 'CLEAR_BOOKS_W_REVIEWER',
        payload: {
            book: null,
            reviewer: null
        }
    }
}

export function getUsers () {
    const request = axios.get(`/api/users`)
                    .then(response => response.data)

    return {
        type: 'GET_USERS',
        payload: request
    }
}

export function userRegister(user, userList) {
    const request = axios.post(`/api/register`, user)
    
    return (dispatch) => {
        request.then(({data}) => {
            let users = data.success ? {users: [...userList, data.user]} : {users: [...userList]}
            let response = {
                success: data.success,
                users
            }
            // console.log(response)

            dispatch({
                type: 'USER_REGISTER',
                payload: response
            })
        })
    }
}