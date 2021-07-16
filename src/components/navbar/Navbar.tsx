import { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { Posts } from '../../pages/blog/posts';

import './Navbar.css';

export default function Navbar() {
    const [blogMenuOpen, setBlogMenuOpen] = useState(false);
    const blogMenuRef = useRef<HTMLButtonElement>(null);
    const history = useHistory();

    function navigateTo(key: string): void {
        setBlogMenuOpen(false);
        history.push(key);
    }

    return (
        <AppBar position="static" elevation={0}>
            <Toolbar className="header">
                <Button variant="contained" color="primary" disableElevation onClick={() => navigateTo(`/`)}><Typography variant="h6">adamgwilliam.dev</Typography></Button>
                <div>            
                    <Button variant="contained" color="primary" disableElevation onClick={() => navigateTo(`/resume`)} >
                        Resume
                    </Button>
                    <Button variant="contained" color="primary" disableElevation aria-controls="blog-menu" aria-haspopup="true" onClick={() => setBlogMenuOpen(true)} ref={blogMenuRef}>
                        Blog
                    </Button>
                    <Menu 
                        id="blog-menu"
                        anchorEl={blogMenuRef.current}
                        keepMounted
                        open={blogMenuOpen}
                        onClose={() => setBlogMenuOpen(false)}
                    >
                        {Posts.map(post => 
                            <MenuItem onClick={() => navigateTo(`/blog/${post.blogNavLink}`)} key={post.pageTitle}>
                                {post.navTitle}
                            </MenuItem>)
                        }
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    );
}