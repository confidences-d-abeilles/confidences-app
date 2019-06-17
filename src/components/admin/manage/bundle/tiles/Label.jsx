import React, { Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import request from '../../../../../services/Net';
import Loading from '../../../../utils/Loading';
import { handleChange } from '../../../../../services/FormService';
import '../../../../utils/css/LabelPdf.css';
import { withNotification } from '../../../../../services/withNotification';
import { Button } from '../../../../utils/Button';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Label extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: props.model,
      mention: props.mention,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.mention !== prevProps.mention) {
      this.setState({
        mention: this.props.mention,
      });
    }
    if (this.props.model !== prevProps.model) {
      this.setState({
        model: this.props.model,
      });
    }
  }

  updateLabel = async () => {
    const { notification } = this.props;
    await request({
      method: 'put',
      url: `/user/${this.props.userId}/label`,
      data: {
        model: this.state.model,
        mention: this.state.mention,
      },
    }, notification);
  }

  render() {
    const { labelFilename, downloadLabel, loading } = this.props;
    return (
      <div className="card mb-4 bg-light">
        <h4 className="card-header">Etiquette</h4>
        <div className="card-body p-2">
          {labelFilename
            ? (
              <p className="card-text text-center">
                <Button onClick={downloadLabel}>Télécharger</Button>
                <a href={`${process.env.REACT_APP_CONTENT_DOMAIN}/label/${labelFilename}`} target="_blank" rel="noopener noreferrer">
                  <Document file={`${process.env.REACT_APP_CONTENT_DOMAIN}/label/${labelFilename}`}>
                    <Page pageNumber={1} width={500} className="label" />
                  </Document>
                </a>
              </p>
            )
            : (
              <p className="card-text text-center">
                {loading
                  ? <Loading />
                  : <p>Label non trouvé</p>}
              </p>
            )
          }
          <hr />
          <label>
Mention :
            <input type="text" name="mention" value={this.state.mention} onChange={handleChange.bind(this)} />
          </label>
          <label>
Model :
            <input type="text" name="model" value={this.state.model} onChange={handleChange.bind(this)} />
          </label>
          <Button onClick={this.updateLabel}>Mettre à jour l'étiquette</Button>
        </div>
      </div>

    );
  }
}

export default withNotification(Label);
