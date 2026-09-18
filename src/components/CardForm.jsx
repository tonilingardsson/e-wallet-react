export default function CardForm({ formData, onChange, onSubmit }) {
  return (
    <form className="card-form" onSubmit={onSubmit}>
      <label>
        Card number
        <input
          type="text"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={onChange}
          placeholder="1234 5678 9012 3456"
          required
        />
      </label>

      <label>
        Card holder
        <input
          type="text"
          name="cardHolder"
          value={formData.cardHolder}
          onChange={onChange}
          placeholder="Jane Doe"
          required
        />
      </label>

      <div className="card-form__row">
        <label>
          Expire month
          <input
            type="number"
            name="expireMonth"
            min="1"
            max="12"
            value={formData.expireMonth}
            onChange={onChange}
            required
          />
        </label>

        <label>
          Expire year
          <input
            type="number"
            name="expireYear"
            min="24"
            max="99"
            value={formData.expireYear}
            onChange={onChange}
            required
          />
        </label>
      </div>

      <label>
        CVV
        <input
          type="password"
          name="cvv"
          value={formData.cvv}
          onChange={onChange}
          placeholder="123"
          required
        />
      </label>

      <label>
        Vendor
        <select name="vendor" value={formData.vendor} onChange={onChange}>
          <option value="IKEA Bank">IKEA Bank</option>
          <option value="Nordea">Nordea</option>
          <option value="Swedbank">Swedbank</option>
        </select>
      </label>

      <button className="primary-button" type="submit">Add card</button>
    </form>
  );
}
