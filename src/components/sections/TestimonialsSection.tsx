import { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "Amira Ben Ali",
    role: "CEO",
    content: '"PROGES has truly elevated our digital presence. Their web and mobile solutions helped us expand our business and connect with a global audience."',
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    id: 2,
    name: "Iyadh Chebbi",
    role: "Founder & CEO",
    content: '"The team at PROGES turned our vision into reality. Their innovative approach and technical expertise have exceeded our expectations, delivering outstanding results."',
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: 3,
    name: "Fatima Al Zayed",
    role: "Marketing Director",
    content: '"Working with PROGES has been a game-changer. Their ability to develop cutting-edge mobile apps has propelled our business in the Emirates market."',
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    id: 4,
    name: "Carlos Silva",
    role: "Entrepreneur",
    content: '"PROGES’s team in Portugal delivered an exceptional mobile app for our startup. Their professionalism and skill in creating user-friendly solutions are unmatched."',
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    id: 5,
    name: "Sophie Dubois",
    role: "Product Manager",
    content: '"Our partnership with PROGES has taken our business in France to new heights. Their expertise in web development has helped us increase our online presence and engagement."',
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    id: 6,
    name: "Aouni Chaker",
    role: "Business Owner",
    content: '"PROGES has been integral to our growth in Germany. They provided top-tier web solutions that have boosted our brand visibility and user experience."',
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  }
];

const TestimonialsSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-scroll function
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        moveToNext();
      }
    }, 3500); // Auto-scroll every 3.5 seconds

    return () => clearInterval(interval);
  }, []);

  // Move to next slide
  const moveToNext = () => {
    if (carouselRef.current) {
      const firstChild = carouselRef.current.firstElementChild as HTMLElement;
      if (firstChild) {
        firstChild.classList.add("slide-out");
        setTimeout(() => {
          carouselRef.current?.appendChild(firstChild);
          firstChild.classList.remove("slide-out");
        }, 500); // Animation time
      }
    }
  };

  // Move to previous slide
  const moveToPrevious = () => {
    if (carouselRef.current) {
      const lastChild = carouselRef.current.lastElementChild as HTMLElement;
      if (lastChild) {
        carouselRef.current.insertBefore(lastChild, carouselRef.current.firstElementChild);
      }
    }
  };

  return (
    <section id="testimonials" className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fadeIn">
          What Our Global Clients Say!
        </h2>
        <div className="relative max-w-3xl mx-auto animate-fadeIn">
          <Carousel className="w-full">
            <CarouselContent ref={carouselRef} className="flex space-x-4 transition-all">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                 <div className="bg-gradient-to-r  from-indigo-500 via-cyan-500 to-sky-500 p-8 rounded-xl shadow-lg w-[700px] flex-shrink-0 h-[220px] flex flex-col items-center">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h3 className="font-semibold text-white ">{testimonial.name}</h3>
                        <p className="text-gray-600 text-white">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 flex-grow text-white">{testimonial.content}</p>
                    <div className="flex text-yellow-400 mt-auto">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={20} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Previous & Next Buttons (Manual Control) 
            <div className="hidden md:block">
              <CarouselPrevious
                className="absolute -left-12 lg:-left-16 top-1/2 transform -translate-y-1/2"
                onClick={moveToPrevious}
              />
              <CarouselNext
                className="absolute -right-12 lg:-right-16 top-1/2 transform -translate-y-1/2"
                onClick={moveToNext}
              />
            </div>
            
*/}
          </Carousel>
        </div>
      </div>

      <style jsx>{`
        .slide-out {
          transform: translateX(-100%);
          transition: transform 0.5s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
