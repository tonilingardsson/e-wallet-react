export default function Top({ title, subtitle = 'E-WALLET' }) {
  return (
    <header className="form-heading">
      <p className="eyebrow">{subtitle}</p>
      <h2>{title}</h2>
    </header>
  );
}
