import bind from 'bind-decorator';
import React, { ReactElement } from 'react';

interface IBlogState {
}

export default class Blog extends React.Component<{}, IBlogState> {
    state = {
    }
    
    componentDidMount() {
    }

    @bind
    getPageToRender() : ReactElement {
        return (
            <div>
                <h1>First Post!</h1>
                <p>Hello, World!</p>
            </div>
            );
    }

    render () {
        return this.getPageToRender();
    }
}