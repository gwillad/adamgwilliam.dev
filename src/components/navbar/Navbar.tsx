import bind from 'bind-decorator';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { Posts } from '../../pages/blog/posts';

import './Navbar.css';

interface INavbarState {
    blogMenuOpen: boolean
}

class _Navbar extends React.Component<RouteComponentProps, INavbarState> {
    blogMenuRef: HTMLButtonElement | null = null;
    
    state = {
        blogMenuOpen: false,
    }

    @bind
    openBlogMenu() {
        this.setState({blogMenuOpen: true});
    }

    @bind
    closeBlogMenu() {
        this.setState({blogMenuOpen: false});
    }

    @bind
    navigateTo(key: string): void {
        this.closeBlogMenu();
        this.props.history.push(key);
    }

    render () {
        return (
            <AppBar position="static" elevation={0}>
                <Toolbar className="header">
                    <Button variant="contained" color="primary" disableElevation onClick={() => this.navigateTo(`/`)}><Typography variant="h6">adamgwilliam.dev</Typography></Button>
                    <div>            
                        <Button variant="contained" color="primary" disableElevation onClick={() => this.navigateTo(`/resume`)} >
                            Resume
                        </Button>
                        <Button variant="contained" color="primary" disableElevation aria-controls="blog-menu" aria-haspopup="true" onClick={this.openBlogMenu} ref={ref => this.blogMenuRef = ref}>
                            Blog
                        </Button>
                        <Menu 
                            id="blog-menu"
                            anchorEl={this.blogMenuRef}
                            keepMounted
                            open={this.state.blogMenuOpen}
                            onClose={this.closeBlogMenu}
                        >
                            {Posts.map(post => 
                                <MenuItem onClick={() => this.navigateTo(`/blog/${post.blogNavLink}`)} key={post.pageTitle}>
                                    {post.navTitle}
                                </MenuItem>)
                            }
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

const Navbar = withRouter(_Navbar);

export default Navbar;