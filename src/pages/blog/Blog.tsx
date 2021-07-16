import { Posts, NotFoundPost, Post } from './posts';

import './Blog.css';
import { useEffect, useState } from 'react';

interface IBlogProps {
    title: string;
}
export default function Blog(props: IBlogProps) {
    const [page, setPage] = useState<Post>(NotFoundPost);
    useEffect(() => {
        setPage(Posts.find(post => post.blogNavLink === props.title) || NotFoundPost);
        document.title = page.pageTitle;
    }, [page.pageTitle, props.title]);

    return (
        <div>
            <div className={"container"}>
                {page.element}
            </div>
        </div>
    );
}