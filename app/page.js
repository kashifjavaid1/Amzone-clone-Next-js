import Categories from "./(component)/categories/Categories";
import { Card } from "./(component)/navbar/hero/card/Card";
import Hero from "./(component)/navbar/hero/Hero";
import Navbar from "./(component)/navbar/Navbar";
import GiftCardProducts from "./(component)/products/Products";
import footerImage from "../public/images/footer.jpg";
import Image from "next/image";
import Footer from "./(component)/footer/Footer";
export default function Home() {
  return (
    <>
      <div className="bg-[#bbbfbf]">
        <Navbar />
        <div className="w-full sm:px-7">
          <Hero />
          <div className="relative bottom-96  px-4 sm:px-[14px] sm:bottom-10 md:-mt-24 lg:-mt-24 xl:-mt-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <Card title="Shop smartwatches" src="/images/box14_image.jpg" />
              <Card title="Refresh" src="/images/box1_image.jpg" />
              <Card title="Gaming" src="/images/box9_image.jpg" />
              <Card title="Shop deal" src="/images/box5_image.jpg" />
              <Card title="Deals in PCs" src="/images/box2_image.jpg" />
              <Card
                title="Upgrade your office furniture"
                src="/images/box3_image.jpg"
              />
              <Card title="Amazon Gadget Store" src="/images/box4_image.jpg" />
              <Card title="Toys under $25" src="/images/box6_image.jpg" />
            </div>
          </div>
        </div>
        <Categories />

        <GiftCardProducts />
        <div className="bg-[#cfd5d5]">
          <div className=" w-full md:w-[95%] md:mx-auto  py-20 ">
            <Image src={footerImage} alt={"Not a found "} />
          </div>
        </div>
        {/* footer */}
        <Footer />
      </div>
    </>
  );
}
