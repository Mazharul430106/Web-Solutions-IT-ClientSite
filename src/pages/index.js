import Banner from "@/Components/Banner/Banner";
import Head from "next/head";
import About from "./About";


export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Home</title>
      </Head>
      <Banner></Banner>
      <About></About>
    </div>
  )
}
