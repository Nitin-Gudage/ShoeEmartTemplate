import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';
import AdbIcon from '@mui/icons-material/Adb';

const NavBar = () => {
    const pages = ['Home', 'Categories', 'About us'];
    return (
        <>
            <AppBar position="sticky" sx={{ bgcolor: 'white', color: 'black', mb: 2 }}>
                <Container maxWidth="xl">
                    <Toolbar >
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            component="a"
                            href="#"
                            sx={{
                                mr: 2,
                                fontWeight: 900,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    sx={{ color: 'inherit', textTransform: 'capitalize' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default NavBar
