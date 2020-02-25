import React from 'react'

import BookContainer from '../../containers/book'

const Book = (props) => {

    return (
        <div>
            <BookContainer {...props}/>
        </div>
    )
}



export default Book