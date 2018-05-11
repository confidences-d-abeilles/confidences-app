
module.exports = {

    load: function (endpoint) {
        switch(endpoint) {
            case '/':
                return {
                    title : "Accueil",
                    ogtitle: "Parrainez des abeilles et soutenez-nous !",
                    ogdescription: "Le parrainage est une action commune. Ensemble, nous agissons en faveur de la filière française du miel et, plus largement, nous protégeons nos chères butineuses et notre environnement.",
                    ogurl: "https://parrainagederuches.fr/"
                }
            case '/team':
                return {
                    title: "L'équipe"
                }
            case '/jobs':
                return {
                    title: "Jobs | Confidences d'Abeilles",
                    ogtitle: "Vous cherchez un stage ? C’est parfait, on embauche !",
                    ogdescription: "Rejoindre une jeune équipe, dynamique, passionnée et participer au succès de son aventure vous tente ? Formidable, nous cherchons un(e) developer ReactJS, un(e) UX designer, un(e) communication | marketing manager",
                    ogurl: "https://parrainagederuches.fr/jobs"
                }
            default:
                return {
                    title: "Confidences d'Abeilles",
                    ogtitle: "Parrainez des abeilles et soutenez-nous !",
                    ogdescription: "Le parrainage est une action commune. Ensemble, nous agissons en faveur de la filière française du miel et, plus largement, nous protégeons nos chères butineuses et notre environnement.",
                    ogurl: "https://parrainagederuches.fr/"
                }
        }
    }
}