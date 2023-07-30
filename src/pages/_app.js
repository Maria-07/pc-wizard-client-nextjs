import { store } from "@/redux/store";
import "@/styles/globals.css";
import "@/styles/customAntd.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// export default function App({ Component, pageProps }) {
//   const getLayout = Component.getLayout || ((page) => page);
//   return getLayout(<Component {...pageProps} />);
// }

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <Provider store={store}>
        <SessionProvider session={pageProps.session}>
          {getLayout(<Component {...pageProps} />)}
        </SessionProvider>
        <ToastContainer />
      </Provider>
    </>
  );
}
