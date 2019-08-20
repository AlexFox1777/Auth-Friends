import React from 'react';
import {axiosWithAuth} from "../../utils/axiosWithAuth";


class Friends extends React.Component {
    state = {
        friends: [],
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
            .get('http://localhost:5000/api/friends')
            .then(res => {
                console.log('data from server', res.data);
                this.setState({...this.state.friends, friends: res.data});
            })
            .catch(err => console.log(err.response));
    };

    render() {
        return (
            <>
                <p>Friends</p>
                {console.log('state', this.state.friends)}
                {this.state.friends.map(friend => (
                        <div>

                            <p>{friend.name}</p>
                            <p>{friend.age}</p>
                            <p>{friend.email}</p>
                        </div>
                    )
                )}
            </>
        )
    }
}

// {
//     id: 1,
//         name: 'Ben',
//     age: 30,
//     email: 'ben@lambdaschool.com'
// },

export default Friends;