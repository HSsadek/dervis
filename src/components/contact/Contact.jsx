import './Contact.css';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form doğrulama
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Lütfen tüm zorunlu alanları doldurun.'
      });
      return;
    }
    
    // Burada gerçek bir form gönderimi yapılabilir (e-posta servisi, API çağrısı vb.)
    // Şimdilik başarılı olduğunu varsayalım
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.'
    });
    
    // Formu sıfırla
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };
  return (
    <div className="contact-container">
      <div className="contact-form-wrapper">
        <h2>İletişim</h2>
        <p>Sorularınızı veya taleplerinizi bize iletebilirsiniz.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
        {formStatus.submitted && (
          <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
            {formStatus.message}
          </div>
        )}
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="Ad Soyad" 
          required 
        />
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          placeholder="E-posta" 
          required 
        />
        <input 
          type="tel" 
          name="phone" 
          value={formData.phone} 
          onChange={handleChange} 
          placeholder="Telefon (isteğe bağlı)" 
        />
        <textarea 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          placeholder="Mesajınız" 
          required
        ></textarea>
        <button type="submit">Gönder</button>
      </form>

      <div className="contact-info">
        <p>
          <strong>Telefon:</strong> 0534 245 56 48
        </p>
        <p>
          <strong>E-posta:</strong> info@dervisoglusoğutma.com
        </p>
        <p>
          <strong>WhatsApp:</strong>{' '}
          <a href="https://wa.me/905342455648" target="_blank" rel="noopener noreferrer">
            Bize Yazın
          </a>
        </p>
      </div>
      </div>
    </div>
  );
};
export default Contact;
