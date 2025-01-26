import flag from "../../../assets/flag-ucm2.png";

export default function Section8() {
  return (
    <section className="page__section_8">
      <div className="page__content">
        <div className="box">
          <div className="image">
            <img src={flag} alt="flag" />
          </div>
          <div className="content">
            <div className="title-big">Є бажання допомагати?</div>
            <div className="title-small">
              Громадська організація "Україна - ЦЕ МАТІР" - це важлива
              ініціатива, яка об'єднує усіх, хто бажає активно долучитися до
              підтримки та розвитку України. Її складають не лише громадські
              організації (ГО) та благодійні фонди (БФ), але й численні компанії
              та інші учасники цивільного суспільства.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
