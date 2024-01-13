import React from 'react'
import {
    AppBar, Box, Container, IconButton, Toolbar, Tooltip, Typography
} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';

function NavBarView() {
    return (
        <AppBar position='fixed' sx={{ background: 'white' }}>
            <Container maxWidth='100%'>
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ height: '11vh', display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none' }}>
                        <Typography
                            variant="h6"
                            noWrap
                            href='/'
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'contents' },
                                flexGrow: 1,
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                color: 'black',
                                textDecoration: 'none',
                                textTransform: 'uppercase',
                                marginLeft: '5px',

                            }}
                        >
                            <span style={{ color: '#FFCD4B', }}>fu</span> <span style={{ color: '#005B41', }}>rn</span>
                        </Typography>
                    </Box>
                    <Box sx={{ flexGrow: '0' }}>
                        <Tooltip title='Cart'>
                            <IconButton>
                                <ShoppingCartIcon sx={{ color: 'black' }} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title='Favourite'>
                            <IconButton>
                                <FavoriteIcon sx={{ color: 'black' }} />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBarView