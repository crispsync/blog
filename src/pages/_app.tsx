import type { AppProps } from 'next/app';
import Footer from '@/components/Footer';
import Navbar from '../components/NavBar';
import '../styles/App.css'; // Import your global styles
import '../styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
