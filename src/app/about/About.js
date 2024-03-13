import { Button } from "@/components/ui/button";
import Image from "next/image";
const About = (props) => {
  const { isFullText, handleReadMore, isOpen, toggleSlider, divRef } = props;
  return (
    <div className="flex items-center flex-col gap-12">
      <span
        className="text-4xl max-w-[468px] text-center font-semibold leading-tight tracking-widest"
        ref={divRef}
      >
        WE ARE A FINE ARCHITECTURE FIRM IN TAMILNADU
      </span>

      {isFullText ? (
        <div className="max-w-[600px] text-justify">
         {` Welcome to Archie Home Decors, where imagination meets precision in
          architectural design! We specialize in bringing your vision to life
          through comprehensive services in 2D plans, 3D elevation renderings,
          captivating interior designs, and immersive walkthrough videos. Our
          team of skilled architects and designers collaborates closely with
          clients to understand their unique requirements and aspirations.
          Whether you're envisioning a residential space, commercial
          establishment, or public project, we're committed to delivering
          innovative solutions tailored to your needs. With our expertise in
          creating detailed 2D plans, you can visualize the layout and structure
          of your project with clarity and accuracy. Our meticulous approach
          ensures that every aspect of your design is thoughtfully considered
          and meticulously executed. Elevate your project with our stunning 3D
          elevation renderings, which provide a realistic preview of how your
          building will look from different perspectives. These high-quality
          visuals capture the essence of your design, allowing you to make
          informed decisions and communicate your ideas effectively. Step inside
          your dream space with our captivating interior designs, crafted to
          reflect your style, preferences, and functional requirements. Whether
          you prefer contemporary elegance, timeless sophistication, or bold
          innovation, we'll transform your interior into a masterpiece of design
          and functionality. Experience your project like never before with our
          immersive walkthrough videos, which offer a virtual tour of your space
          before it's even built. From exploring the layout and flow to
          experiencing the ambiance and atmosphere, our walkthroughs provide a
          realistic preview that brings your vision to life. At Archie Home
          Decors, we're dedicated to exceeding your expectations and bringing
          your dreams to reality. Explore our portfolio to see examples of our
          work, and contact us today to discuss how we can bring your project to
          life with our comprehensive design services.`}
          <div className="flex justify-around mt-7 relative items-center">
            <Button onClick={toggleSlider} className="z-10">
              GET IN TOUCH
            </Button>
            <div
              className={`gap-3 absolute lg:-left-36 lg:top-2 md:top-14 md:left-16 top-14 left-0 ${
                isOpen
                  ? "flex lg:animate-fadeIn md:animate-fadeOut animate-fadeOut"
                  : "hidden"
              } `}
            >
               <a href="https://wa.me/917825915899" target="_blank">
              <img
                src="/assets/icons/whatsapp-icon.png"
                alt="Whatsapp Image"
                width="30px"
                height="30px"
              />
            </a>
            <a
              href="https://www.instagram.com/archie_home_decors?igsh=d293dnlnY3Q0ZHR3"
              target="_blank"
            >
              <img
                src="/assets/icons/insta-icon.png"
                alt="Instagram Image"
                width="30px"
                height="30px"
              />
            </a>
            <a
              href="https://www.facebook.com/nanba.nanba.75873"
              target="_blank"
            >
              <img
                src="/assets/icons/facebook-icon.png"
                alt="Facebook Image"
                width="30px"
                height="30px"
              />
            </a>
            <a href="mailto:archiehomedecors@gmail.com">
              <img
                src="/assets/icons/mail-icon.png"
                alt="Mail Image"
                width="30px"
                height="30px"
              />
            </a>
            <a href="tel:917825915899">
              <img
                src="/assets/icons/phone-icon.png"
                alt="Phone Image"
                width="30px"
                height="30px"
              />
            </a>
            </div>

            <Button variant="outline" onClick={handleReadMore}>
              READ LESS
            </Button>
          </div>
        </div>
      ) : (
        <div className="max-w-[600px] text-justify">
          Welcome to Archie Home Decors, where imagination meets precision in
          architectural design! We specialize in bringing your vision to life
          through comprehensive services in 2D plans, 3D elevation renderings,
          captivating interior designs, and immersive walkthrough videos...
          <div className="flex justify-around mt-7 relative items-center">
            <Button onClick={toggleSlider} className="z-10">
              GET IN TOUCH
            </Button>
            <div
              className={`gap-3 absolute lg:-left-36 lg:top-2 md:top-14 md:left-16 top-14 left-0 ${
                isOpen
                  ? "flex lg:animate-fadeIn md:animate-fadeOut animate-fadeOut"
                  : "hidden"
              } `}
            >
              <a href="https://wa.me/917825915899" target="_blank">
              <img
                src="/assets/icons/whatsapp-icon.png"
                alt="Whatsapp Image"
                width="30px"
                height="30px"
              />
            </a>
            <a
              href="https://www.instagram.com/archie_home_decors?igsh=d293dnlnY3Q0ZHR3"
              target="_blank"
            >
              <img
                src="/assets/icons/insta-icon.png"
                alt="Instagram Image"
                width="30px"
                height="30px"
              />
            </a>
            <a
              href="https://www.facebook.com/nanba.nanba.75873"
              target="_blank"
            >
              <img
                src="/assets/icons/facebook-icon.png"
                alt="Facebook Image"
                width="30px"
                height="30px"
              />
            </a>
            <a href="mailto:archiehomedecors@gmail.com">
              <img
                src="/assets/icons/mail-icon.png"
                alt="Mail Image"
                width="30px"
                height="30px"
              />
            </a>
            <a href="tel:917825915899">
              <img
                src="/assets/icons/phone-icon.png"
                alt="Phone Image"
                width="30px"
                height="30px"
              />
            </a>
            </div>

            <Button variant="outline" onClick={handleReadMore}>
              READ MORE
            </Button>
          </div>
        </div>
      )}
      <img src="/assets/images/house.png" alt="House Image" />
    </div>
  );
};

export default About;
