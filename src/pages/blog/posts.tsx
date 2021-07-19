import { ReactElement } from "react";

import NotFound from "../notFound/NotFound";
import FirstPost from "./posts/FirstPost";
import FunctionalComponentRefactor from "./posts/FunctionalComponentRefactor";
import CorneLayout from "./posts/CorneLayout";

type Tag = "misc" | "dev" | "keebs" | "dnd";

export type Post = {
    index: number,
    element: ReactElement,
    pageTitle: string, 
    navTitle?: string,
    blogNavLink?: string,
    tags?: Tag[],
}

export const Posts = new Array<Post>(
    {index: 0, element: <FirstPost />, pageTitle: "Welcome!", navTitle: "Welcome!", blogNavLink: "first-post", tags: ["misc"]},
    {index: 1, element: <FunctionalComponentRefactor />, pageTitle: "Refactoring the site", navTitle: "Refactor", blogNavLink: "refactoring-the-site", tags: ["dev"]},
    {index: 2, element: <CorneLayout />, pageTitle: "Corne Layout Experiments", navTitle: "Corne Layout", blogNavLink: "corne-layout-experiments", tags: ["keebs"]}
);
export const NotFoundPost: Post = {index: -1, element: <NotFound />, pageTitle: "Not Found"};
export const PostsByTag = new Array<Array<Post>>(
    Posts.filter(post => post.tags && post.tags.findIndex(tag => tag === "misc") !== -1),
    Posts.filter(post => post.tags && post.tags.findIndex(tag => tag === "dev") !== -1),
    Posts.filter(post => post.tags && post.tags.findIndex(tag => tag === "keebs") !== -1),
    Posts.filter(post => post.tags && post.tags.findIndex(tag => tag === "dnd") !== -1),
)