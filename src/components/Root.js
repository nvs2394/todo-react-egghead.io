import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from '../App';

const Root = ({store}) => (
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/:filter" component={App}/>  
    </BrowserRouter>
  </Provider>
)

export default Root