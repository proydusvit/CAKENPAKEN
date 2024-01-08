import { appWithTranslation } from 'next-i18next';
import '../styles/global.scss';

function App({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default appWithTranslation(App);
