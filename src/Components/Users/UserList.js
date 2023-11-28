import Card from '../UI/Card';
import './UserList.css';
import React from 'react';

const UserList = (props) => {
    return(
        <Card className='users'>
            <ul>
                {props.users.map(user => (
                    <li key={user.id}>{user.name} ({user.age} years old)</li>
                ))}
            </ul>
        </Card>
    )
};

export default UserList;