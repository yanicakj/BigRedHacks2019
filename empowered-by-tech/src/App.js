import React from 'react'
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));

// export default GoogleApiComponent({
//   apiKey: __GAPI_KEY__
// })(Container)