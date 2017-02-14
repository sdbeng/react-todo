import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
// import {BrowserRouter, Route} from 'react-router-dom'
// import Resume from './components/Resume'
// import Projects from './components/Projects'
// import NotFound404 from './components/NotFound404'

// const Root = () => {
//   return (
//     <BrowserRouter>
//       <div>
//         <Route exact path="/" component={App} />
//         <Route path="/resume" component={Resume} />
//         <Route path="/projects" component={Projects} />
//
//         <Route component={NotFound404} />
//       </div>
//
//     </BrowserRouter>
//   )
// }

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
