import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserPosts } from '../../actions/book'
import moment from 'moment'
import { Link } from 'react-router-dom'

class UserPosts extends Component {

    componentWillMount() {
        this.props.dispatch(getUserPosts(this.props.user.login.id))
    }

    showUserPosts = (user) => (
        user.userPosts ? 
            user.userPosts.user.map(item => (

                <tr key={item._id}>
                    <td>
                        <Link to={`/user/edit-post/${item._id}`}>
                            {item.name}
                        </Link>
                    </td>
                    <td>{item.author}</td>
                    <td>{moment(item.createdAt).format("MM/DD/YY")}</td>
                </tr>
            ))
        :null
    )

    render() {
        console.log(this.props)
        let user = this.props.user
        return (
            <div className="user_posts">
                <h4>Your reviews:</h4>
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Author</td>
                            <td>Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showUserPosts(user)}
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(UserPosts)