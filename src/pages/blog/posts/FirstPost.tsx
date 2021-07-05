import React from 'react';
import "../Blog.css";

export default class FirstPost extends React.Component {
    render () {
        return (
            <div>
                <h1 className="title">Welcome!</h1>
                <div className="content">
                    <p>Hey all, welcome! This here is my first post (mostly for testing). I'm planning to use this as a platform for recording things like</p>
                    <ul>
                        <li>Development struggles and (hopefully) successes</li>
                        <li>Keyboard builds, build guides, ideas, and more!</li>
                        <li>Who knows, maybe some DnD stuff?</li>
                        <li>&c</li>
                    </ul>
                    <p>But mostly I just want to maintain my thoughts on the platform while getting to work this site into something bigger. I would like this to be a place where I 
                        can store most of my work and ideas.</p>
                    <p>So! Enjoy, have a look around, do whatever. As you can see this is (currently) a completely static site. I don't really expect that to change any time soon, 
                        either. So as a matter of transparency, the code for the site can be found on <a href="https://github.com/gwillad/adamgwilliam.dev">github</a>. Feel free to 
                        check out <a href="https://github.com/gwillad">my work</a> on github as well</p>
                </div>
            </div>
        );
    }
}