import React from 'react';
import { fetchPostsAndUsers } from '../actions';
import { connect } from 'react-redux';
import UserHeader from './UserHeader';


class PostList extends React.Component {

    //  Action creator called in here when app starts up
    //  Action creator will return an action with fetched data
    // A reducer will see the action and return the payload
    // React-Redux will cause the app to re-render

    // In most cases the component that needs the data will be responsible
    // for fetching the data itself

    // Action creators are usually responsible for making API requests
    // Redux Thunk comes into play here

    // When we get the data from an API, we send it to the store, via mapStateToProps

    componentDidMount() {
        // This calls the actionCreator which has an action hard coded into it (ie. FETCH_POSTS)
        this.props.fetchPostsAndUsers();
    };

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId}/>
                    </div>
                </div>
            );
        })
    }

    render() {
        console.log(this.props.posts);  // this proves that passing in the posts via mapStateToProps and in connect() works
        return (
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return { posts: state.posts };
};

// first arguement to connect is always mapStateToProps
// ie. getting state into the component
export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);