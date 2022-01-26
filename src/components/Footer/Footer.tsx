import './Footer.scss';
import toncoinIcon from '../../assets/tonconin.svg';

function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer-logo">
        <span className="Footer-logo__basedon">Based on</span>
        <img src={toncoinIcon} alt="Toncoin"/>
        <span className="Footer-logo__name">TON</span>
      </div>

      <div className="Footer-links">
        <a
          target="_blank"
          href="https://github.com"
          className="Footer-link"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          target="_blank"
          href="https://github.com"
          className="Footer-link"
          rel="noreferrer"
        >
          Terms
        </a>
        <a
          target="_blank"
          href="https://github.com"
          className="Footer-link"
          rel="noreferrer"
        >
          Privacy
        </a>
      </div>
    </footer>
  );
}

export default Footer;
