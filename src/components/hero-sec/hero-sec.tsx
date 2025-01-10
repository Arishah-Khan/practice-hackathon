
import Category from "./category";
import Slider from "./slides";



export default function HeroSection() {
    return (
      <section className="flex pb-10">
        {/* Left Sidebar for Categories */}
        <Category className="hidden md:block" />
  
        {/* Hero Content */}
    <Slider/>
      </section>
    );
  }
  