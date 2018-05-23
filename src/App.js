import React, { Component } from 'react';
// import logo from './logo.svg';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { BrowserRouter } from 'react-router-dom';
// import './App.css';
import {RootContainer} from './containers/RootContainer';
import { rootReducer } from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';

// import routes from './routes';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
store.subscribe(()=>{
    console.log('store', store.getState())
  }
)
export class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <RootContainer />
        </Provider>
      </div>
    );
  }
}

sagaMiddleware.run(rootSaga);
