
module.exports = {

<<<<<<< HEAD
    load: function (endpoint) {

        const init = {
            title: "Confidences d'Abeilles",
            ogtitle: "Parrainez des abeilles et soutenez-nous !",
            ogdescription: "Le parrainage est une action commune. Ensemble, nous agissons en faveur de la filière française du miel et, plus largement, nous protégeons nos chères butineuses et notre environnement.",
            ogurl: "https://parrainagederuches.fr/",
            ogimg: "https://parrainagederuches.fr/metastatic/general.jpg"
        }
        switch(endpoint) {
            case '/team':
                return {
                    ...init,
                    title: "L'équipe",
                    ogurl: "https://parrainagederuches.fr/team"
                }
            case '/present':
                return {
                    ...init,
                    title: "Offrir un parrainage",
                    ogtitle: "Parrainer des abeilles ? Un cadeau aussi original qu&#39;utile !",
                    ogdescription: "Vous cherchiez un cadeau original qu’on puisse à la fois toucher du regard, expérimenter, déguster et qui soit concrètement bénéfique pour notre environnement ? Alors n’attendez plus et offrez un parrainage d’abeilles !",
                    ogurl: "https://parrainagederuches.fr/present",
                    ogimg: "https://parrainagederuches.fr/metastatic/cadeau.jpg"
                }
            case '/jobs':
                return {
                    title: "Jobs | Confidences d'Abeilles",
                    ogtitle: "Vous cherchez un stage ? C’est parfait, on embauche !",
                    ogdescription: "Rejoindre une jeune équipe, dynamique, passionnée et participer au succès de son aventure vous tente ? Formidable, nous cherchons un(e) developer ReactJS, un(e) UX designer, un(e) communication | marketing manager",
                    ogurl: "https://parrainagederuches.fr/jobs",
                    ogimg: "https://parrainagederuches.fr/metastatic/hiring.jpg"
                }
            default:
                return {
                    ...init
                }
        }
    }
=======
	load: function (endpoint) {

		const init = {
			title: "Confidences d'Abeilles",
			ogtitle: "Parrainez des abeilles et soutenez-nous !",
			ogdescription: "Le parrainage est une action commune. Ensemble, nous agissons en faveur de la filière française du miel et, plus largement, nous protégeons nos chères butineuses et notre environnement.",
			ogurl: "https://parrainagederuches.fr/",
			ogimg: "https://parrainagederuches.fr/metastatic/general.jpg"
		}
		switch(endpoint) {
			case '/team':
				return {
					...init,
					title: "L'équipe",
					ogtitle: "La Team Bzzzz",
					ogdescription: "Jeunes & dynamiques, découvrez l'équipe Confidences d'Abeilles qui répondra à vos souhaits les plus Bzzz !",
					ogurl: "https://parrainagederuches.fr/team",
					ogimg: "https://parrainagederuches.fr/metastatic/team.jpg"
				}
			case '/company/presentation':
				return {
					...init,
					title: "Présentation parraiange entreprise",
					ogtitle: 'Élargissez votre équipe : Recruter une ruche !',
					ogdescription: "Vous voulez inscrire votre entreprise dans une démarche participative et durable pour l’environnement ? Faites donc le choix de parrainer des ruches et laissez des milliers d'abeilles rejoindre votre équipe !",
					ogurl: "https://parrainagederuches.fr/company/presentation",
					ogimg: "https://parrainagederuches.fr/metastatic/cpres.jpg"
				}
			case '/company/more':
				return {
					...init,
					title: "En savoir plus, parrainage entreprise",
					ogtitle: 'Pour une entreprise responsable : Pensez ruche !',
					ogdescription: "Votre entreprise souhaite prendre ses responsabilités vis-à-vis de la société ? Dépasser ses préoccupations économiques, légales et adopter un comportement plus éthique ? Venez découvrir l'offre de parrainage de ruches pour les entreprises !",
					ogurl: "https://parrainagederuches.fr/company/more",
					ogimg: "https://parrainagederuches.fr/metastatic/cmore.jpg"
				}
			case '/individual/presentation':
				return {
					...init,
					title: "Présentation parraiange particulier",
					ogtitle: "Prenez votre envol grâce au parrainage d'abeilles !",
					ogdescription: "Vous avez toujours rêvé d'avoir votre propre ruche ? Confidences d'Abeilles exauce votre rêve en vous proposant un parrainage d'abeilles ! N'hésitez plus, et foncez découvrir notre offre !",
					ogurl: "https://parrainagederuches.fr/individual/presentation",
					ogimg: "https://parrainagederuches.fr/metastatic/ipres.jpg"
				}
			case '/individual/more':
				return {
					...init,
					title: "En savoir plus, parrainage particulier",
					ogtitle: "Je m'envole avec mes abeilles !",
					ogdescription: "Sensibilisé à la cause des abeilles, vous voulez ajouter votre pierre à l’édifice et réaliser votre rêve d'avoir vos propres abeilles ? Découvrez vite notre offre de parrainage d'abeilles !",
					ogurl: "https://parrainagederuches.fr/individual/more",
					ogimg: "https://parrainagederuches.fr/metastatic/imore.jpg"
				}
			case '/present':
				return {
					...init,
					title: "Offrir un parrainage",
					ogtitle: "Parrainer des abeilles ? Un cadeau aussi original qu&#39;utile !",
					ogdescription: "Vous cherchiez un cadeau original qu’on puisse à la fois toucher du regard, expérimenter, déguster et qui soit concrètement bénéfique pour notre environnement ? Alors n’attendez plus et offrez un parrainage d’abeilles !",
					ogurl: "https://parrainagederuches.fr/present",
					ogimg: "https://parrainagederuches.fr/metastatic/cadeau.jpg"
				}
			case '/about':
				return {
					...init,
					title: "Notre histoire",
					ogtitle: "Confidences d'Abeilles, un héritage et une passion !",
					ogdescription: "Oui, Confidences d’Abeilles est avant tout un héritage. Légué par notre grand-oncle, apiculteur en son temps, nous sommes tombés nous-même sous le charme des abeilles !",
					ogurl: "https://parrainagederuches.fr/about",
					ogimg: "https://parrainagederuches.fr/metastatic/about.jpg"
				}
			case '/ourvalues':
				return {
					...init,
					title: "Nos valeurs",
					ogtitle: "Confidences d'Abeilles : des valeurs & des abeilles",
					ogdescription: "Authenticité, tradition, partage, respect, plaisir & passion : autant de valeurs auxquelles Confidences d'Abeilles tient mais surtout entretient pour satisfaire nos clients les plus bzzzz !",
					ogurl: "https://parrainagederuches.fr/ourvalues",
					ogimg: "https://parrainagederuches.fr/metastatic/valeurs.jpg"
				}
			case '/jobs':
				return {
					title: "Jobs",
					ogtitle: "Vous cherchez un stage ? C’est parfait, on embauche !",
					ogdescription: "Rejoindre une jeune équipe, dynamique, passionnée et participer au succès de son aventure vous tente ? Formidable, nous cherchons un(e) developer ReactJS, un(e) UX designer, un(e) communication | marketing manager",
					ogurl: "https://parrainagederuches.fr/jobs",
					ogimg: "https://parrainagederuches.fr/metastatic/jobs.jpg"
				}
			case '/hives':
				return {
					title: "Hives",
					ogtitle: "Ça bouge dans la grande ruche Confidences d'Abeilles !",
					ogdescription: "Découvrez les derniers parrains qui ont rejoint l’aventure et qui soutiennent notre projet !",
					ogurl: "https://parrainagederuches.fr/hives",
					ogimg: "https://parrainagederuches.fr/metastatic/hives.jpg"
				}
			case '/parrains/perus':
				return {
					title: "Perus",
					ogtitle: "Les Perús bees volent dans les Alpes !",
					ogdescription: "L’éthique, le respect, la promotion de l’artisanat local et du savoir-faire ont toujours été nos leitmotivs. Ces apiculteurs les partagent aussi pour préserver l’apiculture française. On a eu envie de leur donner un coup de main ! On se régale d’avance !",
					ogurl: "https://parrainagederuches.fr/parrains/perus",
					ogimg: "https://parrainagederuches.fr/metastatic/perus.jpg"
				}
			case '/parrains/agencethuria':
				return {
					title: "Thuria",
					ogtitle: "Bzz bzz... Ça bourdonne chez Thuria !",
					ogdescription: "Thuria prend son envol avec 2 ruches parrainées chez Confidences d’Abeilles ! La « ruche » ne bourdonne plus seulement de talents, mais de véritables abeilles !",
					ogurl: "https://parrainagederuches.fr/parrains/agencethuria",
					ogimg: "https://parrainagederuches.fr/metastatic/thuria.jpg"
				}
			case '/parrains/injection-74':
				return {
					title: "Injection 74",
					ogtitle: "Une ruche pour réaffirmer nos engagements environnemantaux !",
					ogdescription: "Bien conscients que notre activité économiques à des conséquences environnementales, nous agissons concrètement pour préserver la biodiversité en parrainant une ruche. C'est aussi le moyen de sensibiliser nos clients à l'intégration de matières recyclées dans nos produits.",
					ogurl: "https://parrainagederuches.fr/parrains/injection-74",
					ogimg: "https://parrainagederuches.fr/metastatic/injection74.jpg"
				}
			case '/parrains/imag-in-tech':
				return {
					title: "Imagin Tech",
					ogtitle: "Bee connected avec IMAG'IN TECH !",
					ogdescription: "IMAG'IN TECH ne se contente plus seulement d'améliorer et simplifier votre environnement domestique, elle participe à la protection de la biodiversité. En parrainant une ruche, IMAG’IN TECH veut sensibiliser ses clients à l’installation de système économe en énergie.",
					ogurl: "https://parrainagederuches.fr/parrains/imag-in-tech",
					ogimg: "https://parrainagederuches.fr/metastatic/imagin-tech.jpg"
				}
			default:
				return {
					...init
				}
		}
	}
>>>>>>> master
}