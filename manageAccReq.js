fetch('https://ccs8finalproj-production.up.railway.app/accounts/manage/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQ3NDEzNTMxLCJpYXQiOjE3NDc0MDk5MzEsImp0aSI6IjgzZTdlOTU1M2Y5NjRmY2Q4NTA3MTAwMjhiNTk1MDM0IiwidXNlcl9pZCI6MTl9.o_3DRi8sdRLtXKySRC4VryfOB5BxJVscyI9oRdJbZT8'
  },
  body: JSON.stringify({
    username: 'Tian2x',
    email: 'hello111@yahoo',
    phone: '455',
    school: 'NUS',
    address: 'Philippines'
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));