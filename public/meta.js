
module.exports = {

    load: function (endpoint) {
        switch(endpoint) {
            case '/':
                return {
                    title : "Accueil"
                }
            case '/team':
                return {
                    title: "L'équipe"
                }
            default:
                return {
                    title: "Confidences d'Abeilles"
                }
        }
    }
}