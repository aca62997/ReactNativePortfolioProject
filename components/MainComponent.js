import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { BAKERIES } from '../shared/bakeries';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bakeries: BAKERIES
        };
    }

    render() {
        return <Directory bakeries={this.state.bakeries} />;
    }
}

export default Main;