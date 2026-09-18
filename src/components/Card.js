export default function Card({ cardData = {} }) {
  const number = cardData.cardNumber || '•••• •••• •••• ••••';
  const holder = cardData.cardHolder || 'CARDHOLDER';
  const month = cardData.expireMonth || 'MM';
  const year = cardData.expireYear || 'YY';
  const vendor = cardData.vendor || 'IKEA Bank';

  return (
    <article className={`card ${cardData.isActive ? 'card--active' : ''}`}>
      <div className="card__header">
        <span className="card__vendor">{vendor}</span>
        <span className="card__chip" aria-hidden="true" />
      </div>

      <p className="card__number">{number}</p>

      <div className="card__footer">
        <div>
          <small>Card holder</small>
          <strong>{holder}</strong>
        </div>
        <div>
          <small>Expires</small>
          <strong>
            {month}/{year}
          </strong>
        </div>
      </div>
    </article>
  );
}
