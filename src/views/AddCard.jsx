import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCard } from '../redux/cardSlice';
import Card from '../components/Card';
import CardForm from '../components/CardForm';
import Top from '../components/Top';

export default function AddCard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    cardNumber: '',
    cardHolder: '',
    expireMonth: '',
    expireYear: '',
    cvv: '',
    vendor: 'Bitcoin Inc',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newCard = {
      ...formData,
      id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : Date.now(),
    };

    dispatch(addCard(newCard));
    navigate('/');
  };

  return (
<main className="add-card-page">      <Top title="ADD A NEW CARD" subtitle="NEW CARD" />
      <Card cardData={formData} />
      <CardForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </main>
  );
}