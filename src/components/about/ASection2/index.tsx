import lapin from "../../../assets/lapin.jpg";
import gora from "../../../assets/gora.jpg";

export default function ASection2() {
  return (
    <div className="new-block">
      <div className="row">
        <div className="cell">
          <img src={lapin} alt="Фото Олексій Лапін" />
        </div>
        <div className="cell">
          <div className="text-center">
            <div className="name">Олексій Лапін</div>
            <div className="description">
              Каждое предлагаемое нами изделие так же уникально, как и художник,
              который его создал. Вся наша коллекція изготовлена с
              использованием местных нетоксичных материалов, включая
              переработанную древесину и переработанное стекло. Таким образом,
              мы творим, думая об окружающей среде.
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="cell">
          <div className="text-center">
            <div className="name">Олександр Гора</div>
            <div className="description">
              Мы разрабатываем продукты для реальных людей, живущих в реальных
              домах. Мы считаем, что жилые помещения могут быть одновременно
              функциональными и красивыми. Вот почему каждый из наших продуктов
              служит практической цели, сохраняя при этом очевидную эстетическую
              привлекательность.
            </div>
          </div>
        </div>
        <div className="cell">
          <img src={gora} alt="Фото Олександр Гора" />
        </div>
      </div>
    </div>
  );
}
