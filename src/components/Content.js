import React from 'react'

export class Content extends React.Component {
    constructor(props) {
        super(props);
        // text: "Reply to: " + this.props.selectName, 
        this.state = {
            inputText: ''
        }
    }

    handleChange(event) {
        this.setState({inputText: event.target.value})
    }

    handleSubmit() {
        console.log("Reply to: " + this.props.selectName + 
             + "\n" + this.state.inputText);
    }

    render() {
        return <div>
            <textarea placeholder="please enter something ..."
                onChange={this.handleChange.bind(this)}></textarea>
            <button onClick = {this.handleSubmit.bind(this)}>Submit</button>
        </div>;
    }
}
