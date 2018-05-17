import React, { Component } from 'react'
import Banner from './../assets/img/ourvalues.jpg'
import ReactGA from 'react-ga';
import Meta from './utils/Meta'

export default class More extends Component {

	constructor(props) {
		super(props);
		ReactGA.pageview(this.props.location.pathname);
	}

	render() {
		return (
			<div className="container">
				<Meta title="Nos valeurs"/>
				<div className="row justify-content-center">
					<div className="col-lg-12">
						<img src={Banner} alt="Banner" className="img-fluid"/>
					</div>
					<div className="col-9">
						<h2 className="text-center my-5">Nos valeurs</h2>
						<h3>Authenticité</h3>
						<p>
							L’apiculture, c’est d’abord un héritage ; celui de notre grand-oncle qui veillait avec soins
							sur une vingtaine de ruches dans les Monts d’Or lyonnais. Son attachement et son respect
							pour ses petites protégées ne nous ont pas laissé indifférents et nous avons à notre tour été
							piqués par cette passion.<br /><br />
							Onze ans maintenant, onze ans que nous perpétuons les gestes traditionnels qu’il nous a
							enseigné et rien n’a changé. Les abeilles continuent de produire dans les mêmes ruches et
							le miel est stocké dans le même maturateur utilisé 50 ans auparavant. Sans ces valeurs
							solides, notre miel ne pourrait revendiquer ni cette richesse ni cette finesse.
						</p>
						<h3>Découverte & partage </h3>
						<p>
							Nous sommes de ceux qui aiment le savoir-faire, les traditions, le respect du produit, et le
							goût. Animés par l’échange, le partage et le souhait de vous faire plaisir, nous essayons de
							vous proposer un miel unique, riche de notre environnement encore préservé des Alpes.
							Notre philosophie : vous faire voyager à travers notre terroir. <br /><br />
						</p>
						<h3>Excellence & plaisir  </h3>
						<p>
							L’excellence est au cœur de notre projet : faire plaisir à nos clients en les surprenant nous
							pousse en permanence à tendre vers l’excellence. Nous nous engageons sur l’origine de
							notre miel Confidences d’Abeilles : entre vos mains, uniquement le miel produit par nos
							abeilles. C’est notre garantie d’une authenticité et d’une qualité supérieure.  <br /><br />
							Les trésors de la ruche, miel, pollen, propolis sont par nature exceptionnels. Ils marient
							saveurs, couleurs et textures au gré des fleurs butinées. Confidences d’Abeilles raffine
							cette richesse et vous la propose pour votre plus grand plaisir.<br /><br />
						</p>
						<h3>Respect & passion </h3>
						<p>
							L’apiculture est un savoir-faire ancestral qui véhicule de belles valeurs, celle du respect de
							l’abeille et de son environnement. Vivre en harmonie avec les abeilles et la nature est
							important. C’est pourquoi, à notre échelle, nous agissons concrètement en organisant des
							réunions d’information, en développant une association d’apiculture et en aidant des
							particuliers à se lancer.
						</p>
					</div>
				</div>
			</div>
	)}
}
