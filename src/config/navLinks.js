
export default {
  mobile: {
    visitors: [
      { to: '/company/presentation', label: 'Entreprise' },
      { to: '/individual/presentation', label: 'Particulier' },
      { to: '/partners', label: 'Partenaires' },
      { to: '/individual/prices', label: 'Tarifs' },
      { to: '/hives', label: 'Les ruches' },
      { to: '/about', label: 'Notre histoire' },
      { to: '/ourvalues', label: 'Nos valeurs' },
      { to: '/team', label: 'L\'équipe' },
      { to: '/contact', label: 'Contact' },
      { to: '/jobs', label: 'Jobs' },
      { to: 'https://confidencesdabeilles.fr/', label: 'Boutique', external: true },
      { to: 'https://shop.confidencesdabeilles.fr/blogs/all', label: 'Blog', external: true },
      { to: '/login', label: 'Se connecter' },
      { to: '/presignup', label: 'Créer un compte' },
    ],
    loggedIn: [
      { to: '/about', label: 'Notre histoire' },
      { to: '/ourvalues', label: 'Nos valeurs' },
      { to: '/team', label: 'L\'équipe' },
      { to: '/contact', label: 'Contact' },
      { to: '/jobs', label: 'Jobs' },
      { to: 'https://confidencesdabeilles.fr/', label: 'Boutique', external: true },
      { to: 'https://shop.confidencesdabeilles.fr/blogs/all', label: 'Blog', external: true },
      { to: '/account', label: 'Mon compte' },
      { to: '/logout', label: 'Deconnexion' },
    ],
  },
  desktop: {
    loggedIn: [
      { to: '', label: '' },
    ],
    dropdown: [
      { to: '/about', label: 'Notre histoire' },
      { to: '/ourvalues', label: 'Nos valeurs' },
      { to: '/team', label: 'L\'équipe' },
      { to: '/contact', label: 'Contact' },
      { to: '/jobs', label: 'Jobs' },
      { to: 'https://confidencesdabeilles.fr/', label: 'Boutique', external: true },
      { to: 'https://shop.confidencesdabeilles.fr/blogs/all', label: 'Blog', external: true },
    ],
    visitors: [
      { to: '/company/presentation', label: 'Entreprise' },
      { to: '/individual/presentation', label: 'Particulier' },
      { to: '/partners', label: 'Partenaires' },
      { to: '/individual/prices', label: 'Tarifs' },
      { to: '/hives', label: 'Les ruches' },
    ],
  },
};
