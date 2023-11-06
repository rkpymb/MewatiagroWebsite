
import { useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { initGA, logPageView } from 'analytics';
import 'assets/css/react-slick.css';
import 'rc-drawer/assets/index.css';
import TawkTo from 'tawkto-react'


import '../../Style/globals.css'
import CheckloginStates from '../../context/auth/CheckloginContext'
function MyApp({ Component, pageProps }) {
  Router.events.on('routeChangeStart', nProgress.start);
  Router.events.on('routeChangeError', nProgress.done);
  Router.events.on('routeChangeComplete', nProgress.done);
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);

    var tawk = new TawkTo('654132c0a84dd54dc4873738', '1he3asg9l')

    tawk.onStatusChange((status) => 
    {
        console.log(status)
    })
  }, []);





  return (
    <CheckloginStates.Provider >

      <Component {...pageProps} />
    </CheckloginStates.Provider >
  );
}

export default MyApp;
