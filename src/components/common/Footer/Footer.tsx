import './Footer.scss';
import toncoinIcon from '../../../assets/tonconin.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <span className="footer__logo__basedon">Based on</span>
        <img src={toncoinIcon} alt="Toncoin"/>
        <span className="footer__logo__name">TON</span>
      </div>

      <div className="footer__links">
        <a
          target="_blank"
          href="https://github.com"
          className="footer__link"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          target="_blank"
          href="https://github.com"
          className="footer__link"
          rel="noreferrer"
        >
          Terms
        </a>
        <a
          target="_blank"
          href="https://github.com"
          className="footer__link"
          rel="noreferrer"
        >
          Privacy
        </a>
      </div>
    </footer>
  );
}

export default Footer;
