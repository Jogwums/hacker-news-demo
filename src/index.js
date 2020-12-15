import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import GlobalStyles from './styles/globalstyles';

import { Provider } from 'react-redux'
import configureStore from './store'
// import { actionTypes } from './store/app/actions';

const renderApp = () => {
  const store = configureStore({});
  
  if(process.env.NODE_ENV !== 'production'){
    console.log('initial state ->');
    console.log(store.getState());
  }

    ReactDOM.render(
      <Provider store={store}>
        <div>
          <GlobalStyles />
          <App />
        </div>
      </Provider>,
        document.getElementById('root'),
      
  );
}

renderApp();

