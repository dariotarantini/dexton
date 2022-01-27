import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Route, Routes, useLocation,
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { enableMapSet } from 'immer';
import reportWebVitals from './reportWebVitals';
import { store } from './store';
import MainPage from './pages/MainPage';
import LiquidityPage from './pages/LiquidityPage';
import App from './App';
import ChartsPage from './pages/ChartsPage';

import { animationDuration, setStyleProps } from './styleProps';
import { useActiveModals, useCloseModal } from './store/features/modals/modalsSlice';
import AddLiquidityPage from './pages/AddLiquidityPage';

setStyleProps();
enableMapSet();

function Main({ children }: any) {
  return (
    <div className="main">
      {children}
    </div>
  );
}

function AnimatedSwitch() {
  const location = useLocation();
  const activeModals = useActiveModals();

  const closeModal = useCloseModal();

  return (
    <>
      <TransitionGroup component={Main}>
        <CSSTransition
          key={location.key}
          classNames="router"
          timeout={animationDuration}
        >
          <Routes location={location}>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/liquidity" element={<LiquidityPage/>}/>
            <Route path="/liquidity/add" element={<AddLiquidityPage/>}/>
            <Route path="/charts" element={<ChartsPage/>}/>
          </Routes>
        </CSSTransition>
      </TransitionGroup>

      <TransitionGroup>
        {
          Array.from(activeModals.entries())
            .map(([id, ModalComponent]) => (
              <CSSTransition key={id} timeout={animationDuration} classNames="modal">
                {
                  // @ts-ignore
                  <ModalComponent
                    closeModal={() => closeModal(id)}
                  />
                }
              </CSSTransition>
            ))
        }
      </TransitionGroup>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App>
          <AnimatedSwitch/>
        </App>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
