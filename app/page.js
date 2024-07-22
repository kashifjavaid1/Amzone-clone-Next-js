import { Card } from "./(component)/navbar/hero/card/Card";
import Hero from "./(component)/navbar/hero/Hero";
import Navbar from "./(component)/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full sm:px-10">
        <Hero />
        <div className="relative bottom-96  px-4 sm:px-0 sm:bottom-10 md:-mt-24 lg:-mt-24 xl:-mt-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <Card title="Deals in PCs" src="/images/box1_image.jpg" />
            <Card title="Refresh" src="/images/box2_image.jpg" />
            <Card title="Gaming" src="/images/box3_image.jpg" />
            <Card title="Shop deal" src="/images/box5_image.jpg" />
          </div>
        </div>
      </div>
    </>
  );
}
