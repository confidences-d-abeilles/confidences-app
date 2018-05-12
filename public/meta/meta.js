
module.exports = {

    load: function (endpoint) {

        const init = {
            title: "Confidences d'Abeilles",
            ogtitle: "Parrainez des abeilles et soutenez-nous !",
            ogdescription: "Le parrainage est une action commune. Ensemble, nous agissons en faveur de la filière française du miel et, plus largement, nous protégeons nos chères butineuses et notre environnement.",
            ogurl: "https://parrainagederuches.fr/",
            ogimg: "https://parrainagederuches.fr/metastatic/general.jpg"
        }
        console.log(endpoint);
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
}