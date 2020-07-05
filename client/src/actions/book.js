import axios from 'axios'

export function addBook(book) {
    const request = axios.post('/api/book', book)
                    .then(response => response.data)

    return {
        type: 'ADD_BOOK',
        payload: request
    }
}

export function clearNewBook() {
    return {
        type: 'CLEAR_NEW_BOOK',
        payload: {}
    }
}

export function getUserPosts(userId) {
    const request = axios.get(`/api/user_posts?user=${userId}`)
                    .then(response => response.data)
    return {
        type: 'GET_USER_POST',
        payload: request
    }
}

export function getBook(id) {
    const request = axios.get(`/api/getBook?id=${id}`)
                    .then(response => response.data)
    
    return {
        type: 'GET_BOOK',
        payload: request
    } 
}

export function updateBook(data) {
    const request = axios.post(`/api/book_update`, data) 
                    .then(response => response.data)
    return {
        type: 'UPDATE_BOOK',
        payload: request
    }
}

export function deleteBook(id) {
    const request = axios.delete(`/api/book_delete?id=${id}`)
                    .then(response => response.data)
    return {
        type: 'DELETE_BOOK',
        payload: request
    }
}

export function clearBook() {
    return {
        type: 'CLEAR_BOOK',
        payload: {
            book: null,
            updateBook: false,
            postDeleted: false
        }
    }
}