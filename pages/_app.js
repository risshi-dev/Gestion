import "../styles/globals.css";

import {
  Provider,
  connect,
  MapStateToProps,
  MapDispatchToProps,
} from "react-redux";
import createStore from "../stateManagement/configureStore";

import withRedux, { createWrapper } from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import rootReducer from "../stateManagement";

function MyApp({ Component, pageProps }) {
  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default withRedux(createStore)(withReduxSaga(MyApp));
