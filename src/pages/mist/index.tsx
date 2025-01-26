import "../../scss/components/mist.scss";

import Section7 from "../../components/main/Section7";
import MSection1 from "../../components/mist/MSection1";
import MSection2 from "../../components/mist/MSection2";
import MSection3 from "../../components/mist/MSection3";
import MSection4 from "../../components/mist/MSection4";
import MSection5 from "../../components/mist/MSection5";

export default function Mist() {
  return (
    <>
      <div className="header-section">
        <h1>Міст Опори</h1>
      </div>

      <MSection1 />
      <MSection2 />
      <MSection3 />
      <MSection4 />
      <MSection5 />

      <Section7 />
    </>
  );
}
