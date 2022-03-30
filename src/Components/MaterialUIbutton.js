import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import App from '../App';

function MaterialUIbutton() {
  return (
    <div>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
}

ReactDOM.render(<MaterialUIbutton />, document.querySelector('#app'));

export default MaterialUIbutton