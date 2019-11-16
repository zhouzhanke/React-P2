import withRoot from "./modules/withRoot";
// --- Post bootstrap -----
import React from "react";
import AppAppBar from "./modules/views/AppAppBar";
import Links from "./modules/views/Link.js";
import ProductHero from "./modules/views/ProductHero";
import AppFooter from "./modules/views/AppFooter";
// import "./styles.css";

function Index() {
  return (
    <React.Fragment>
      {/* <div className="App">
        <h1>测试</h1>
      </div> */}
      <AppAppBar />
      <Links />
      <ProductHero />
      <ProductHero />
      <ProductHero />
      {/* <ProductValues /> */}
      {/* <ProductCategories /> */}
      {/* <ProductHowItWorks /> */}
      {/* <ProductCTA /> */}
      {/* <ProductSmokingHero /> */}
      <AppFooter />
    </React.Fragment>
  );
}
// export default test;
export default withRoot(Index);
