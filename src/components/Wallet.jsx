import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setActiveCard } from '../redux/cardSlice';
import Card from './Card';
import Top from './Top';

export default function Wallet() {
  // "wallet" must match the reducer key in redux/store.js.
  const cards = useSelector((state) => state.wallet.cards);
  const dispatch = useDispatch();

  // Finds the one card currently marked with isActive: true.
  const activeCard = cards.find((card) => card.isActive);

  return (
    <main className="wallet-page">
      <Top title="MY CARDS" subtitle="E-WALLET" />

      <section className="active-card-section">
        <h2>ACTIVE CARD</h2>

        {activeCard ? (
          <Card cardData={activeCard} />
        ) : (
          <p>No active card selected.</p>
        )}
      </section>

      <section className="saved-cards">
        <h2>YOUR CARDS</h2>

        {cards.length === 0 ? (
          <p>No cards saved yet.</p>
        ) : (
          <div className="card-list">
            {cards.map((card) => (
              <button
                key={card.id}
                type="button"
                className={`wallet-card ${
                  card.isActive ? 'wallet-card--active' : ''
                }`}
                onClick={() => dispatch(setActiveCard(card.id))}
              >
                <Card cardData={card} />
              </button>
            ))}
          </div>
        )}
      </section>

      <Link to="/addcard" className="primary-button">
        ADD A NEW CARD
      </Link>
    </main>
  );
}