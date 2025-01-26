import "../../scss/components/mist.scss";
import MSection2 from "../../components/mist/MSection2";
import MSection3 from "../../components/mist/MSection3";
import MSection5 from "../../components/mist/MSection5";
import Section7 from "../../components/main/Section7";
import inkly from "../../assets/inkly2.jpg";

export default function Inklus() {
  return (
    <main className="project-main">
      <div className="header-section">
        <h1>Інклюзія від УЦМ</h1>
      </div>
      <div className="banner-section">
        <img src={inkly} alt="Інклюзія від УЦМ Лого" className="banner-logo" />
      </div>
      <MSection2 />
      <MSection3 />
      <section className="text-section">
        <p>
          «Інклюзія від УЦМ» цей проект розроблений спеціально для того, щоб
          батьки стали справжніми експертами у навчанні та розвитку своїх
          особливих дітей.
        </p>
        <p>Що ви отримаєте доеднавшись до платформи?</p>
        <ul>
          <li>
            Відео-тренінги: які навчать вас розуміти емоції та потреби вашої
            дитини.
          </li>
          <li>
            ✅ Психологічні уроки: де ви отримаєте знання та навички для
            подолання стресу та тривоги.
          </li>
          <li>
            ✅ Практичні матеріали: які допоможуть вам розвивати навички
            спілкування, самообслуговування та соціалізації ваших дітей.
          </li>
        </ul>
        <p>Завдяки проекту "Інклюзія від УЦМ" ви зможете:</p>
        <ul>
          <li>✅ Покращити спілкування з вашою дитиною.</li>
          <li>✅ Сприяти розвитку її навичок та здібностей.</li>
          <li>✅ Підвищити свою впевненість та компетентність як батьків.</li>
          <li>✅ Зробити життя вашої сім'ї більш щасливим та повноцінним.</li>
          <li>
            ✅ І як результат цього покращити соціалізацію вашої дитини у
            суспільстві.
          </li>
        </ul>
        <p>
          Зробіть свій внесок і ми разом створимо суспільство у якому всі люди
          матимуть рівні права не залежно від своїх фізичних чи сенсорних
          особливостей!
        </p>
      </section>
      <MSection5 />
      <Section7 />
    </main>
  );
}
