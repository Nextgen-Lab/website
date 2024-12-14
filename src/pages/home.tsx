import Herosection from "../layouts/heroSection";
import OurCustomer from "../layouts/OurCustomer";
import OurServices from "../layouts/OurServices";
import OurWork from "../layouts/OurWork";
import WhoAreWe from "../layouts/WhoAreWe";

const Home = () => {
  return (
    <>
      <Herosection />
      <WhoAreWe />
      <OurServices />
      <OurWork showLimit={4} />
      <OurCustomer />
    </>
  );
};

export default Home;
