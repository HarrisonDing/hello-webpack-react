import React from 'react'
import {Content} from './Content'

export class Comment extends React.Component {
    render() {
        return <div>
            <select>
                <option value = "1">Tim</option>
                <option value = "2">John</option>
                <option value = "3">Hank</option>
            </select>
            <Content></Content>
            </div>;
    }
}
