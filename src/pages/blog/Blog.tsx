import React from 'react';
import bind from 'bind-decorator';
import { Posts, NotFoundPost, Post } from './posts';
import { Helmet } from 'react-helmet';

import './Blog.css';

interface IBlogProps {
    title: string;
}
export default class Blog extends React.Component<IBlogProps> {
    @bind
    getPageToRender() : Post {
        const page = Posts.find(post => post.blogNavLink === this.props.title);
        if (page) return page;
        return NotFoundPost;
    }

    render () {
        const page = this.getPageToRender();

        return (
            <div>
                <Helmet>
                    <title>{ page.pageTitle }</title>
                </Helmet>
                <div className={"container"}>
                    {page.element}
                </div>
            </div>
            );
    }
}