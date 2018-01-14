import { apiMiddleware } from 'redux-api-middleware';
// import { logger } from './test';
import thunk from 'redux-thunk';

export default [
    thunk,
    apiMiddleware,
];
