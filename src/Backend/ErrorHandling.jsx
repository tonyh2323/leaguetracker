const fetchUsers = async () => {
    try {
        const response = await fetch('http://localhost:5000/api/users');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setUsers(data);
    } catch (error) {
        console.error('Fetch error: ', error);
    }
};