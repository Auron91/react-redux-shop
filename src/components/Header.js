import React from 'react';
import { AppBar, Toolbar, Badge, IconButton } from '@material-ui/core'
import { MenuRounded, ShoppingCartOutlined } from '@material-ui/icons'

const Header = () => {
    return (
        <AppBar>
            <Toolbar>
                <IconButton edge="start">
                    <MenuRounded fontSize="large" />
                </IconButton>
                <IconButton edge="end">
                    <Badge badgeContent={2} color="secondary">
                        <ShoppingCartOutlined fontSize="large" />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>

    );
}

export default Header;