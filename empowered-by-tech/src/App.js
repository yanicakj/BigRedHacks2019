import React from 'react'
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App'

render((
  App
), document.getElementById('root'));

export default App;

// export default GoogleApiComponent({
//   apiKey: __GAPI_KEY__
// })(Container)