import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

  render() {
    const {
      loading,
      label,
      accept,
      identifier,
    } = this.props;
    const { newFile } = this.state;
    return (
      <div className="form-group">
        <span>{label}</span>
        {(loading)
          ? <Loading />
          : (
            <label htmlFor="logo" className={(newFile) ? 'active-upload' : 'upload'} style={{ position: 'relative' }}>
              <input
                type="file"
                className="form-control"
                id={this.identifier}
                onChange={() => {
                  this.setState({
                    newFile: document.getElementById(identifier).files[0].name,
                  });
                }}
                style={{
                  position: 'absolute', height: '5.5em', top: '0', left: '0', opacity: '0.0001',
                }}
                accept={accept || ''}
              />
          Glissez un fichier ici ou cliquez pour en séléctionner un
              <br />
              {(newFile) ? `Selectionné : ${newFile}` : 'Aucun fichier séléctionné'}
            </label>
          )}
      </div>
    );
  }
}

FileUpload.propTypes = {
  identifier: PropTypes.string,
  loading: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  accept: PropTypes.string.isRequired,
};

FileUpload.defaultProps = {
  identifier: Math.floor(Math.random() * 1000),
};
