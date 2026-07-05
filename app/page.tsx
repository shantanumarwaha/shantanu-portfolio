import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ExecutiveSummary from "@/components/ExecutiveSummary";
import CareerRoadmap from "@/components/CareerRoadmap";
import Engagements from "@/components/Engagements";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <ExecutiveSummary />
        <CareerRoadmap />
        <Engagements />
      </main>
      <Footer />
    </>
  );
}
