import React, { Component } from 'react'

import Dragger from '../Dragger'
import TestChild from './TestChild'
import TestParent from './TestParent'
import TestParentRestrictor from './TestParentRestrictor'

export default class Test extends Component {
    constructor(props) {
        super(props)

        this.testParentRestrictorDom = null
    }
    getTestParentRestrictorDom = () => {
        return this.testParentRestrictorDom
    }
    render() {
        return (
            <div className="Test" onClick={this.onClick}>
                <TestParent>
                    <Dragger>
                        <TestChild />
                    </Dragger>
                </TestParent>

                <br />
                <br />
                <br />

                <TestParentRestrictor divRef={el => { this.testParentRestrictorDom = el }}>
                    <Dragger
                        shouldRestrictParentElement={true}
                    >
                        <TestChild />
                    </Dragger>
                </TestParentRestrictor>

                <br />
                <br />
                <br />

                <TestParentRestrictor divRef={el => { this.testParentRestrictorDom = el }}>
                    <Dragger
                        shouldRestrictParentElement={true}
                        getRestrictElement={this.getTestParentRestrictorDom}
                    >
                        <TestChild />
                    </Dragger>
                </TestParentRestrictor>
            </div>
        )
    }
}