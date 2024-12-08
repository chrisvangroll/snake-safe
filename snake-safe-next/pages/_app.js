import { Provider } from "react-redux";
import store from "../src/app/store";
import "../src/styles/styles1.css";
import "../src/styles/styles2.css";
import "../src/styles/styles3.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
