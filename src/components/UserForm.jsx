import React, { useState } from 'react';
import './UserForm.css';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    groupCode: '',
    email: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="form-container">
      <form className="user-form" onSubmit={handleSubmit}>
        <h2>Анкета студента</h2>
        
        <div className="input-group">
          <label>Ім'я</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Прізвище</label>
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Код групи</label>
          <input
            type="text"
            name="groupCode"
            value={formData.groupCode}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Електронна пошта</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="save-button">Зберегти дані</button>
      </form>

      {submittedData ? (
        <div className="results-display">
          <h3>Підтверджені дані:</h3>
          <ul className="results-list">
            <li><strong>Ім'я:</strong> {submittedData.name}</li>
            <li><strong>Прізвище:</strong> {submittedData.surname}</li>
            <li><strong>Група:</strong> {submittedData.groupCode}</li>
            <li><strong>Email:</strong> {submittedData.email}</li>
          </ul>
        </div>
      ) : (
        <p className="no-data">Заповніть форму та натисніть "Зберегти"</p>
      )}
    </div>
  );
};

export default UserForm;