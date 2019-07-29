import React, { Component } from 'react';
import Loading from './Loading';

export default class FileUpload extends Component {
  /**
 * Form component to upload a file
 * Provide a label props
 * Provide a identifier
 * You can specify a accept attribute
 */

  state = {
    newFile: null,
  };

  // eslint-disable-next-line react/destructuring-assignment
  identifier = (this.props.identifier) ? this.props.identifier : Math.floor(Math.random() * 1000);

  render() {
    const { loading, label } = this.props;
    return (
      <div className="form-group">
        <label>{label}</label>
        {loading
          ? <Loading />
          : (
            <label htmlFor="logo" className={(this.state.newFile) ? 'active-upload' : 'upload'} style={{ position: 'relative' }}>
              <input
                type="file"
                className="form-control"
                id={this.identifier}
                onChange={() => { this.setState({ newFile: document.getElementById(this.identifier).files[0].name }); }}
                style={{
                  position: 'absolute', height: '5.5em', top: '0', left: '0', opacity: '0.0001',
                }}
                accept={(this.props.accept) ? this.props.accept : ''}
              />
          Glissez un fichier ici ou cliquez pour en sélectionner un
              <br />
              {(this.state.newFile) ? `Sélectionné : ${this.state.newFile}` : 'Aucun fichier sélectionné'}
            </label>
          )}
      </div>
    );
  }
}
