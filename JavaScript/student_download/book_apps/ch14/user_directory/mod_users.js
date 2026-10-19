const url = 'https://jsonplaceholder.typicode.com/users/';

const response = await fetch(url);
const users = await response.json();

export default users;