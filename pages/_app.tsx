import { useEffect } from 'react';
import { isAndroid } from 'react-device-detect';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import localFont from '@next/font/local';
import { useRouter } from 'next/router';
import { store } from '../redux/store';

import '../styles/globals.css';
import { detectPwa } from '../utils';

const lora = localFont({
  src: [
    {
      path: '../public/fonts/lora-regular.ttf',
      weight: 'normal',
    },
  ],
  variable: '--font-lora',
});

const roboto = localFont({
  src: [
    {
      path: '../public/fonts/roboto-regular.ttf',
      weight: 'normal',
    },
    {
      path: '../public/fonts/roboto-italic.ttf',
      weight: 'normal',
      style: 'italic',
    },
    {
      path: '../public/fonts/roboto-medium.ttf',
      weight: '500',
    },
    {
      path: '../public/fonts/roboto-bold.ttf',
      weight: 'bold',
    },

  ],
  variable: '--font-roboto',
});

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    // добавляем переменные шрифтов после рендера на body,
    // чтобы они были доступны в компонентах, которые рендерятся через Portal,
    // вне корневого элемента (Notification/Modal)
    document.body.classList.add(roboto.variable, lora.variable);
  }, []);

  useEffect(() => {
    // const isPwa = detectPwa();
    if (router.asPath.includes('back')) {
      const pathWithoutBack = router.asPath.replace('?back', '');
      router.replace(pathWithoutBack);
    }
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="apple-mobile-web-app-title" content="RoW" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta
          name="description"
          content="RoW"
        />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="keywords" content="Keywords" />
        <title>RoW</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/appIcon-60-60.png"
          rel="icon"
          type="image/png"
          sizes="16x16"

        />
        <link
          href="/icons/appIcon-32-32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link
          href="/icons/appIcon-72-72.png"
          rel="icon"
          type="image/png"
          sizes="72x72"
        />
        <link
          href="/icons/appIcon-96-96.png"
          rel="icon"
          type="image/png"
          sizes="96x96"
        />
        <link
          href="/icons/appIcon-128-128.png"
          rel="icon"
          type="image/png"
          sizes="128x128"
        />
        <link
          href="/icons/appIcon-152-152.png"
          rel="icon"
          type="image/png"
          sizes="152x152"
        />
        <link
          href="/icons/appIcon-192-192.png"
          rel="icon"
          type="image/png"
          sizes="192x192"
        />
        <link href="/icons/appIcon-152-152.png" rel="apple-touch-icon" />
        <link href="/icons/appIcon-128-128.png" rel="shortcut icon" type="image/x-icon" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Provider store={store}>
        <div className={`${roboto.variable} ${lora.variable}`}>
          <Component {...pageProps} />
        </div>
      </Provider>
    </>
  );
}
