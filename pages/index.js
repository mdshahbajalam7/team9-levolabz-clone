import Head from "next/head";
import { Inter } from "@next/font/google";
import Dedicated from "@/components/dedicated";
import Banner from "@/components/banner";
import Navbar from "@/components/navbar";
import Contact from "@/components/Contact";
import Footers from "@/components/Footers";
import { useRef } from "react";
import Product from "@/components/product";
import Testimonials from "@/components/testimonials";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const scrollRef = useRef();
  // const scrollRef = useRef()

  const scrolltoSec = () => {
    scrollRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <Head>
        <title>Levo Labz</title>
        <meta name="description" content="Generated by Levo Labz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Navbar onClick={scrolltoSec}/>
      <Banner onClick={scrolltoSec}/>
      <Dedicated />
      {/* new components */}
      <Product />
      <Testimonials />
      <div ref={scrollRef}>
      <Contact />
      </div>
      <Footers />
    </>
  );
}
