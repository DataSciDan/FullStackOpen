import axios from 'axios';

//const baseURL = "https://evening-plateau-97025.herokuapp.com/api/persons";
const baseURL = "http://localhost:3001/api/persons";

const pickData = response => response.data;

const getAll = () => {
        const request = axios.get(baseURL);
        return request.then(pickData);
};

const create = entry => {
        const request = axios.post(baseURL, entry);
        return request.then(pickData);
};

const update = entry => {
        const url = `${baseURL}/${entry.id}`;
        const request = axios.put(url, entry);
        return request.then(pickData);
};

const remove = id => {
        const url = `${baseURL}/${id}`;
        return axios.delete(url);
};

// eslint-disable-next-line
export default { getAll, create, update, remove };