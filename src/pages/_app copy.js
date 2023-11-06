import { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from 'analytics';
import 'assets/css/react-slick.css';
import 'rc-drawer/assets/index.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import '../../Style/globals.css'
import CheckloginStates from '../../context/auth/CheckloginContext'
export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);

  return<Component {...pageProps} />
;
}
