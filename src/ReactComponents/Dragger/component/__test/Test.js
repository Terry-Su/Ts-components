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
        const shouldShowCatalog = [
            'normal',
            'restrictor'
        ]
        const include = (num) => shouldShowCatalog.includes(num)

        return (
            <div className="Test" onClick={this.onClick}>
                {
                    include('normal')
                        ?
                        <TestParent>
                            <Dragger>
                                <TestChild />
                            </Dragger>
                        </TestParent>
                        :
                        null
                }
                <br />
                <br />
                <br />
                {
                    include('restrictor')
                        ?
                        <TestParentRestrictor divRef={el => { this.testParentRestrictorDom = el }}>
                            <Dragger
                                shouldRestrictParentElement={true}
                                getRestrictElement={this.getTestParentRestrictorDom}
                            >
                                <TestChild />
                            </Dragger>
                        </TestParentRestrictor>
                        :
                        null
                }
            </div>
        )
    }
}