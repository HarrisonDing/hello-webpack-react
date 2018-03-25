import React from 'react'
import {Content} from './Content'

export class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            names: ['Tim', 'John', 'Hank']
        };
    }

    /*
    // It seems browser cannot get state in this function, raising 
        'names' is null exception
     getInitialState() {
        return {
            names: ['Time', 'John', 'Hank']
        };
    } */

    render() {
        let options = [];
        for (let opt in this.state.names) {
            options.push(<option value={opt} key={opt}>{this.state.names[opt]}</option>)
        };

        for(let it in options) {
            //console.log("it: " + it + ", item: " + JSON.stringify(options[it]));
            console.dir(options[it]);
        }

        return <div>
            <select>
                {options}
            </select>
            <Content></Content>
            </div>;
    }
}
