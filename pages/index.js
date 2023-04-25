import Background from "../components/Background";
import Blogs from "../components/Blogs";
import Capabilities from "../components/Capabilities";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";
import Product from "../components/Products";
import Solution from "../components/Solution";
import StickyButtonModal from "../components/StickyButtonModal";

const Main = () => {
  return (
    <>
      <Background />
      <Introduction />
      <Capabilities />
      <Product />
      <Solution />
      <Blogs />
      <FAQs />
      <StickyButtonModal iframeSrc={"https://neodonyademo.web.app"} />
      <Footer />
    </>
  );
};

export default Main;
