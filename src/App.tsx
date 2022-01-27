import React, { useEffect } from 'react';
import './App.css';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import { usePopModal } from './store/features/modals/modalsSlice';

interface AppProps {
  children?: React.ReactNode;
}

function App({ children }: AppProps) {
  const popModal = usePopModal();

  useEffect(() => {
    function onKeyUp(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        popModal();
      }
    }

    window.addEventListener('keyup', onKeyUp);

    return () => {
      window.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  return (
    <div className="App">
      <Header/>

      {children}

      <Footer/>
    </div>
  );
}

export default App;
