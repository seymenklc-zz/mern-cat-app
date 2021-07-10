import React from 'react';

import DeleteIcon from '@material-ui/icons/Delete';
import { Card, CardActionArea, CardContent, CardMedia, CircularProgress, Container, Grid, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    media: {
        height: 400,
        width: 300
    },
    content: {
        paddingTop: '20px',
        overflowY: 'auto',
        height: '100vh',
        marginBottom: '50px',
    },
    cardContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        justifyItems: 'center',
        alignContent: 'center'
    },
    button: {
        marginLeft: '40%'
    }
}));

const Posts = ({ newPost, loading, error, handleDelete, history }) => {
    const classes = useStyles();

    return (
        <Container maxWidth='md' className={classes.content}>
            <Grid container spacing={3}>
                {!loading && !error ? newPost.map((post) => (
                    <Grid item key={post._id} xs={12} sm={6} md={4}>
                        <Card elevation={6}>
                            <CardContent className={classes.cardContent}>
                                <Typography variant='overline'>{post.title}</Typography>
                            </CardContent>
                            <CardActionArea>
                                <CardMedia className={classes.media} image={post.file} />
                            </CardActionArea>
                            <IconButton onClick={() => handleDelete(post._id)} aria-label="delete" className={classes.button}>
                                <DeleteIcon />
                            </IconButton>
                        </Card>
                    </Grid>
                )) : (
                    <CircularProgress style={{ marginTop: '15px', marginLeft: '50%' }} size={25} thickness={3} />
                )}
            </Grid>
        </Container>
    );
};

export default Posts;
