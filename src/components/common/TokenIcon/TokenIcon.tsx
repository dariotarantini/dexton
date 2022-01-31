import './TokenIcon.scss';

function TokenIcon({
  url,
  alt,
}: { url: string; alt?: string; }) {
  return (
    <div className="token-icon">
      <img src={url} alt={alt}/>
    </div>
  );
}

export default TokenIcon;
