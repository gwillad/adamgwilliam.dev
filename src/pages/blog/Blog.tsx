import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Posts, NotFoundPost, Post } from './posts';

import Button from '@material-ui/core/Button';
import './Blog.css';

type Direction = "prev" | "next";

interface IBlogProps {
    title: string;
}

export default function Blog(props: IBlogProps) {
    const [currentPost, setCurrentPost] = useState<Post>(NotFoundPost);
    const history = useHistory();

    useEffect(() => {
        setCurrentPost(props.title === "last" ? Posts[Posts.length - 1] : Posts.find(post => post.blogNavLink === props.title) || NotFoundPost);
    }, [currentPost.pageTitle, props.title]);

    useEffect(() => {
        document.title = currentPost.pageTitle;
    })

    function changePage(dir: Direction) {
        const nextPost = Posts.find(post => post.index === currentPost.index + (dir === "next" ? 1 : -1)) || NotFoundPost;
        history.push(`/blog/${nextPost.blogNavLink}`);
    }

    return (
        <div>
            <div className="blogNavContainer">
                <div className="prevButton">
                    { currentPost.index > 0 &&
                    <Button color="primary" disableElevation onClick={() => changePage("prev")} >
                        Previous Post
                    </Button>}
                </div>
                <div className="nextButton">
                    { currentPost.index < (Posts.length - 1) && 
                    <Button color="primary" disableElevation onClick={() => changePage("next")} >
                        Next Post
                    </Button>}
                </div>
            </div>
            <div className="container">
                {currentPost.element}
            </div>
            { currentPost.tags && 
            <div className="tagList">
                {currentPost.tags.reduce((acc, curr, i) => acc + (i === 0 ? "": " ") + curr, "")}
            </div>}
        </div>
    );
}