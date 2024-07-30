import React, { useState } from 'react';
import { Grid, Box, Button, Typography, Container, Card, CardContent, Stack, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { products } from '../ServicesData/productList';

const Home = () => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item) => {
        setCartList(prevCartList => {
            const existingItem = prevCartList.find(data => data.id === item.id);
            if (!existingItem) {
                return [...prevCartList, { ...item, count: 1 }];
            } else {
                console.log('Already present in cart');
                return prevCartList;
            }
        });
    };

    const deleteCart = (item) => {
        setCartList(prevCartList => prevCartList.filter(data => data.id !== item.id));
    };

    const editCart = (item, increment) => {
        setCartList(prevCartList => prevCartList.map(data => {
            if (data.id === item.id) {
                if (increment) {
                    return { ...data, count: data.count + 1 };
                } else {
                    if (data.count <= 1) {
                        deleteCart(data);
                    } else {
                        return { ...data, count: data.count - 1 };
                    }
                }
            }
            return data;
        }));
    };

    return (
        <Grid container justifyContent='center'>
            <Grid item lg={8}>
                <Grid container spacing={5}>
                    {products.map((item, index) => (
                        <Grid item lg={5} md={4} key={index}>
                            <Container
                                sx={{
                                    textAlign: 'center',
                                    height: '100%',
                                    padding: 2,
                                    transition: 'all 0.3s ease',
                                    boxShadow: 1,
                                    borderRadius: 2,
                                    cursor: 'pointer',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: 6,
                                    },
                                }}
                            >
                                <Box
                                    component='img'
                                    src={item.imgUrl}
                                    alt={item.name}
                                    sx={{
                                        display: 'block',
                                        maxWidth: '100%',
                                        height: '52%'
                                    }}
                                />
                                <Typography textTransform='capitalize' variant="h6" sx={{ mt: 1, mb: 0.5 }}>
                                    {item.name}
                                </Typography>
                                <Typography color="red" fontWeight={600}>
                                    &#x20B9; {item.price}
                                </Typography>
                                <Button
                                    onClick={() => addToCart(item)}
                                    variant='contained'
                                    sx={{
                                        bgcolor: 'gray',
                                        textTransform: 'capitalize',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            backgroundColor: 'green',
                                        },
                                        marginTop: 1,
                                    }}
                                >
                                    Add To Cart
                                </Button>
                            </Container>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Grid item lg={4} md={4} >
                <Box sx={{ width: '100%' }}>
                    <Typography variant="h4">Cart</Typography>
                    {cartList.length === 0 ? (
                        <Typography variant="body1">Your cart is empty.</Typography>
                    ) : (
                        cartList.map(item => (
                            <Card key={item.id} sx={{ mb: 2 }}>
                                <CardContent>
                                    <Stack direction={'row'} justifyContent={'space-between'}>
                                        <Box>
                                            <Typography variant="h6">{item.name}</Typography>
                                            <Typography variant="body1">Price: &#x20B9; {item.price}</Typography>
                                        </Box>
                                        <Stack direction='row' sx={{ mt: 1 }}>
                                            <Typography
                                                onClick={() => editCart(item, false)}
                                                color="red"
                                                sx={{ padding: 1 }}
                                            >
                                                <RemoveIcon />
                                            </Typography>
                                            <Typography variant="body1" sx={{ padding: 1 }}>{item.count}</Typography>
                                            <Typography
                                                onClick={() => editCart(item, true)}
                                                color="primary"
                                                sx={{ padding: 1 }}
                                            >
                                                <AddIcon />
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </CardContent>
                            </Card>
                        ))
                    )}
                    {cartList.length > 0 && (
                        <>
                            <Divider sx={{ my: 2 }} />
                            <Typography variant="h6">
                                Total: &#x20B9; {cartList.reduce((total, item) => total + item.count * item.price, 0).toFixed(2)}
                            </Typography>
                        </>
                    )}
                </Box>
            </Grid>
        </Grid>
    );
};

export default Home;
