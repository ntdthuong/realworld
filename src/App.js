import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import {RootContainer} from './containers/RootContainer';
import { rootReducer } from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';

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
