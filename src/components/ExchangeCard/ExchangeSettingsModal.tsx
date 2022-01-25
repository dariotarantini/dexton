import { useState } from 'react';
import Modal from '../Modal/Modal';
import { CloseModal } from '../../features/modals/modalsSlice';
import Button from '../Button/Button';

function InfoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.503 11.303C8.4729 11.3363 8.44485 11.3713 8.419 11.408C8.39251 11.447 8.37132 11.4894 8.356 11.534C8.33582 11.5737 8.32166 11.6161 8.314 11.66C8.31057 11.7066 8.31057 11.7534 8.314 11.8C8.31164 11.8918 8.33082 11.9829 8.37 12.066C8.40144 12.1529 8.4516 12.2318 8.51692 12.2971C8.58224 12.3624 8.66114 12.4126 8.748 12.444C8.83179 12.481 8.92239 12.5002 9.014 12.5002C9.10561 12.5002 9.19621 12.481 9.28 12.444C9.36687 12.4126 9.44576 12.3624 9.51108 12.2971C9.57641 12.2318 9.62656 12.1529 9.658 12.066C9.68909 11.9809 9.70335 11.8905 9.7 11.8C9.70053 11.7079 9.68288 11.6165 9.64804 11.5313C9.61321 11.446 9.56188 11.3684 9.497 11.303C9.43193 11.2374 9.35451 11.1853 9.26921 11.1498C9.1839 11.1142 9.09241 11.0959 9 11.0959C8.90759 11.0959 8.8161 11.1142 8.7308 11.1498C8.6455 11.1853 8.56808 11.2374 8.503 11.303ZM9 2C7.61553 2 6.26215 2.41054 5.11101 3.17971C3.95987 3.94888 3.06266 5.04213 2.53285 6.32121C2.00303 7.6003 1.86441 9.00776 2.13451 10.3656C2.4046 11.7235 3.07129 12.9708 4.05026 13.9497C5.02922 14.9287 6.2765 15.5954 7.63437 15.8655C8.99224 16.1356 10.3997 15.997 11.6788 15.4672C12.9579 14.9373 14.0511 14.0401 14.8203 12.889C15.5895 11.7378 16 10.3845 16 9C16 8.08075 15.8189 7.17049 15.4672 6.32121C15.1154 5.47194 14.5998 4.70026 13.9497 4.05025C13.2997 3.40024 12.5281 2.88463 11.6788 2.53284C10.8295 2.18106 9.91925 2 9 2ZM9 14.6C7.89243 14.6 6.80972 14.2716 5.88881 13.6562C4.96789 13.0409 4.25013 12.1663 3.82628 11.143C3.40243 10.1198 3.29153 8.99379 3.50761 7.90749C3.72368 6.8212 4.25703 5.82337 5.0402 5.0402C5.82338 4.25703 6.8212 3.72368 7.9075 3.5076C8.99379 3.29153 10.1198 3.40242 11.143 3.82627C12.1663 4.25012 13.0409 4.96789 13.6562 5.88881C14.2716 6.80972 14.6 7.89242 14.6 9C14.6 10.4852 14.01 11.9096 12.9598 12.9598C11.9096 14.01 10.4852 14.6 9 14.6ZM9 5.5C8.63115 5.49976 8.26874 5.59668 7.94924 5.78101C7.62974 5.96533 7.36443 6.23056 7.18 6.55C7.12935 6.62967 7.09535 6.71877 7.08002 6.81192C7.0647 6.90508 7.06838 7.00037 7.09084 7.09207C7.1133 7.18377 7.15408 7.26997 7.21072 7.3455C7.26736 7.42103 7.3387 7.48432 7.42043 7.53157C7.50217 7.57882 7.59262 7.60904 7.68634 7.62042C7.78005 7.63181 7.87511 7.62412 7.96578 7.59781C8.05645 7.57151 8.14086 7.52713 8.21394 7.46736C8.28701 7.40759 8.34724 7.33365 8.391 7.25C8.45268 7.14318 8.54148 7.05455 8.64842 6.99308C8.75537 6.93162 8.87666 6.89951 9 6.9C9.18565 6.9 9.3637 6.97375 9.49498 7.10502C9.62625 7.2363 9.7 7.41435 9.7 7.6C9.7 7.78565 9.62625 7.9637 9.49498 8.09497C9.3637 8.22625 9.18565 8.3 9 8.3C8.81435 8.3 8.6363 8.37375 8.50503 8.50502C8.37375 8.6363 8.3 8.81435 8.3 9V9.7C8.3 9.88565 8.37375 10.0637 8.50503 10.195C8.6363 10.3262 8.81435 10.4 9 10.4C9.18565 10.4 9.3637 10.3262 9.49498 10.195C9.62625 10.0637 9.7 9.88565 9.7 9.7V9.574C10.163 9.40601 10.5522 9.08066 10.7995 8.65481C11.0469 8.22896 11.1368 7.7297 11.0534 7.24432C10.97 6.75894 10.7186 6.31831 10.3433 5.99946C9.96795 5.68061 9.49248 5.50382 9 5.5Z"
        fill="#303757"
        fillOpacity="0.6"
      />
    </svg>
  );
}

