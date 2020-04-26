import React from 'react'
import {connect} from 'react-redux'
import {fetchAllUsers} from '../store/allUsers'
import DeleteUser from './deleteUser'
import {Link} from 'react-router-dom'
import SingleUser from './SingleUser'
export class UserList extends React.Component {
  componentDidMount() {
    this.props.allUsers()
  }

  render() {
    console.log(this.props)
    const user = this.props.user
    return user && user.isAdmin ? (
      <div>
        <h2>Users:</h2>
        <div>
          {this.props.users.map(eachUser => {
            return (
              <div key={eachUser.id}>
                <Link to={`/users/${eachUser.id}`}>
                  <h3>User Email:</h3>
                  <div>{eachUser.email}</div>
                  {/* <SingleUser eachUser={eachUser} singleUserId={eachUser.id}/> */}
                </Link>
                <DeleteUser eachUser={eachUser} />
              </div>
            )
          })}
        </div>
      </div>
    ) : (
      'Unauthorized'
    )
  }
}

const mapState = state => {
  return {
    users: state.users,
    user: state.user
  }
}

const mapDispatch = dispatch => ({
  allUsers: () => dispatch(fetchAllUsers())
})

export default connect(mapState, mapDispatch)(UserList)
