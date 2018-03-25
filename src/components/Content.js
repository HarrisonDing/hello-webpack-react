import React from 'react'

export class Content extends React.Component {
    render() {
        return <p>content from {this.props.selectName}</p>;
    }
}
