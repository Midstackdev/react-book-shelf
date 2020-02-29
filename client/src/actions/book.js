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
        type: 'CLEAR_BOOK',
        payload: {}
    }
}