import useMediaQuery from "../lib/use-media-query";
import Background from "../components/Background";
import Blogs from "../components/Blogs";
import Capabilities from "../components/Capabilities";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";
import Product from "../components/Products";
import Solution from "../components/Solution";
import StickyButtonModal from "../components/StickyButtonModal";
import DesktopChat from "../components/DesktopChat";

const Main = () => {
  const isPhone = useMediaQuery("(max-width: 600px)");
  return (
    <>
      <Background />
      <Introduction />
      <Capabilities />
      <Product />
      <Solution />
      <Blogs />
      <FAQs />
      {isPhone ? (
        <StickyButtonModal iframeSrc={"https://neodonyademo.web.app"} />
      ) : (
        <DesktopChat iframeSrc={"https://neodonyademo.web.app"} />
      )}
      <Footer />
    </>
  );
};

export default Main;
