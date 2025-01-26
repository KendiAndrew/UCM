import "../../scss/components/contact.scss";
import insta from "../../assets/inst.png";
import facebook from "../../assets/facebook.png";
import tiktok from "../../assets/tiktok.png";
import you from "../../assets/youtube.png";

export default function Contact() {
  return (
    <>
      <section className="contact-section">
        <div className="contact-intro">
          <h2 className="contact-title">Зв'яжіться з нами</h2>
          <p className="contact-description">
            Заповніть форму нижче, і ми зв’яжемося з вами якомога швидше.
          </p>
        </div>

        <form
          className="contact-form"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
          <input
            type="hidden"
            name="subject"
            value="New Contact Form Submission from Web3Forms"
          />
          <input type="hidden" name="from_name" value="My Website" />

          <div className="form-group-container">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Ім'я
              </label>
              <input
                id="name"
                name="name"
                className="form-input"
                placeholder="Ваше ім'я"
                type="text"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                name="email"
                className="form-input"
                placeholder="Ваший email"
                type="email"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Телефон
              </label>
              <input
                id="phone"
                name="phone"
                className="form-input"
                placeholder="+1 (234) 56789"
                type="text"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Повідомлення
              </label>
              <textarea
                className="form-textarea"
                id="message"
                name="message"
                placeholder="Ваше звернення"
              ></textarea>
            </div>
          </div>
          <button className="form-submit" type="submit">
            Надіслати повідомлення
          </button>
        </form>
      </section>

      <section className="contact-additional-info">
        <div className="contact-info-header">
          <h3>Звʼязок з нами📞</h3>
        </div>
        <div className="social-media-icons">
          <a href="https://instagram.com" target="_blank">
            <img src={insta} alt="Instagram" />
          </a>
          <a href="https://facebook.com" target="_blank">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="https://tiktok.com" target="_blank">
            <img src={tiktok} alt="TikTok" />
          </a>
          <a href="https://youtube.com" target="_blank">
            <img src={you} alt="YouTube" />
          </a>
        </div>
        <div className="contact-info-details">
          <p>Виникли питання?</p>
          <div className="contact-info-box">
            <p>Телефон ☎️ : +380 73 999 3333</p>
            <p>Пошта: ukrainatsematir@gmail.com</p>
            <p>
              Телеграм:{" "}
              <a href="https://t.me/ukrainetsematir" target="_blank">
                https://t.me/ukrainetsematir
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
