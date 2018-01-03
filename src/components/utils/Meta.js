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
                <meta id="og-title" property="og:title" content={(this.props.ogTitle)?this.props.ogTitle:"Parrainer des abeilles ? Un cadeau aussi original qu'utile !"} />
                <meta id="og-description" property="og:description" content={(this.props.ogDescription)?this.props.ogDescription:"Que vous soyez le parrain ou que vous offriez 10 000 abeilles ou plus, vous nous aidez à les protéger et préserver la biodiversité. Prêt à prendre votre envol ?"} />
                <meta id="og-type" property="og:type" content="website" />
                <meta id="og-url" property="og:url" content={(this.props.url)?this.props.url:"https://parrainagederuches.fr"} />
                <meta id="og-image" property="og:image" content={(this.props.ogImage)?this.props.ogImage:"https://parrainagederuches.fr/cadeau.jpg"} />
            </MetaTags>
        )
    }
}
