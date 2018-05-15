
import React, { Component } from 'react';
import ReactGA from 'react-ga';
import pdfIcon from '../../../assets/img/pdf.png';
import leaflet_e from '../../../assets/leaflet_e.pdf';
import brochure from '../../../assets/brochure.pdf';

export default class ContributorManageSupport extends Component {
  constructor(props) {
    super(props);
    ReactGA.pageview(this.props.location.pathname);
  }

  render () {
    return (
      <div className="text-center">
        <h5 className="modal-title">Supports de communication</h5><br />
        <div className="row">
          <div className="col-6">
            <div className="row justify-content-center align-items-center">
              <div className="col-2"><a href={leaflet_e} target="_blank"><img src={pdfIcon} alt="Telecharger le PDF" className="img-fluid" /></a></div>
              <div className="col-6">Infographie - Le Parrainage de ruches par Confidences d'Abeilles</div>
            </div>
          </div>
          <div className="col-6">
            <div className="row justify-content-center align-items-center my-4">
              <div className="col-2"><a href={brochure} target="_blank"><img src={pdfIcon} alt="Telecharger le PDF" className="img-fluid" /></a></div>
              <div className="col-6">Brochure détaillée du service proposé par Confidences d'Abeilles</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
