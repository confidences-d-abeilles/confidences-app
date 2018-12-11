import React from 'react';

const EditMemo = props => (
  <form onSubmit={(e) => { e.preventDefault(); props.submit(); }}>
    <div className="form-group">
      <textarea name="content" className="form-control" onChange={props.onChange.bind(this)}>{props.content}</textarea>
    </div>
    <div className="form-group">
      <input type="submit" value="Enregistrer" className="btn btn-secondary btn-sm" />
    </div>
  </form>
);

export default EditMemo;
