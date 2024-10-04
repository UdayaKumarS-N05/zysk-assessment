import Banner from "./Banner";
import Blogposts from "./Blogposts";
import CompaniesMarquee from "./CompaniesMarquee";
import Dashboard from "./Dashboard";
import Faqs from "./Faqs";
import Features from "./Features";
import Features2 from "./Features2";
import Navbar from "./Navbar";
import Testimonial from "./Testimonial";
function App() {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <Dashboard />
      <CompaniesMarquee />
      <Features />
      <Testimonial />
      <Features2 />
      <Faqs />
      <Blogposts />
    </div>
  );
}

export default App;
