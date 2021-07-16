import { ReactElement } from "react";
import NotFound from "../notFound/NotFound";
import FirstPost from "./posts/FirstPost";
import FunctionalComponentRefactor from "./posts/FunctionalComponentRefactor";

export type Post = {
    element: ReactElement,
    pageTitle: string, 
    navTitle?: string,
    blogNavLink?: string,
}

export const Posts = new Array<Post>(
    {element: <FirstPost />, pageTitle: "Welcome!", navTitle: "Welcome!", blogNavLink: "first-post"},
    {element: <FunctionalComponentRefactor />, pageTitle: "Refactoring the site", navTitle: "Refactor", blogNavLink: "refactoring-the-site"},
);
export const NotFoundPost: Post = {element: <NotFound />, pageTitle: "Not Found"};