import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';

import { Container } from '@material-ui/core';

import { addNewPost, deletePost, getPosts } from './api';

import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';
import Post from './components/Posts/PostForm/Post';

const App = () => {
    const [data, setData] = useState({ title: '', file: '' });
    const [newPost, setNewPost] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [titleError, setTitleError] = useState(false);

    const history = useHistory();

    const fetchData = async () => {
        setLoading(true);
        try {
            const data = await getPosts();
            setNewPost(data.post);
            setLoading(false);
        } catch (error) {
            setError(true);
            console.log(error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (data.title === '') setTitleError(true);

        addNewPost(data);
        setTitleError(false);
    };

    const handleDelete = async (id) => {
        await deletePost(id);
    };

    useEffect(() => {
        fetchData();
    }, [data.title, data.file, data, setNewPost, setData]);

    return (
        <Container>
            <Header />
            <Router>
                <Switch>

                    <Route exact path='/addNew' render={(props) => (
                        <Post {...props} data={data} setData={setData} handleSubmit={handleSubmit} titleError={titleError} />
                    )} />

                    <Route exact path='/' render={(props) => (
                        <Posts {...props} newPost={newPost} loading={loading} error={error} handleDelete={handleDelete} history={history} />
                    )} />

                </Switch>
            </Router>
        </Container>
    );
};

export default App;
