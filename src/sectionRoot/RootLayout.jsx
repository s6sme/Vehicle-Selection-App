import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Featured from "../components/featured/Featured";
import Modern from "../components/modern/Modern";
import Fleet from "../components/fleet/Fleet";
import Footer from "../components/footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Main />
      <Featured />
      <Modern />
      <Fleet />
      <Footer />
    </div>
  );
};

export default RootLayout;
