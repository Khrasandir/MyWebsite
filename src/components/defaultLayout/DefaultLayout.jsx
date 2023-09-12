import Header from './Header';
import Footer from './Footer';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default DefaultLayout;
