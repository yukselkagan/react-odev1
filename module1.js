import axios from 'axios';


async function getData(userId){

    const { data: users } = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const { data: posts } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

    const result = {users, posts};



    return result;

}



export default getData;

