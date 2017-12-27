import React, { Component } from 'react';

export default class Confirm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            confirm : false
        }
    }

    render() {
        return (
            <div>
                <button className={(this.props.class)?this.props.class:'btn btn-primary'} data-toggle="modal" data-target="#confModal">{this.props.text}</button>
                <div className="modal fade" id="confModal">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">{this.props.text} ?</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <p>Etes vous certain d'effectuer ceci ?</p>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={this.props.action} data-dismiss="modal">Oui, je confirme</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Non</button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        )
    }
}
