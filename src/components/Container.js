import React from 'react'
import {LifeCycle} from './LifeCycle'

export class Container  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: Math.random() * 100
        };
    }

    propsChange() {
        this.setState({
            num: Math.random() * 100
        });
    }

    setLifeCycleState() {
        this.refs.rLifeCycle.setTheState();
    }

    forceLifeCycleUpdate() {
        this.refs.rLifeCycle.forceItUpdate();
    }

    unmountLifeCycle() {
        // 这里卸载父组件也会导致卸载子组件
        React.unmountComponentAtNode(document.getElementById("container"));
    }

    parentForceUpdate() {
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <a href="javascript:;" className="weui_btn weui_btn_primary" onClick={this.propsChange.bind(this)}>propsChange</a>
                <br/>
                <a href="javascript:;" className="weui_btn weui_btn_primary" onClick={this.setLifeCycleState.bind(this)}>setState</a>
                <br/>
                <a href="javascript:;" className="weui_btn weui_btn_primary" onClick={this.forceLifeCycleUpdate.bind(this)}>forceUpdate</a>
                <br/>
                <a href="javascript:;" className="weui_btn weui_btn_primary" onClick={this.unmountLifeCycle.bind(this)}>unmount</a>
                <br/>
                <a href="javascript:;" className="weui_btn weui_btn_primary" onClick={this.parentForceUpdate.bind(this)}>parentForceUpdateWithoutChange</a>
                <br/>
                <LifeCycle ref="rLifeCycle" num={this.state.num}></LifeCycle>
            </div>
        );
    }
}
