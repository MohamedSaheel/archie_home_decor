import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export const Service = (props) => {
  const { activeTab, handleTabClick, divRefs } = props;
  return (
    <div>
      <div className="min-h-60 bg-[url('/assets/images/service-background.jpg')] bg-cover relative">
        <div className="text-4xl text-white text-left font-semibold leading-tight tracking-widest max-w-[400px] pl-5 pt-5">
          INNOVATIVE IDEAS STYLISH DESIGNS
        </div>
        <div className="flex flex-col absolute md:top-44 lg:top-44 top-52 w-[100%] items-center">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14 md:gap-14 lg:gap-4">
            <Card
              className={`w-80 relative hover:cursor-pointer ${
                activeTab === 0 ? "bg-black text-white" : ""
              }`}
              onClick={() => handleTabClick(0)}
            >
              <div className="absolute -top-[72px] left-[72px]">
                <img src="/assets/icons/card1-img.svg" alt="card1 image" />
              </div>

              <CardHeader className="mt-20">
                <CardTitle className="text-center">Floor Plans</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                Precision-crafted 2D floor plans tailored to your needs,
                ensuring functionality and aesthetic appeal
              </CardContent>
            </Card>
            <Card
              className={`w-80 relative hover:cursor-pointer ${
                activeTab === 1 ? "bg-black text-white" : ""
              }`}
              onClick={() => handleTabClick(1)}
            >
              <img
                src="/assets/icons/card2-img.svg"
                alt="card1 image"
                className="absolute -top-[72px] left-[72px]"
              />
              <CardHeader className="mt-20">
                <CardTitle className="text-center">3D Elevation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                Stunning 3D elevations that bring your designs to life, trust
                our expert team to deliver precision and creativity tailored to
                your vision.
              </CardContent>
            </Card>
            <Card
              className={`w-80 relative hover:cursor-pointer ${
                activeTab === 2 ? "bg-black text-white" : ""
              }`}
              onClick={() => handleTabClick(2)}
            >
              <img
                src="/assets/icons/card3-img.svg"
                alt="card1 image"
                className="absolute -top-[72px] left-[72px]"
              />
              <CardHeader className="mt-20">
                <CardTitle className="text-center">Interior Designs</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                Inspired interior designs that elevate your space, our expert
                team brings creativity and functionality to every project,
                tailored to your unique style.
              </CardContent>
            </Card>
          </div>
          <div className="m-16">
            {activeTab === 0 && (
              <div
                className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-2"
                ref={divRefs[0]}
              >
                <div className="flex gap-2 flex-col">
                  <span className="text-2xl font-bold">FLOOR PLANS</span>
                  <div>
                    Transforming visions into precise 2D floor plans, Archie
                    Home Decors crafts detailed layouts for residential and
                    commercial spaces. With expert precision and personalized
                    service, we deliver accurate designs tailored to your needs.
                    Trust us to bring your ideas to life, ensuring functionality
                    and aesthetic appeal in every project. Contact us today for
                    seamless floor plan solutions that exceed expectations.
                  </div>
                </div>

                <div>
                  <img src="/assets/images/floor-plan.png" alt="floor image" />
                </div>
              </div>
            )}
            {activeTab === 1 && (
              <div
                className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-2"
                ref={divRefs[1]}
              >
                <div className=" flex gap-2 flex-col">
                  <span className="text-2xl font-bold">3D ELEVATION</span>
                  <div>
{`                    Elevate your outdoor spaces with Archie Home Decors. Our
                    expert team designs striking exterior elevations that blend
                    aesthetics with functionality, creating captivating
                    landscapes tailored to your vision. From modern facades to
                    timeless designs, trust us to enhance your property's curb
                    appeal and transform your outdoor living experience.`}
                  </div>
                </div>

                <div>
                  <img
                    src="/assets/images/3d-elevation.png"
                    alt="3d elevation image"
                  />
                </div>
              </div>
            )}
            {activeTab === 2 && (
              <div
                className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-2"
                ref={divRefs[2]}
              >
                <div className=" flex gap-2 flex-col">
                  <span className="text-2xl font-bold">INTERIOR DESIGNS</span>
                  <div>
                    Transforming spaces into personalized havens, Archie Home
                    Decors specializes in bespoke interior designs tailored to
                    your lifestyle. With meticulous attention to detail and a
                    collaborative approach, we craft environments that inspire
                    and delight. From concept to completion, trust our expert
                    team to bring your vision to life with creativity and
                    craftsmanship. Contact us today to start your journey to a
                    beautifully designed space.
                  </div>
                </div>

                <div>
                  <img
                    src="/assets/images/interior-img.svg"
                    alt="interior image"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
