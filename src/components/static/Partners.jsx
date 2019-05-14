import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Banner from '../../assets/img/partners.jpg';
import Thomas from '../../assets/img/thomas_apiculture.gif';
import ISA from '../../assets/img/isa_workwear_logo.jpg';
import Appointedd from '../../assets/img/appointedd.png';
import Allianz from '../../assets/img/allianz.png';
import Partner from './partners/Partner';
import Cover from '../Cover';

const Partners = ({ t }) => (
  <Cover img={Banner}>
    <h2 className="text-center my-5">Nos partenaires</h2>
    <Partner
      img={Thomas}
      title={t('thomas.title')}
      content={t('thomas.content')}
      link={t('thomas.url')}
    />
    <Partner
      img={ISA}
      title={t('isa.title')}
      content={t('isa.content')}
      link={t('isa.url')}
    />
    <Partner
      img={Appointedd}
      title={t('appointedd.title')}
      content={t('appointedd.content')}
      link={t('appointedd.url')}
    />
    <Partner
      img={Allianz}
      title={t('allianz.title')}
      content={t('allianz.content')}
      link={t('allianz.url')}
    />
  </Cover>
);

Partners.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('partners')(Partners);
