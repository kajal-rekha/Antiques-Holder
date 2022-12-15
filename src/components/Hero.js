const Hero = () => {
  return (
    <section
      className="hero wrapper overlay"
      style={{
        backgroundImage:
          "url(https://cdn.shopify.com/s/files/1/0061/4924/2969/files/antique-furniture-table-banner_1800x800.jpg?v=1613641840)",
      }}
    >
      <h1 className="antique">
        Golden
        <span style={{ color: "#e74c3c" }}>Era</span>
      </h1>
      <h1 className="antique">Antiques</h1>
    </section>
  );
};

export default Hero;
