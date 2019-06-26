import React from 'react';
import { Button } from '@cda/button';

export default ({ text, action }) => (
  <div>
    <Button
      data-toggle="modal"
      data-target="#confModal"
      type="button"
      primary
    >
      {text}
    </Button>
    <div className="modal fade" id="confModal">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {`${text} ?`}
            </h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Etes vous certain d&apos;effectuer ceci ?</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={action} data-dismiss="modal">Oui, je confirme</button>
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Non</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
