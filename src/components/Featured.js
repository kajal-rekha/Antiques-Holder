import { useRef } from "react";
import {
  useGsapFeatureLeftShutterUnveil,
  useGsapFeatureRightShutterUnveil,
} from "../hooks/gsap";

const Featured = () => {
  const featureRef = useRef(null);
  const featureLeftShutterRef = useRef(null);
  const featureRightShutterRef = useRef(null);

  useGsapFeatureLeftShutterUnveil(featureLeftShutterRef, featureRef);
  useGsapFeatureRightShutterUnveil(featureRightShutterRef, featureRef);

  return (
    <section className="featured wrapper" ref={featureRef}>
      <h2 className="section-title">Featured</h2>
      <div className="features">
        <div className="feature-l">
          <span className="feature-text" style={{ color: "#d53f41" }}>
            THE FIRST ELECTRICT CAR
          </span>
          <img
            src="https://www.historyhit.com/app/uploads/2022/04/Electric-car-1910s-750px.jpg"
            alt="THE FIRST ELECTRICT CAR"
          />
          <span
            className="feature-shutter-l"
            ref={featureLeftShutterRef}
          ></span>
        </div>
        <div className="feature-r">
          <span className="feature-text" style={{ color: "#d53f41" }}>
            SET AND BEAUTIFUL ANTIQUE ITEMS
          </span>
          <img
            src="https://cdn.shopify.com/s/files/1/0012/2359/0006/files/Antiques_Dealers_Indian_Antiques_Dealers_Online_Indian_Antiques_Online_Antique_Dealers_Online_online_flea_market_india_-800x600_2048x2048.jpg?v=1547401852"
            alt="ANTIQUE CAST IRON"
          />
          <span
            className="feature-shutter-r"
            ref={featureRightShutterRef}
          ></span>
        </div>
      </div>
    </section>
  );
};

export default Featured;
