import React from 'react'; 

export class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        console.log("Initial render");
        console.log("constructor");
        this.state = {str: "hello"};
    }

    componentWillMount() {
        console.log("componentWillMount");
    }

    componentDidMount() {
        console.log("componentDidMount");
        console.log("!!!!! ======== $$$$$$");
        console.log('');
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps");
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        return true;        // 记得要返回true
    }

    componentWillUpdate() {
        console.log("componentWillUpdate");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
        console.log("!!!!! ======== $$$$$$");
        console.log('');
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    setTheState() {
        let s = "hello";
        if (this.state.str === s) {
            s = "HELLO";
        }
        this.setState({
            str: s
        });
    }

    forceItUpdate() {
        this.forceUpdate();
    }

    render() {
        console.log("render");
        return(
            <div>
                <span>{"Props:"}<h2>{parseInt(this.props.num)}</h2></span>
                <br />
                <span>{"State:"}<h2>{this.state.str}</h2></span>
            </div>
        );
    }
}
