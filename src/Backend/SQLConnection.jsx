sql.connect(config).then(pool => {
    if (pool.connected) {
        console.log('Connected to SQL Server');
    }
}).catch(err => {
    console.error('Database Connection Failed: ', err);
});