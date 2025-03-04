const createUser = async (userData) => {
    const response = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    if (response.ok) {
        const newUser = await response.json();
        setUsers(prevUsers => [...prevUsers, newUser]);
    }
};