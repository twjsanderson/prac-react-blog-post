import React from 'react';
import { connect } from 'react-redux';
// import { fetchUser } from '../actions';

class UserHeader extends React.Component {
    // componentDidMount() {
    //     this.props.fetchUser(this.props.userId);
    // }

    render() {
        // using ownProps we can pull in props and destructure
        const { user } = this.props;

        // const user = this.props.users.find((user) =>
        //     user.id === this.props.userId
        // );

        if (!user) {
            return null;
        }

        return (
            <div className="header">{user.name}</div>
        );
    }
}
// another option is to remove logic and put it into the mapStateToProps
// ownProps are a reference to props being sent into component
const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId) };
};

// const mapStateToProps = (state) => {
//     return { users: state.users }
// }

export default connect(mapStateToProps)(UserHeader);



// Lodash _.memoize allows you to make a function call and return something ie. const thing = _.memoize(getUser)
// thing(2) ----- first time this is called it will call external api and make a network request
// if we run thing(2) a second time, it will not make another api call, it will return the same result that it produced the first time
// if we change the argument given to thing(3) it will then make a new api call with the new argument