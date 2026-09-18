export default function Card({ cardData = {} }) {
  const number = cardData.cardNumber || '•••• •••• •••• ••••';
  const holder = cardData.cardHolder || 'CARDHOLDER';
  const month = cardData.expireMonth || 'MM';
  const year = cardData.expireYear || 'YY';
  const vendor = cardData.vendor || 'IKEA Bank';

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
        <span className="card__chip" aria-hidden="true">
          ▰
        </span>

        <span className="card__vendor">{vendor}</span>
      </div>

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