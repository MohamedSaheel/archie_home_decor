"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const interior = [
  "/assets/images/interior/1.jpg",
  "/assets/images/interior/2.jpg",
  "/assets/images/interior/3.jpg",
  "/assets/images/interior/4.jpg",
  "/assets/images/interior/5.jpg",
  "/assets/images/interior/6.jpg",
  "/assets/images/interior/7.jpg",
  "/assets/images/interior/8.jpg",
  "/assets/images/interior/9.jpg",
  "/assets/images/interior/10.jpg",
  "/assets/images/interior/11.jpg",
  "/assets/images/interior/12.jpg",
  "/assets/images/interior/13.jpg",
  "/assets/images/interior/14.jpg",
  "/assets/images/interior/15.jpg",
  "/assets/images/interior/16.jpg",
  "/assets/images/interior/17.jpg",
  "/assets/images/interior/18.jpg",
  "/assets/images/interior/19.jpg",
  "/assets/images/interior/20.jpg",
  "/assets/images/interior/21.jpg",
  "/assets/images/interior/22.jpg",
  "/assets/images/interior/23.jpg",
  "/assets/images/interior/24.jpg",
  "/assets/images/interior/25.jpg",
  "/assets/images/interior/26.jpg",
  "/assets/images/interior/27.jpg",
  "/assets/images/interior/28.jpg",
  "/assets/images/interior/29.jpg",
  "/assets/images/interior/30.jpg",
  "/assets/images/interior/31.jpg",
  "/assets/images/interior/32.jpg",
  "/assets/images/interior/33.jpg",
  "/assets/images/interior/34.jpg",
  "/assets/images/interior/35.jpg",
  "/assets/images/interior/36.jpg",
  "/assets/images/interior/38.jpg",
  "/assets/images/interior/39.jpg",
  "/assets/images/interior/40.jpg",
  "/assets/images/interior/41.jpg",
  "/assets/images/interior/42.jpg",
  "/assets/images/interior/43.jpg",
  "/assets/images/interior/44.jpg",
];
const floorplan = [
  "/assets/images/floorplan/1.jpg",
  "/assets/images/floorplan/2.jpg",
  "/assets/images/floorplan/3.jpg",
  "/assets/images/floorplan/4.jpg",
  "/assets/images/floorplan/5.jpg",
  "/assets/images/floorplan/6.jpg",
  "/assets/images/floorplan/7.jpg",
  "/assets/images/floorplan/8.jpg",
  "/assets/images/floorplan/9.jpg",
  "/assets/images/floorplan/10.jpg",
  "/assets/images/floorplan/11.jpg",
  "/assets/images/floorplan/12.jpg",
  "/assets/images/floorplan/13.jpg",
  "/assets/images/floorplan/14.jpg",
  "/assets/images/floorplan/15.jpg",
  "/assets/images/floorplan/16.jpg",
  "/assets/images/floorplan/17.jpg",
  "/assets/images/floorplan/18.jpg",
  "/assets/images/floorplan/19.jpg",
  "/assets/images/floorplan/20.jpg",
  "/assets/images/floorplan/21.jpg",
  "/assets/images/floorplan/22.jpg",
  "/assets/images/floorplan/23.jpg",
  "/assets/images/floorplan/24.jpg",
  "/assets/images/floorplan/25.jpg",
  "/assets/images/floorplan/26.jpg",
  "/assets/images/floorplan/27.jpg",
  "/assets/images/floorplan/28.jpg",
  "/assets/images/floorplan/29.jpg",
  "/assets/images/floorplan/30.jpg",
  "/assets/images/floorplan/31.jpg",
  "/assets/images/floorplan/32.jpg",
  "/assets/images/floorplan/33.jpg",
  "/assets/images/floorplan/34.jpg",
  "/assets/images/floorplan/35.jpg",
  "/assets/images/floorplan/36.jpg",
  "/assets/images/floorplan/38.jpg",
];
const exterior = [
  "/assets/images/exterior/1.jpg",
  "/assets/images/exterior/2.jpg",
  "/assets/images/exterior/3.jpg",
  "/assets/images/exterior/4.jpg",
  "/assets/images/exterior/5.jpg",
  "/assets/images/exterior/6.jpg",
  "/assets/images/exterior/7.jpg",
  "/assets/images/exterior/8.jpg",
  "/assets/images/exterior/9.jpg",
  "/assets/images/exterior/10.jpg",
  "/assets/images/exterior/11.jpg",
  "/assets/images/exterior/12.jpg",
  "/assets/images/exterior/13.jpg",
  "/assets/images/exterior/14.jpg",
  "/assets/images/exterior/15.jpg",
  "/assets/images/exterior/16.jpg",
  "/assets/images/exterior/17.jpg",
  "/assets/images/exterior/18.jpg",
  "/assets/images/exterior/19.jpg",
  "/assets/images/exterior/20.jpg",
  "/assets/images/exterior/21.jpg",
  "/assets/images/exterior/22.jpg",
  "/assets/images/exterior/23.jpg",
  "/assets/images/exterior/24.jpg",
  "/assets/images/exterior/25.jpg",
  "/assets/images/exterior/26.jpg",
  "/assets/images/exterior/27.jpg",
  "/assets/images/exterior/28.jpg",
  "/assets/images/exterior/29.jpg",
  "/assets/images/exterior/30.jpg",
  "/assets/images/exterior/31.jpg",
  "/assets/images/exterior/32.jpg",
  "/assets/images/exterior/33.jpg",
  "/assets/images/exterior/34.jpg",
  "/assets/images/exterior/35.jpg",
  "/assets/images/exterior/36.jpg",
  "/assets/images/exterior/38.jpg",
  "/assets/images/exterior/39.jpg",
];
const CardCom = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-10 shadow-2xl rounded-xl p-10">
      {data.map((src, index) => (
        <div
          key={index}
          className="hover:scale-110  transition-transform duration-300 ease-in-out "
        >
          <img
            className="w-full h-full rounded-3xl bg-cover"
            src={src}
            alt={`Image ${index}`}
           
          />
        </div>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div className="container w-full space-y-4 ">
      <div className="flex flex-wrap justify-between w-full  lg:space-x-0 space-y-6">
        <div className="text-lg font-bold w-[500px] ">
          Through every completed project, we not only shape spaces but also
          sculpt dreams into reality, leaving behind legacies that stand as
          testaments to our passion and craftsmanship.
        </div>
        <div>
          <div className="flex bg-primary p-2 text-white items-center justify-center space-x-10 rounded-3xl">
            <div>Get in touch</div>

            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1.5em"
              width="1.5em"
            >
              <path d="M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z" />
            </svg>
          </div>
          <div className="flex justify-evenly mt-3 space-x-4">
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
        </div>
      </div>
      <Tabs defaultValue="flowplan" className="">
        <TabsList className="flex space-x-2 bg-transparent">
          <TabsTrigger
            value="flowplan"
            className="px-8 py-2 border rounded-3xl text-primary"
          >
            floorplan
          </TabsTrigger>
          <TabsTrigger
            value="interior"
            className="px-8 py-2 border rounded-3xl text-primary"
          >
            interior
          </TabsTrigger>
          <TabsTrigger
            value="exterior"
            className="px-8 py-2 border rounded-3xl text-primary"
          >
            exterior
          </TabsTrigger>
        </TabsList>

        <TabsContent value="flowplan">
          <CardCom data={floorplan} />
        </TabsContent>
        <TabsContent value="interior">
          <CardCom data={interior} />
        </TabsContent>
        <TabsContent value="exterior">
          <CardCom data={exterior} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default App;
