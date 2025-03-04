import React, { useEffect, useState } from 'react';

const UserList = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const response = await fetch('http://localhost:5000/api/users');
        const data = await response.json();
        setUsers(data);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        

            {users.map(user => (
                
{user.name}

            ))}
        

    );
};

export default UserList;