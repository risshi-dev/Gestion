import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./index";
import rootSaga from "./rootSaga";

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};
const persistConfig = { key: "gestion", storage };
const persistRed = persistReducer(persistConfig, rootReducer);
function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(persistRed, bindMiddleware([sagaMiddleware]));

  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
}

export default configureStore;
