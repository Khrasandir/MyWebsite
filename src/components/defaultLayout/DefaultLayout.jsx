import Header from './Header';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import Spinner from '../comps/Spinner';

const DefaultLayout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <header>
            <Header />
          </header>

          <main>{children}</main>

          <footer>
            <Footer />
          </footer>
        </>
      )}
    </>
  );
};

export default DefaultLayout;
