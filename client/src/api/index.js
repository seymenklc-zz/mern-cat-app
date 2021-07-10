import axios from 'axios';

const url = 'https://project-misha.herokuapp.com/api';

export const getPosts = async () => {
    const { data } = await axios.get(url);
    return data;
};
export const addNewPost = async (data) => await axios.post(`${url}/addNew`, data);
export const deletePost = async (id) => await axios.delete(`${url}/${id}`);