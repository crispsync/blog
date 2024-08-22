import type { AppProps } from 'next/app';
import Footer from '@/components/Footer';
import Navbar from '../components/NavBar';
import '../styles/App.css'; // Import your global styles
import '../styles/index.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
          {/* Google Translate Widget */}
          <div id="google_translate_element"></div>
      <Script
        strategy="afterInteractive"
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      ></Script>

      <Script id="google-translate-init" strategy="afterInteractive">
        {`
          function getUserLanguage() {
            const userLang = navigator.language || navigator.userLanguage;
            return userLang.split('-')[0];
          }

          function triggerGoogleTranslate(lang) {
            const select = document.querySelector("select.goog-te-combo");
            if (select) {
              select.value = lang;
              select.dispatchEvent(new Event('change'));
            }
          }

          function googleTranslateElementInit() {
            new google.translate.TranslateElement({
              pageLanguage: 'en',
              includedLanguages: 'en,fr,es,de,zh-CN,zh-TW,ar', // Added Arabic (ar)
              autoDisplay: false,
            }, 'google_translate_element');

            const userLang = getUserLanguage();
            let lang = userLang;

            if (userLang === 'zh') {
              lang = navigator.language.includes('TW') ? 'zh-TW' : 'zh-CN';
            } else if (userLang === 'ar') {
              lang = 'ar'; // Handle Arabic
            }

            if (lang !== 'en') {
              setTimeout(() => triggerGoogleTranslate(lang), 500);
            }
          }
        `}
      </Script>

      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
