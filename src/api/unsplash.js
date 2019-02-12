import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',        
    headers: {  
        Authorization: 
            'Client-ID f6ebf65101a9c4910203f69452e05272e1696934f15cc4bdb9dc8a17639c80c9'
    }
});