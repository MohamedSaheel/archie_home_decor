"use client";

import React,{useEffect} from "react";
import { useRouter } from "next/navigation";
const Page = () => {
  const Route = useRouter();
  useEffect(() => Route.push("/home"),[]);
  return <div></div>;
};

export default Page;
