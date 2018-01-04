import React, { Component } from 'react'
import MetaTags from 'react-meta-tags';

export default class Meta extends Component {

    constructor(props) {
        super (props);
    }

    render () {
        return (
            <MetaTags>
                <title>{(this.props.title)?this.props.title+' | Confidences d\'Abeilles':'Confidences d\'Abeilles'}</title>
            </MetaTags>
        )
    }
}
