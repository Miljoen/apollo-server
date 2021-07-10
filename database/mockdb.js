const users = () => {
    return [
        {
            name: 'Yoeri Moens',
            email: 'test@gmail.com',
            projects: [{title: 'Site upgrade'}]
        },
        {
            name: 'John Doe',
            email: 'john@gmail.com',
            projects: [{title: 'Site upgrade'}]
        },
    ];
};

exports.users = users();
