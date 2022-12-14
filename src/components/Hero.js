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
      <h1 className="antique">
        Golden
        <span style={{ color: "#e74c3c" }}>Era</span>{" "}
      </h1>
    </section>
  );
};

export default Hero;
