import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index_reducer';
import { getAllUsers } from './actions/users_actions';

// Dev tools
import { composeWithDevTools } from 'redux-devtools-extension';
import { getPosts } from './actions/post_actions';
import { getAllComments } from './actions/comment_actions';


const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk))
)

store.dispatch(getAllUsers());
store.dispatch(getPosts());
store.dispatch(getAllComments())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);