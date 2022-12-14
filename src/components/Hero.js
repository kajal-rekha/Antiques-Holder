import { useRef } from "react";

const Hero = () => {
  return (
    <section
      className="hero wrapper"
      style={{
        backgroundImage:
          "url(https://www.onderdepoort.be/responsive-images/brocante-back/bg-wide-jpg/back-brocante-wide_foqmmu_c_scale%2Cw_1741.jpg)",
      }}
    >
      <h1 className="antique">Golden Era</h1>
      <h1 className="collectibles">Antigues</h1>
    </section>
  );
};

export default Hero;
