import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setActiveCard } from '../redux/cardSlice';
import Card from './Card';
import Top from './Top';

export default function Wallet() {
  const cards = useSelector((state) => state.wallet.cards);
  const dispatch = useDispatch();

  return (
    <main className="wallet-page">
      <section className="saved-cards">
        <Top title="SAVED CARDS" subtitle="E-WALLET" />

        {cards.length === 0 ? (
          <p>No cards saved yet.</p>
        ) : (
          cards.map((card) => (
            <button
              key={card.id}
              type="button"
              className={`wallet-card ${card.isActive ? 'wallet-card--active' : ''}`}
              onClick={() => dispatch(setActiveCard(card.id))}
            >
              <Card cardData={card} />
            </button>
          ))
        )}

        <Link to="/addcard" className="add-btn">
          Add a new card
        </Link>
      </section>
    </main>
  );
}
