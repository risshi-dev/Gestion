import "../styles/globals.css";
import "antd/dist/antd.css";
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
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { CookiesProvider } from "react-cookie";
function MyApp({ Component, pageProps }) {
  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistStore(store)}>
        <CookiesProvider>
          <Component {...pageProps} />
        </CookiesProvider>
      </PersistGate>
    </Provider>
  );
}

export default withRedux(createStore)(withReduxSaga(MyApp));
