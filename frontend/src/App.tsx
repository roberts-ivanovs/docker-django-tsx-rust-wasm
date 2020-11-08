import React, { ReactElement } from 'react';

// import { useUser } from 'global/UserContext';
import { Header } from 'core/header/Header';
import { Main } from 'core/root/Main';
import { Footer } from 'core/footer/Footer';

function App(): ReactElement {
  return (
    <>
      <header>
        <Header />
      </header>
      <main role="main">
        <Main />
        <Footer />
      </main>
    </>
  );
}

export { App };
