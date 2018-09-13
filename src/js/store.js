import 'regenerator-runtime/runtime';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// After we define rootSaga, remove comment out
sagaMiddleware.run(rootSaga);

export default store;
