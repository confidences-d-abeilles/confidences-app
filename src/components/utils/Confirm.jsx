import React from 'react';
import Button from '@cda/button';

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
            <Button type="button" onClick={action} data-dismiss="modal">Oui, je confirme</Button>
            <Button type="button" data-dismiss="modal">Non</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
