import chipDark from '../assets/chip-dark.svg';
import chipLight from '../assets/chip-light.svg';
import vendorBitcoin from '../assets/vendor-bitcoin.svg';
import vendorBlockchain from '../assets/vendor-blockchain.svg';
import vendorEvil from '../assets/vendor-evil.svg';
import vendorNinja from '../assets/vendor-ninja.svg';

const vendorLogos = {
  'Bitcoin Inc': vendorBitcoin,
  'Blockchain Inc': vendorBlockchain,
  'Evil Corp': vendorEvil,
  'Ninja Bank': vendorNinja,
};

export default function Card({ cardData = {} }) {
  const number = cardData.cardNumber || '•••• •••• •••• ••••';
  const holder = cardData.cardHolder || 'CARDHOLDER';
  const month = cardData.expireMonth || 'MM';
  const year = cardData.expireYear || 'YY';
  const vendor = cardData.vendor || 'Bitcoin Inc';
  

  // Turns "IKEA Bank" into "ikea-bank".
  // That lets CSS give each card vendor its own color.
  const vendorClass = vendor.toLowerCase().replaceAll(' ', '-');

  return (
    <article
      className={`card card--${vendorClass} ${
        cardData.isActive ? 'card--active' : ''
      }`}
    >
     <div className="card__header">
  <img
    className="card__chip"
    src={vendor === 'Evil Corp' ? chipDark : chipLight}
    alt=""
  />

  <img
    className="card__vendor-logo"
    src={vendorLogos[vendor]}
    alt={vendor}
  />
</div>ß

      <p className="card__number">{number}</p>

      <div className="card__footer">
        <div>
          <small className="card__label">CARD HOLDER</small>
          <strong>{holder}</strong>
        </div>

        <div>
          <small className="card__label">EXPIRES</small>
          <strong>
            {month}/{year}
          </strong>
        </div>
      </div>
    </article>
  );
}