interface ExchangeSettingsModalProps {
  closeModal: CloseModal;
}

function ExchangeSettingsModal({ closeModal }: ExchangeSettingsModalProps) {
  const [tgwei, setTgwei] = useState('standard');
  const [slippageTolerance, setSlippageTolerance] = useState('');
  const [autoSlippageTolerance, setAutoSlippageTolerance] = useState(true);
  const [deadline, setDeadline] = useState('30');

  return (
    <Modal title="Settings" bodyClassName="ExchangeSettingsModal-body" closeModal={closeModal}>
      <section className="ExchangeSettingsModal-section">
        <div className="ExchangeSettingsModal-section__title">
          TON Speed Transaction (TGWEI)
          {' '}
          <InfoIcon/>
        </div>

        <div className="ExchangeSettingsModal-section__content">
          <div className="ExchangeSettingsModal-buttons">
            <Button
              onClick={() => setTgwei('standard')}
              inactive={tgwei === 'standard'}
              outline={tgwei !== 'standard'}
            >
              Standard (5)
            </Button>
            <Button
              onClick={() => setTgwei('fast')}
              inactive={tgwei === 'fast'}
              outline={tgwei !== 'fast'}
            >
              Fast (6)
            </Button>
            <Button
              onClick={() => setTgwei('instant')}
              inactive={tgwei === 'instant'}
              outline={tgwei !== 'instant'}
            >
              Instant (7)
            </Button>
          </div>
        </div>
      </section>
      <section className="ExchangeSettingsModal-section">
        <div className="ExchangeSettingsModal-section__title">
          Slippage Tolerance
          {' '}
          <InfoIcon/>
        </div>

        <div
          className="ExchangeSettingsModal-section__content ExchangeSettingsModal-section--content__slippage"
        >
          <Button
            outline={!autoSlippageTolerance}
            onClick={() => setAutoSlippageTolerance(!autoSlippageTolerance)}
          >
            Auto
          </Button>
          <input
            value={slippageTolerance}
            disabled={autoSlippageTolerance}
            onInput={(event) => setSlippageTolerance(event.currentTarget.value)}
            placeholder="%"
            className="ExchangeSettingsModal-input"
          />
        </div>
      </section>
      <section className="ExchangeSettingsModal-section ExchangeSettingsModal-section--inline">
        <div className="ExchangeSettingsModal-section__title">
          Transaction deadline (mins)
          {' '}
          <InfoIcon/>
        </div>

        <div
          className="ExchangeSettingsModal-section__content"
        >
          <input
            value={deadline}
            onInput={(event) => setDeadline(event.currentTarget.value)}
            placeholder="mins"
            className="ExchangeSettingsModal-input"
          />
        </div>
      </section>
      <section className="ExchangeSettingsModal-section ExchangeSettingsModal-section--inline">
        <div className="ExchangeSettingsModal-section__title">
          Expert mode
          {' '}
          <InfoIcon/>
        </div>

        <div
          className="ExchangeSettingsModal-section__content"
        >
          <input
            type="checkbox"
            className="ExchangeSettingsModal-checkbox"
          />
        </div>
      </section>
      <section className="ExchangeSettingsModal-section ExchangeSettingsModal-section--inline">
        <div className="ExchangeSettingsModal-section__title">
          Play sound
          {' '}
          <InfoIcon/>
        </div>

        <div
          className="ExchangeSettingsModal-section__content"
        >
          <input
            type="checkbox"
            className="ExchangeSettingsModal-checkbox"
          />
        </div>
      </section>
    </Modal>
  );
}

export default ExchangeSettingsModal;
