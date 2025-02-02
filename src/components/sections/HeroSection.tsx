import { Link } from "react-scroll";
import HeroImg from "../../images/manhattan-3866140_1280.jpg"

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              We build <span className="text-cyan-500">web and mobile</span> solutions for your business
            </h1>
            <p className="text-gray-600 mb-8">
              Our team specializes in crafting high-performance websites and mobile apps that drive growth and innovation. Let’s build the future of your business together.
            </p>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="inline-block bg-cyan-500 text-white px-8 py-3 rounded-full hover:bg-sky-500/75 transition-colors cursor-pointer"
            >
              Get in Touch
            </Link>
          </div>
          <div className="animate-fadeIn">
            <img
              src={HeroImg }
              alt="Hero Illustration"
              className="w-full h-auto max-w-lg mx-auto  rounded-[30%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
