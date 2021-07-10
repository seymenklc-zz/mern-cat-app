import React from 'react';
import { useHistory } from 'react-router-dom';

import FileBase64 from 'react-file-base64';
import { TextField, Container, Typography, Button, Paper, CircularProgress } from '@material-ui/core';

import './Post.css';

const Post = ({ data, setData, handleSubmit, titleError }) => {
    const history = useHistory();

    const handlePush = () => {
        setTimeout(() => {
            history.push('/');
            return <CircularProgress style={{ marginTop: '15px', marginLeft: '50%' }} size={25} thickness={3} />;
        }, 1000);
    };

    return (
        <Container maxWidth='sm'>
            <Paper style={{ padding: '5px', paddingBottom: '15px', marginTop: '15px' }} elevation={6}>
                <Typography variant='h6' color='secondary' align='center'>Add a New Misha!</Typography>
                <form onSubmit={handleSubmit} autoComplete='off' noValidate>
                    <div className="form__components">
                        <div className='form__TextInput'>
                            <TextField
                                onChange={(e) => setData({ ...data, title: e.target.value })}
                                id='title'
                                label='Title'
                                variant='outlined'
                                color='secondary'
                                placeholder='Sleepy Misha'
                                value={data.title}
                                error={titleError}
                                required
                            />
                        </div>
                        <Typography>Misha Image:</Typography>
                        <FileBase64
                            multiple={false}
                            onDone={({ base64 }) => setData({ ...data, file: base64 || null })}
                        />
                        <Button type='submit' variant='outlined' color='secondary' onClick={handlePush}>
                            <Typography variant='caption' color='secondary'>Add New</Typography>
                        </Button>
                    </div>
                </form>
            </Paper>
        </Container>
    );
};

export default Post;
