const url = 'https://ccs8finalproj-production.up.railway.app/notebook/post/';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQ3Mjg5ODE2LCJpYXQiOjE3NDcyODYyMTYsImp0aSI6ImQ2MTIwNTgyNDNjMDQ4MTE5NzU3YzZiOWUzYTNhZGQzIiwidXNlcl9pZCI6MTN9.ExNKd526Ozit0MyZFecF9lgNgsVZTLlHFQdEjk-GsTI';

const data = {
    title: 'Science Notebook',
    pages: [
        {
            title: 'Atoms and Molecules',
            blocks: [
                { content: 'fsfsdf' },
                { content: ' i wam you' }
            ]
        },
        {
            title: 'Hello',
            blocks: [
                { content: 'Hello world' }
            ]
        }
    ]
};

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));