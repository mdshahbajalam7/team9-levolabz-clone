import Head from "next/head";
import { Inter } from "@next/font/google";
import Footer from "@/components/footer.js";
import RemoteDevelopre from "@/components/remoteDeveloper";
import InformationSlider from "@/components/informationSlider";
import PeopleTuring from "@/components/peopleTuring";
import Dedicated from "@/components/dedicated";
import Deeply from "@/components/deeply";
import Service from "@/components/service";
import Banner from "@/components/banner";
import Company from "@/components/company";
import Career from "@/components/career";
import Turing from "@/components/turing";
import Businesses from "@/components/businesses";
import Developers from "@/components/developers";
import Bestdevelopers from "@/components/bestdevelopers";
import Navbar from "@/components/navbar";
import Contact from "@/components/Contact";
import Footers from "@/components/Footers";
import Carousel from "@/components/Carousel";
import { useRef } from "react";



const inter = Inter({ subsets: ["latin"] });



export default function Home() {

  const scrollRef = useRef()
  // const scrollRef = useRef()


const scrolltoSec = () => {
  scrollRef.current.scrollIntoView({
    behavior:"smooth"
  })
}

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
      <Navbar onclick={scrolltoSec}/>
      <Banner onclick={scrolltoSec}/>
      <Company />
      <Dedicated />
      {/* <Deeply />
      <Service />
      <Career />
      <Turing />
      <Businesses />
      <Developers />
      <Bestdevelopers /> */}
      <PeopleTuring />
      <InformationSlider />
      <RemoteDevelopre />
      {/* <Footer /> */}

      {/* new components */}
      <div ref = {scrollRef}>
      <Contact />
      </div>

      <Footers/>


    </>
  );
}
