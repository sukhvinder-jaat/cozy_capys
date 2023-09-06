import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Impact } from "./components/Impact";
import { RoadMap } from "./components/RoadMap";
import MyFooter from "./components/MyFooter";
import { Faqs } from "./components/Faqs";
import { BackTop } from "./components/BackTop";
import { Preloader } from "./components/Preloader";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  setTimeout(() => {
    AOS.init({
      disable: "mobile",
      once: true,
      duration: 1500,
    });
  }, 4000);
  return (
    <div className=" overflow-hidden">
      <Hero />
      <About />
      <Impact />
      <RoadMap />
      <Faqs />
      <MyFooter />
      <BackTop />
      <Preloader />
    </div>
  );
}

export default App;
