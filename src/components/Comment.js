import React from 'react'
import {Content} from './Content'

export class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            names: ['Tim', 'John', 'Hank'],
            selectName: ''
        };
    }

    handleSelect(event) {
        this.setState({selectName: this.state.names[event.target.value]});
    }

    /** 
    // It seems browser cannot get state in this function, raising 
     //   'names' is null exception
     // https://codeday.me/bug/20170903/67397.html
     getInitialState() {
        return {
            names: ['Time', 'John', 'Hank', 'Jack']
        };
    } 
    */

    render() {
        let options = [];
        for (let opt in this.state.names) {
            options.push(<option value={opt} key={opt}>{this.state.names[opt]}</option>)
        };

        console.dir(options);

        return <div>
            <select onChange={this.handleSelect.bind(this)}>
                {options}
            </select>
            <Content selectName={this.state.selectName}></Content>
            </div>;
    }
}
