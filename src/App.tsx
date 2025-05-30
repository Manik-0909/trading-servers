import { TECollapse } from "tw-elements-react";
import Header from "./components/header";
import { useState } from "react";
import Footer from "./components/footer";
import IconCloud from "./components/cloudIcon";
import { MarqueeDemo } from "./components/reviewSlider";

function App() {
   const [activeElement, setActiveElement] = useState("");

   const handleClick = (value: string) => {
      if (value === activeElement) {
         setActiveElement("");
      } else {
         setActiveElement(value);
      }
   };
   return (
      <>
         <Header />
         {/* Announcement Section Start  */}
         <section className="bg-[--secondary-color] text-[13px] py-1.5 text-white flex sm:justify-center items-center md:gap-2.5 gap-1 px-4 flex-wrap h-8">
            <p> &#123;August&#125; VPS Promotion:</p>
            <p className="font-sf-semibold flex items-center gap-1">
               {" "}
               GET 50% OFF NEW ORDERS
               <img
                  src="/static/img/ic-right-arrow-white.svg"
                  alt="Right Arrow Icon"
               />
            </p>
            <p> 4 hours 15 minutes 12 seconds left</p>
         </section>
         {/* Announcement Section End */}

         {/* Hero Section Start */}
         <section className="hero-bg bg-no-repeat lg:h-[720px] h-[650px] relative">
            <div className="max-w-[1200px] lg:mx-auto pt-2.5 flex items-center h-full border-s border-white/10">
               <div className="ps-4 sm:pe-0 pe-4 xl:w-2/4 lg:w-[56%] md:w-4/5 w-full">
                  <div className="flex gap-2 items-center mb-8">
                     <img
                        src="/static/img/trust-pilot1.svg"
                        alt="Trust Pilot Logo"
                        className="w-[100px] h-6"
                     />
                     <div className="flex gap-1 items-center">
                        <img
                           src="/static/img/ic-rating-star.svg"
                           alt="Star Icon"
                           className="bg-[--rating-star-bg] md:w-6 md:h-6 md:p-1 p-0.5 h-4 w-4"
                        />
                        <img
                           src="/static/img/ic-rating-star.svg"
                           alt="Star Icon"
                           className="bg-[--rating-star-bg] md:w-6 md:h-6 md:p-1 p-0.5 h-4 w-4"
                        />
                        <img
                           src="/static/img/ic-rating-star.svg"
                           alt="Star Icon"
                           className="bg-[--rating-star-bg] md:w-6 md:h-6 md:p-1 p-0.5 h-4 w-4"
                        />
                        <img
                           src="/static/img/ic-rating-star.svg"
                           alt="Star Icon"
                           className="bg-[--rating-star-bg] md:w-6 md:h-6 md:p-1 p-0.5 h-4 w-4"
                        />
                        <img
                           src="/static/img/ic-rating-star.svg"
                           alt="Star Icon"
                           className="bg-[--rating-star-bg] md:w-6 md:h-6 md:p-1 p-0.5 h-4 w-4"
                        />
                     </div>
                     <div className="sm:text-[15px] text-[10px] text-white flex gap-1 items-center">
                        <div className="md:block hidden font-roboto">
                           <span className="font-bold">Excellent</span> 4.9 out of 5
                        </div>
                        <div className="md:hidden block">
                           TrustScore
                           <span className="font-bold">4.9</span>
                        </div>
                        <span className="text-4xl leading-4">&#183;</span>
                        <div className="text-sm font-ge-regular">
                           {" "}
                           <span className="font-semibold">52</span> reviews
                        </div>
                     </div>
                  </div>
                  <div>
                     <h1 className="md:text-5xl text-[40px] md:leading-[57px] leading-[44px] text-white font-sf-semibold tracking-tight">
                        <span className="square-shape-bg">
                           <span className="secondary-white-gradient">Low Latency</span>
                        </span>
                        &nbsp;VPS for Futures Trading
                     </h1>
                     <p className="mt-3 mb-6 text-white text-base">
                        Our servers optimized for all brokers, offering a fast + secure
                        environment for executing algorithmic trading systems
                     </p>
                     <ul>
                        <li className="text-white flex items-center gap-1 mb-2">
                           <img src="/static/img/ic-checked.svg" alt="Checked Icon" />1
                           millisecond latency to CME
                        </li>
                        <li className="text-white flex items-center gap-1 mb-2">
                           <img src="/static/img/ic-checked.svg" alt="Checked Icon" />
                           100% uptime guaranteed
                        </li>
                        <li className="text-white flex items-center gap-1 mb-2">
                           <img src="/static/img/ic-checked.svg" alt="Checked Icon" />
                           Support team on standby 24/7
                        </li>
                        <li className="text-white flex items-center gap-1">
                           <img src="/static/img/ic-checked.svg" alt="Checked Icon" />
                           Chicago or New York Data Center
                        </li>
                     </ul>
                     <button className="text-white font-sf-medium bg-[--secondary-color] rounded-[8px] py-2.5 px-6 flex items-center gap-2 mt-8 custom-box-shadow outline outline-black outline-1 h-[40px] text-[13px]">
                        <img
                           src="/static/img/ic-logo-triangle.svg"
                           alt="Logo Triangle Icon"
                        />
                        Launch your own VPS now
                     </button>
                  </div>
                  <div className="md:hidden flex gap-2 items-start mt-8">
                     <div className="flex gap-2 items-start flex-col">
                        <img
                           src="/static/img/trust-pilot.svg"
                           alt="Trust Pilot Logo"
                           className="w-20"
                        />
                        <div className="flex gap-1 items-center">
                           <img
                              src="/static/img/ic-rating-star.svg"
                              alt="Star Icon"
                              className="bg-[--rating-star-bg] p-0.5 h-4 w-4"
                           />
                           <img
                              src="/static/img/ic-rating-star.svg"
                              alt="Star Icon"
                              className="bg-[--rating-star-bg] p-0.5 h-4 w-4"
                           />
                           <img
                              src="/static/img/ic-rating-star.svg"
                              alt="Star Icon"
                              className="bg-[--rating-star-bg] p-0.5 h-4 w-4"
                           />
                           <img
                              src="/static/img/ic-rating-star.svg"
                              alt="Star Icon"
                              className="bg-[--rating-star-bg] p-0.5 h-4 w-4"
                           />
                           <img
                              src="/static/img/ic-rating-star.svg"
                              alt="Star Icon"
                              className="bg-[--rating-star-bg] p-0.5 h-4 w-4"
                           />
                        </div>
                        <div className="text-[10px] text-white flex gap-2 items-center">
                           <div className="md:block hidden">
                              <span className="font-bold">Excellent</span> 4.9 out of 5
                           </div>
                           <div className="md:hidden block">
                              TrustScore
                              <span className="font-bold">4.9</span>
                           </div>
                           <span className="text-4xl leading-4">&#183;</span>
                           <div>
                              {" "}
                              <span className="font-bold">52</span> reviews
                           </div>
                        </div>
                     </div>
                     <img src="/static/img/powered-by.svg" alt="Equinix" />
                  </div>
               </div>
            </div>

            <img
               src="/static/img/heroimg1.png"
               alt="Hero Image"
               className="absolute top-0 -right-20 bottom-0 lg:block hidden mt-[17px]"
            />
         </section>
         {/* Hero Section End */}

         {/* Achievement Section Start */}
         <section className="border border-l-0 border-t-0 border-r-0 border-white/10">
            <img
               src="/static/img/short-border.svg"
               alt="Border"
               className="w-full"
            />
            <div className="max-w-[1200px] mx-auto flex md:gap-20 gap-10 justify-center items-center text-center md:px-0 px-4 py-10 border-x border-white/10">
               <div className="flex flex-col justify-center items-center">
                  <h5 className="text-white md:text-[32px] text-xl font-ge-medium opacity-70">
                     10+
                  </h5>
                  <p className="text-white mt-3 md:text-sm text-xs opacity-50">
                     years in the business
                  </p>
               </div>
               <div className="flex flex-col justify-center items-center">
                  <h5 className="text-white md:text-[32px] text-xl font-ge-medium opacity-70 grey-gradient">
                     100k+
                  </h5>
                  <p className="text-white mt-3 md:text-sm text-xs opacity-50">
                     servers deployed worldwide
                  </p>
               </div>
               <div className="flex flex-col justify-center items-center">
                  <h5 className="text-white md:text-[32px] text-xl font-ge-medium opacity-70 grey-gradient">
                     100%+
                  </h5>
                  <p className="text-white mt-3 md:text-sm text-xs opacity-50">
                     uptime guaranteed
                  </p>
               </div>
            </div>

            <div className="max-w-[1200px] mx-auto sm:hidden block my-5">
               <div className="flex items-center justify-center gap-6">
                  <img src="/static/img/company-logos/logo1.svg" alt="Company Logo" />

                  <img src="/static/img/company-logos/logo2.svg" alt="Company Logo" />

                  <img src="/static/img/company-logos/logo3.svg" alt="Company Logo" />
               </div>
            </div>
            {/* <img
               src="/static/img/achievement-brands.svg"
               alt="Logo's"
               className="max-w-[1200px] mx-auto sm:hidden block mt-5"
            /> */}
         </section>
         {/* Achievement Section End */}

         {/* Benefits section start  */}
         <section className="max-w-[1200px] mx-auto py-24 border-x border-white/10">
            <div className="md:text-center text-left w-full mb-8 md:ps-0 ps-4">
               <h6 className="font-sf-semibold text-[--secondary-color] tracking-tight">
                  Why you need a server
               </h6>
               <h5 className="font-sf-semibold text-[#F5F5F7] md:text-[40px] leading-none text-[28px] mt-1">
                  The benefits of using a trading server...
               </h5>
            </div>
            <div className="md:flex justify-center gap-2">
               <div className="xl:w-3/5 md:w-1/2 p-5 benefit-box benefit-box1">
                  <div className="relative">
                     <img
                        src="/static/img/benefits/img1.svg"
                        alt="Illustration"
                        className="h-72 object-contain"
                     />
                  </div>
                  <div className="mt-3">
                     <h6 className="text-white text-xl leading-6 mb-2">
                        Low Latency to Brokers
                     </h6>
                     <p className="text-[--lighter-grey] text-base leading-6">
                        Our low latency VPS are strategically located to provide you
                        with the lowest execution times possible, no matter where you
                        are located
                     </p>
                     <div className="mt-5 relative">
                        <ul>
                           <li className="text-white flex items-center gap-1 mb-1">
                              <img src="/static/img/ic-checked.svg" alt="Checked Icon" />
                              Latency as low as 1 millisecond to CME
                           </li>
                           <li className="text-white flex items-center gap-1 mb-1">
                              <img src="/static/img/ic-checked.svg" alt="Checked Icon" />
                              Eliminate slippage and optimize your execution
                           </li>
                           <li className="text-white flex items-center gap-1 mb-1">
                              <img src="/static/img/ic-checked.svg" alt="Checked Icon" />
                              Chicago or New York Equinix Data Center
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="xl:w-2/5 md:w-1/2 p-5 benefit-box benefit-box2">
                  <img
                     src="/static/img/benefits/img2.svg"
                     alt="Illustration"
                     className="h-72 object-contain"
                  />
                  <div className="mt-3">
                     <h6 className="text-white text-xl leading-6 mb-2">
                        100% uptime. Guaranteed
                     </h6>
                     <p className="text-[--lighter-grey] text-base leading-6">
                        Redundant power and high-speed infrastructure ensures that your
                        trading system is always online
                     </p>
                     <div className="mt-5">
                        <ul>
                           <li className="text-white flex items-center gap-1 mb-1">
                              <img src="/static/img/ic-checked.svg" alt="Checked Icon" />
                              Powered by multiple Tier-1 network and power providers
                           </li>
                           <li className="text-white flex items-center gap-1 mb-1">
                              <img src="/static/img/ic-checked.svg" alt="Checked Icon" />
                              Your “virtual desktop” is always running in the data center
                           </li>
                           <li className="text-white flex items-center gap-1 mb-1">
                              <img src="/static/img/ic-checked.svg" alt="Checked Icon" />
                              More reliable than your home electricity and internet
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            <div className="md:flex justify-center gap-2 mt-2">
               {/* Next Cards */}
               <div className="xl:w-2/5 md:w-1/2 p-5 benefit-box benefit-box3">
                  <img
                     src="/static/img/benefits/img3.svg"
                     alt="Illustration"
                     className="h-72 object-contain"
                  />
                  <div className="mt-3">
                     <h6 className="text-white text-xl leading-6 mb-2">
                        Automatic Backups
                     </h6>
                     <p className="text-[--lighter-grey] text-base leading-6">
                        Automatic offsite backups every 72 hours
                     </p>
                     <div className="mt-5">
                        <ul>
                           <li className="text-white flex items-center gap-1 mb-1">
                              <img src="/static/img/ic-checked.svg" alt="Checked Icon" />
                              Never lose your data
                           </li>
                           <li className="text-white flex items-center gap-1 mb-1">
                              <img src="/static/img/ic-checked.svg" alt="Checked Icon" />
                              It’s your dedicated trading server, seperating personal
                           </li>
                           <li className="text-white flex items-center gap-1 mb-1">
                              <img src="/static/img/ic-checked.svg" alt="Checked Icon" />
                              Keep trading around the clock without worry of data loss
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="xl:w-3/5 md:w-1/2 p-5 benefit-box benefit-box4">
                  <img
                     src="/static/img/benefits/img4.svg"
                     alt="Illustration"
                     className="h-72 object-contain"
                  />
                  <div className="mt-3">
                     <h6 className="text-white text-xl leading-6 mb-2">
                        1 Millisecond Latency to Chicago Mercantile Exchange (CME)
                     </h6>
                     <p className="text-[--lighter-grey] text-base leading-6">
                        A futures trading VPS strategically located so you can focus on
                        trading, anywhere
                     </p>
                     <div className="mt-5">
                        <ul>
                           <li className="text-white flex items-center gap-1 mb-1">
                              <img src="/static/img/ic-checked.svg" alt="Checked Icon" />
                              Access the control panel from anywhere and any device
                              (iPhone, Android)
                           </li>
                           <li className="text-white flex items-center gap-1 mb-1">
                              <img src="/static/img/ic-checked.svg" alt="Checked Icon" />
                              Your trading system continues to execute as if you were in
                              Chicago
                           </li>
                           <li className="text-white flex items-center gap-1 mb-1">
                              <img src="/static/img/ic-checked.svg" alt="Checked Icon" />
                              Advanced analytics monitoring to ensure full performance and
                              lowest possible latency
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* Benefits section end  */}

         {/* Deploy Server Section Start */}
         <section className="md:block hidden">
            <div className="max-w-[1200px] mx-auto py-16 xl:px-0 px-4 border-x border-white/10">
               <div className="px-16 py-9 bg-[--secondary-color] rounded-[32px] flex items-center gap-5 custom-box-shadow justify-between">
                  <div className="flex items-center gap-3">
                     <img
                        src="/static/img/ic-logo-triangle.svg"
                        alt="Logo Triangle"
                        className="w-10 h-10"
                     />
                     <div>
                        <h5 className="text-white font-ge-semibold tracking-wide lg:text-[22px] text-lg">
                           You can launch your dedicated trading server in less than 3
                           minutes
                        </h5>
                        <p className="text-white font-ge-regular -tracking-tight">
                           And the best thing, you can start for just $20/month
                        </p>
                     </div>
                  </div>

                  <button className="h-[40px] text-[13px] text-[--secondary-color] font-sf-medium bg-white rounded-[8px] py-2.5 px-6 flex items-center gap-2 font-ge-semibold text-nowrap custom-box-shadow">
                     Deploy your own server
                     <img
                        src="/static/img/ic-right-arrow.svg"
                        alt="Logo Triangle Icon"
                     />
                  </button>
               </div>
            </div>
         </section>
         {/* Deploy Server Section End */}

         {/* About the infrastructure Section Start */}
         <section className="bg-no-repeat bg-cover bg-center infrastructure-bg">
            <div className="max-w-[1200px] mx-auto grid md:grid-cols-5 items-center xl:px-0 px-4 border-x border-white/10 py-16 ">
               <div className="md:col-span-3 md:order-1 order-2">
                  <h6 className="font-sf-semibold text-[--secondary-color] tracking-tight">
                     Stop worrying about the infrastructure
                  </h6>
                  <h5 className="font-sf-semibold text-[#F5F5F7] md:text-[40px] leading-[44px] text-[28px] mt-1 lg:w-9/12 w-11/12">
                     We have the fastest VPS for futures trading
                  </h5>

                  <div className="grid sm:grid-cols-2 mt-10 lg:gap-12 gap-7">
                     <div>
                        <div className="flex items-center gap-2 mb-2">
                           <img src="/static/img/ic-tubelight.svg" alt="Light Icon" />
                           <h5 className="font-sf-semibold text-white text-base">
                              <span className="text-[--secondary-color]">
                                 Access Anywhere&nbsp;
                              </span>
                              From Any Device
                           </h5>
                        </div>
                        <p className="text-[#B5B5B5]">
                           You can access your “Virtual Remote Desktop” from your PC,
                           Mac, iPhone, and Android... from anywhere.
                        </p>
                     </div>

                     <div>
                        <div className="flex items-center gap-2 mb-2">
                           <img src="/static/img/ic-tubelight.svg" alt="Light Icon" />
                           <h5 className="font-sf-semibold text-white text-base">
                              <span className="text-[--secondary-color]">
                                 Run Several Strategies&nbsp;
                              </span>
                              On One Server
                           </h5>
                        </div>
                        <p className="text-[#B5B5B5]">
                           Our compute is so powerful, you can run numerous strategies at
                           once on our desired trading platform.
                        </p>
                     </div>

                     <div>
                        <div className="flex items-center gap-2 mb-2">
                           <img src="/static/img/ic-tubelight.svg" alt="Light Icon" />
                           <h5 className="font-sf-semibold text-white text-base">
                              <span className="text-[--secondary-color]">
                                 Chicago Mercantile Exchange&nbsp;
                              </span>
                              Proximity
                           </h5>
                        </div>
                        <p className="text-[#B5B5B5]">
                           When you choose our Chicago location, your trading systems as
                           close as possible to CME Aurora
                        </p>
                     </div>

                     <div>
                        <div className="flex items-center gap-2 mb-2">
                           <img src="/static/img/ic-tubelight.svg" alt="Light Icon" />
                           <h5 className="font-sf-semibold text-white text-base">
                              <span className="text-[--secondary-color]">
                                 Eliminate&nbsp;
                              </span>
                              Backtesting Time
                           </h5>
                        </div>
                        <p className="text-[#B5B5B5]">
                           Spend more time trading by running your backtests on our
                           high-powered AMD EPYC Processors.
                        </p>
                     </div>
                  </div>
               </div>

               <div className="md:col-span-2 md:order-2 order-1">
                  <img src="/static/img/vps-img1.png" alt="VPS" className="w-full" />
               </div>
            </div>
         </section>
         {/* About the infrastructure Section End */}

         {/* Data Centers Section Start */}
         <section className="bg-[#151517]">
            <div className="max-w-[1200px] mx-auto xl:px-0 px-4 grid md:grid-cols-2 gap-14 items-center border-x border-white/10 py-5">
               <div>
                  <IconCloud />
               </div>

               <div>
                  <h6 className="font-sf-semibold text-[--secondary-color] tracking-tight">
                     Major Data Centers Worldwide
                  </h6>
                  <h5 className="font-sf-semibold text-[#F5F5F7] md:text-[40px] leading-[44px] text-[28px] mt-1">
                     Choose the right data center location for your futures VPS
                  </h5>

                  <p className="text-[#B5B5B5] mt-4 text-lg font-sf-regular">
                     Experience peak trading performance by selecting from our institutional data centers worldwide
                  </p>

                  <form className="mt-4">
                     <div>
                        <label htmlFor="broker" className="text-xs text-white mb-2">
                        Select your brokers
                        </label>{" "}
                        <br />
                        <div className="p-3 mt-2 rounded-xl gap-2 items-center border border-white/10 flex bg-[#1D1D1F]">
                           <img src="/static/img/ic-search.svg" alt="" />
                           <input
                              type="text"
                              className="bg-transparent w-full placeholder:text-[#666666] text-white"
                              placeholder="Enter your selected broker here..."
                           />
                        </div>
                     </div>

                     <button className="text-white font-sf-medium bg-[--secondary-color] rounded-[8px] py-3 px-4 flex items-center gap-2 mt-8 font-ge-medium custom-box-shadow h-8 text-[13px]">
                        <img
                           src="/static/img/ic-logo-triangle.svg"
                           alt="Logo Triangle Icon"
                        />
                        Get your VPS
                     </button>
                  </form>
               </div>
            </div>
         </section>
         {/* Data Centers Section End */}

         {/* Video Section Start */}
         <section className="py-12 xl:px-0 px-4 flex justify-center items-center max-w-[1200px] mx-auto border-x border-white/10">
            <img
               src="/static/img/video-thumbnail.png"
               alt="Thumbnail"
               className="xl:translate-x-24"
            />
         </section>
         {/* Video Section End */}

         {/* How it works Section Start */}
         <section>
            <div className="mx-auto max-w-[1200px] border-x border-white/10 lg:pb-48 lg:pt-20 md:py-20 py-5 px-3">
               <div className="text-center ">
                  <h6 className="font-sf-semibold text-[--secondary-color] tracking-tight">
                     Get started in 3 steps...
                  </h6>
                  <h5 className="font-sf-semibold text-[#F5F5F7] md:text-[40px] leading-[44px] text-[28px] mt-1">
                     How it works
                  </h5>
               </div>

               <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 items-start mt-16">
                  <div className="md:flex items-center">
                     <div className="text-center">
                        <img
                           src="/static/img/gradients/heading-title1.svg"
                           alt="Title"
                           className="mx-auto"
                        />
                        <div className="bg-[--box-bg] z-10 relative -mt-12">
                           <h5 className="text-[#F8F8F8F2] md:text-2xl text-xl font-ge-semibold">
                              Sign up with QuantVPS
                           </h5>
                           <p className="text-[#B5B5B5] md:text-base font-ge-regular mt-1.5">
                              Sign up with QuantVPS to get access to your server
                              credentials
                           </p>
                        </div>
                     </div>

                     <img
                        src="/static/img/ic-right-arrow-grey.svg"
                        alt="Right Arrow"
                        className="mx-auto md:mt-0 mt-5 md:rotate-0 rotate-90"
                     />
                  </div>

                  <div className="md:flex items-center">
                     <div className="text-center">
                        <img
                           src="/static/img/gradients/heading-title2.svg"
                           alt="Title"
                           className="mx-auto"
                        />
                        <div className="-mt-12 bg-[--box-bg] z-10 relative">
                           <h5 className="text-[#F8F8F8F2] md:text-2xl text-xl font-ge-semibold">
                              Download Software
                           </h5>
                           <p className="text-[#B5B5B5] md:text-base font-ge-regular mt-1.5">
                              Download your trading software of choice: NinjaTrader,
                              MetaTrader, or Thinkorswim & MORE
                           </p>
                        </div>
                     </div>

                     <img
                        src="/static/img/ic-right-arrow-grey.svg"
                        alt="Right Arrow"
                        className="mx-auto md:mt-0 mt-5 md:rotate-0 rotate-90"
                     />
                  </div>

                  <div className="text-center">
                     <img
                        src="/static/img/gradients/heading-title3.svg"
                        alt="Title"
                        className="mx-auto"
                     />
                     <div className="-mt-12 bg-[--box-bg] z-10 relative">
                        <h5 className="text-[#F8F8F8F2] md:text-2xl text-xl font-ge-semibold">
                           Trade, uninterrupted
                        </h5>
                        <p className="text-[#B5B5B5] md:text-base font-ge-regular mt-1.5">
                           Activate your trading systems and let them run automatically
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* How it works Section End */}

         {/* Happy Traders Section Start */}
         <section className="py-10">
            <div>
               <h6 className="font-sf-semibold text-[--secondary-color] tracking-tight text-center">
                  Loved by Automated Traders around the World
               </h6>
               <div className="max-w-[1200px] mx-auto flex md:flex-row flex-col md:gap-0 gap-5 justify-center md:items-end items-center text-center md:px-0 px-4">
                  <h1 className="md:text-[40px] text-4xl md:leading-[44px] text-white font-ge-semibold">
                     Trusted by&nbsp;
                     <span className="secondary-white-gradient font--ge-semibold">
                        100,000+
                     </span>
                     &nbsp;happy
                     <br />
                     traders worldwide...
                  </h1>
                  <span className="-translate-x-6">
                     <img src="/static/img/thumb-img.svg" alt="thumb-img" />
                  </span>
               </div>

               <div className="flex items-center justify-center mb-8 mt-5">
                  <p className="text-lg font-ge-regular text-[--card-color]">
                     We’re{" "}
                     <span className="text-[--white-color] font-ge-semibold">
                        Excellent 4.9 Stars
                     </span>{" "}
                     at
                  </p>
                  <img
                     src="/static/img/trust-pilot.svg"
                     alt="Trust Pilot Logo"
                     className="sm:w-fit w-20"
                  />
               </div>

               <MarqueeDemo />

               {/* customer-support-section */}
               <div className="my-20 md:px-0 px-3">
                  <div className="flex !justify-center items-center flex-col gap-5 text-center">
                     <p className="text-[--card-color] font-ge-regular text-base">
                        and our customers loves our&nbsp;
                        <span className="secondary-white-gradient font-ge-semibold">
                           Support Teams that always be there 24/7
                        </span>
                     </p>
                     <div className="flex">
                        <img
                           src="/static/img/clients/client1.svg"
                           alt="customer-img"
                           className="ml-[-10px]"
                        />
                        <img
                           src="/static/img/clients/client2.svg"
                           alt="customer-img"
                           className="ml-[-10px]"
                        />
                        <img
                           src="/static/img/clients/client3.svg"
                           alt="customer-img"
                           className="ml-[-10px]"
                        />
                        <img
                           src="/static/img/clients/client4.svg"
                           alt="customer-img"
                           className="ml-[-10px]"
                        />
                        <img
                           src="/static/img/clients/client5.svg"
                           alt="customer-img"
                           className="ml-[-10px]"
                        />
                     </div>
                  </div>
                  <div className="flex justify-center md:ms-[24.7rem] mt-2 gap-2">
                     <img
                        src="/static/img/direction-arrow.svg"
                        alt="direction-arrow"
                        className=""
                     />
                     <p className="caveat-brush-regular text-[--white-color] font-normal text-xl md:-mt-7 ">
                        and because they’re <br />
                        awesome too
                     </p>
                  </div>
               </div>
            </div>
         </section>
         {/* Happy Traders Section End */}

         {/* Accordions section start */}
         <section>
            <img
               src="/static/img/short-border.svg"
               alt="Border"
               className="w-full mb-20"
            />
            <div className="mx-auto max-w-[1200px]">
               <div className="text-center mb-8">
                  <h6 className="font-sf-semibold text-[--secondary-color] tracking-tight mb-1">
                     FAQ
                  </h6>
                  <h5 className="font-sf-semibold text-[#F5F5F7] md:text-[40px] leading-[44px] text-[28px] mt-1 mb-4">
                     Frequently asked questions
                  </h5>
                  <p className=" text-base text-[#B5B5B5] mb-12">
                     Some short answers that provide clarity of what QuantVPS is about
                  </p>
               </div>

               <div className="lg:max-w-[750px] w-full px-5 lg:mx-auto">
                  {/* #1 */}
                  <div className="faq-border">
                     <h2 className="mb-0" id="headingOne">
                        <button
                           className={`${activeElement === "element1" && `text-white`
                              } group relative flex w-full rounded-t-[8px] border-0 px-4 text-sm py-3 leading-[17px] text-left text-[#B5B5B5] transition [overflow-anchor:none]`}
                           type="button"
                           onClick={() => handleClick("element1")}
                           aria-expanded="true"
                           aria-controls="collapseOne"
                        >
                           What is a trading VPS (Virtual Private Server)?
                           <span
                              className={`${activeElement === "element1"
                                 ? `rotate-[-135deg] -mr-1 text-[#fff]`
                                 : `rotate-0 fill-[#555555]`
                                 } ml-auto h-5 w-5 shrink-0 fill-[#fff] text-[#555555] transition-transform duration-200 ease-in-out motion-reduce:transition-none`}
                           >
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 strokeWidth="1.5"
                                 stroke="currentColor"
                                 className="h-6 w-6"
                              >
                                 <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12 4.51562C12.4142 4.51562 12.75 4.85141 12.75 5.26562V12.0156H19.5C19.9142 12.0156 20.25 12.3514 20.25 12.7656C20.25 13.1798 19.9142 13.5156 19.5 13.5156H12.75V20.2656C12.75 20.6798 12.4142 21.0156 12 21.0156C11.5858 21.0156 11.25 20.6798 11.25 20.2656V13.5156H4.5C4.08579 13.5156 3.75 13.1798 3.75 12.7656C3.75 12.3514 4.08579 12.0156 4.5 12.0156H11.25V5.26562C11.25 4.85141 11.5858 4.51562 12 4.51562Z"
                                 />
                              </svg>
                           </span>
                        </button>
                     </h2>
                     <TECollapse
                        show={activeElement === "element1"}
                        className="!mt-0 !rounded-b-none !shadow-none"
                     >
                        <div className="px-5 pt-2 pb-4 text-white">
                           A Trading VPS is a Virtual Private Server optimized for
                           financial trading on platforms such as MT4/MT5. It offers
                           traders the ability to run their trading platforms 24/7 in a
                           secure, stable, and fast environment. This is crucial for
                           executing automated trades or strategies that require constant
                           connectivity and low latency.
                        </div>
                     </TECollapse>
                  </div>

                  {/* #2 */}
                  <div className="faq-border">
                     <h2 className="mb-0" id="headingTwo">
                        <button
                           className={`${activeElement === "element2" && `text-white`
                              } group relative flex w-full rounded-t-[8px] border-0 px-4 text-sm py-3 leading-[17px] text-left text-[#B5B5B5] transition [overflow-anchor:none]`}
                           type="button"
                           onClick={() => handleClick("element2")}
                           aria-expanded="true"
                           aria-controls="collapseOne"
                        >
                           Why should I use trading server for algorithmic futures,
                           crypto, equities, options, and forex trading?
                           <span
                              className={`${activeElement === "element2"
                                 ? `rotate-[-135deg] -mr-1 text-[#fff]`
                                 : `rotate-0 fill-[#555555]`
                                 } ml-auto h-5 w-5 shrink-0 fill-[#fff] text-[#555555] transition-transform duration-200 ease-in-out motion-reduce:transition-none`}
                           >
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 strokeWidth="1.5"
                                 stroke="currentColor"
                                 className="h-6 w-6"
                              >
                                 <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12 4.51562C12.4142 4.51562 12.75 4.85141 12.75 5.26562V12.0156H19.5C19.9142 12.0156 20.25 12.3514 20.25 12.7656C20.25 13.1798 19.9142 13.5156 19.5 13.5156H12.75V20.2656C12.75 20.6798 12.4142 21.0156 12 21.0156C11.5858 21.0156 11.25 20.6798 11.25 20.2656V13.5156H4.5C4.08579 13.5156 3.75 13.1798 3.75 12.7656C3.75 12.3514 4.08579 12.0156 4.5 12.0156H11.25V5.26562C11.25 4.85141 11.5858 4.51562 12 4.51562Z"
                                 />
                              </svg>
                           </span>
                        </button>
                     </h2>
                     <TECollapse
                        show={activeElement === "element2"}
                        className="!mt-0 !rounded-b-none !shadow-none"
                     >
                        <div className="px-5 pt-2 pb-4 text-white">
                           A Trading VPS is a Virtual Private Server optimized for
                           financial trading on platforms such as MT4/MT5. It offers
                           traders the ability to run their trading platforms 24/7 in a
                           secure, stable, and fast environment. This is crucial for
                           executing automated trades or strategies that require constant
                           connectivity and low latency.
                        </div>
                     </TECollapse>
                  </div>

                  {/* #3 */}
                  <div className="faq-border">
                     <h2 className="mb-0" id="headingThree">
                        <button
                           className={`${activeElement === "element3" && `text-white`
                              } group relative flex w-full rounded-t-[8px] border-0 px-4 text-sm py-3 leading-[17px] text-left text-[#B5B5B5] transition [overflow-anchor:none]`}
                           type="button"
                           onClick={() => handleClick("element3")}
                           aria-expanded="true"
                           aria-controls="collapseOne"
                        >
                           How many automated trading strategies can I run on a single
                           VPS?
                           <span
                              className={`${activeElement === "element3"
                                 ? `rotate-[-135deg] -mr-1 text-[#fff]`
                                 : `rotate-0 fill-[#555555]`
                                 } ml-auto h-5 w-5 shrink-0 fill-[#fff] text-[#555555] transition-transform duration-200 ease-in-out motion-reduce:transition-none`}
                           >
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 strokeWidth="1.5"
                                 stroke="currentColor"
                                 className="h-6 w-6"
                              >
                                 <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12 4.51562C12.4142 4.51562 12.75 4.85141 12.75 5.26562V12.0156H19.5C19.9142 12.0156 20.25 12.3514 20.25 12.7656C20.25 13.1798 19.9142 13.5156 19.5 13.5156H12.75V20.2656C12.75 20.6798 12.4142 21.0156 12 21.0156C11.5858 21.0156 11.25 20.6798 11.25 20.2656V13.5156H4.5C4.08579 13.5156 3.75 13.1798 3.75 12.7656C3.75 12.3514 4.08579 12.0156 4.5 12.0156H11.25V5.26562C11.25 4.85141 11.5858 4.51562 12 4.51562Z"
                                 />
                              </svg>
                           </span>
                        </button>
                     </h2>
                     <TECollapse
                        show={activeElement === "element3"}
                        className="!mt-0 !rounded-b-none !shadow-none"
                     >
                        <div className="px-5 pt-2 pb-4 text-white">
                           A Trading VPS is a Virtual Private Server optimized for
                           financial trading on platforms such as MT4/MT5. It offers
                           traders the ability to run their trading platforms 24/7 in a
                           secure, stable, and fast environment. This is crucial for
                           executing automated trades or strategies that require constant
                           connectivity and low latency.
                        </div>
                     </TECollapse>
                  </div>

                  {/* #4 */}
                  <div className="faq-border">
                     <h2 className="mb-0" id="headingFour">
                        <button
                           className={`${activeElement === "element4" && `text-white`
                              } group relative flex w-full rounded-t-[8px] border-0 px-4 text-sm py-3 leading-[17px] text-left text-[#B5B5B5] transition [overflow-anchor:none]`}
                           type="button"
                           onClick={() => handleClick("element4")}
                           aria-expanded="true"
                           aria-controls="collapseOne"
                        >
                           How do I pick the correct virtual private trading server for
                           me?
                           <span
                              className={`${activeElement === "element4"
                                 ? `rotate-[-135deg] -mr-1 text-[#fff]`
                                 : `rotate-0 fill-[#555555]`
                                 } ml-auto h-5 w-5 shrink-0 fill-[#fff] text-[#555555] transition-transform duration-200 ease-in-out motion-reduce:transition-none`}
                           >
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 strokeWidth="1.5"
                                 stroke="currentColor"
                                 className="h-6 w-6"
                              >
                                 <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12 4.51562C12.4142 4.51562 12.75 4.85141 12.75 5.26562V12.0156H19.5C19.9142 12.0156 20.25 12.3514 20.25 12.7656C20.25 13.1798 19.9142 13.5156 19.5 13.5156H12.75V20.2656C12.75 20.6798 12.4142 21.0156 12 21.0156C11.5858 21.0156 11.25 20.6798 11.25 20.2656V13.5156H4.5C4.08579 13.5156 3.75 13.1798 3.75 12.7656C3.75 12.3514 4.08579 12.0156 4.5 12.0156H11.25V5.26562C11.25 4.85141 11.5858 4.51562 12 4.51562Z"
                                 />
                              </svg>
                           </span>
                        </button>
                     </h2>
                     <TECollapse
                        show={activeElement === "element4"}
                        className="!mt-0 !rounded-b-none !shadow-none"
                     >
                        <div className="px-5 pt-2 pb-4 text-white">
                           A Trading VPS is a Virtual Private Server optimized for
                           financial trading on platforms such as MT4/MT5. It offers
                           traders the ability to run their trading platforms 24/7 in a
                           secure, stable, and fast environment. This is crucial for
                           executing automated trades or strategies that require constant
                           connectivity and low latency.
                        </div>
                     </TECollapse>
                  </div>

                  {/* #5 */}
                  <div className="faq-border">
                     <h2 className="mb-0" id="headingFive">
                        <button
                           className={`${activeElement === "element5" && `text-white`
                              } group relative flex w-full rounded-t-[8px] border-0 px-4 text-sm py-3 leading-[17px] text-left text-[#B5B5B5] transition [overflow-anchor:none]`}
                           type="button"
                           onClick={() => handleClick("element5")}
                           aria-expanded="true"
                           aria-controls="collapseOne"
                        >
                           Do you offer support with getting started, and any ongoing
                           support, like NinjaTrader download?
                           <span
                              className={`${activeElement === "element5"
                                 ? `rotate-[-135deg] -mr-1 text-[#fff]`
                                 : `rotate-0 fill-[#555555]`
                                 } ml-auto h-5 w-5 shrink-0 fill-[#fff] text-[#555555] transition-transform duration-200 ease-in-out motion-reduce:transition-none`}
                           >
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 strokeWidth="1.5"
                                 stroke="currentColor"
                                 className="h-6 w-6"
                              >
                                 <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12 4.51562C12.4142 4.51562 12.75 4.85141 12.75 5.26562V12.0156H19.5C19.9142 12.0156 20.25 12.3514 20.25 12.7656C20.25 13.1798 19.9142 13.5156 19.5 13.5156H12.75V20.2656C12.75 20.6798 12.4142 21.0156 12 21.0156C11.5858 21.0156 11.25 20.6798 11.25 20.2656V13.5156H4.5C4.08579 13.5156 3.75 13.1798 3.75 12.7656C3.75 12.3514 4.08579 12.0156 4.5 12.0156H11.25V5.26562C11.25 4.85141 11.5858 4.51562 12 4.51562Z"
                                 />
                              </svg>
                           </span>
                        </button>
                     </h2>
                     <TECollapse
                        show={activeElement === "element5"}
                        className="!mt-0 !rounded-b-none !shadow-none"
                     >
                        <div className="px-5 pt-2 pb-4 text-white">
                           A Trading VPS is a Virtual Private Server optimized for
                           financial trading on platforms such as MT4/MT5. It offers
                           traders the ability to run their trading platforms 24/7 in a
                           secure, stable, and fast environment. This is crucial for
                           executing automated trades or strategies that require constant
                           connectivity and low latency.
                        </div>
                     </TECollapse>
                  </div>

                  {/* #6 */}
                  <div className="faq-border">
                     <h2 className="mb-0" id="headingSix">
                        <button
                           className={`${activeElement === "element6" && `text-white`
                              } group relative flex w-full rounded-t-[8px] border-0 px-4 text-sm py-3 leading-[17px] text-left text-[#B5B5B5] transition [overflow-anchor:none]`}
                           type="button"
                           onClick={() => handleClick("element6")}
                           aria-expanded="true"
                           aria-controls="collapseOne"
                        >
                           How can I access my server from anywhere in the world?
                           <span
                              className={`${activeElement === "element6"
                                 ? `rotate-[-135deg] -mr-1 text-[#fff]`
                                 : `rotate-0 fill-[#555555]`
                                 } ml-auto h-5 w-5 shrink-0 fill-[#fff] text-[#555555] transition-transform duration-200 ease-in-out motion-reduce:transition-none`}
                           >
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 strokeWidth="1.5"
                                 stroke="currentColor"
                                 className="h-6 w-6"
                              >
                                 <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12 4.51562C12.4142 4.51562 12.75 4.85141 12.75 5.26562V12.0156H19.5C19.9142 12.0156 20.25 12.3514 20.25 12.7656C20.25 13.1798 19.9142 13.5156 19.5 13.5156H12.75V20.2656C12.75 20.6798 12.4142 21.0156 12 21.0156C11.5858 21.0156 11.25 20.6798 11.25 20.2656V13.5156H4.5C4.08579 13.5156 3.75 13.1798 3.75 12.7656C3.75 12.3514 4.08579 12.0156 4.5 12.0156H11.25V5.26562C11.25 4.85141 11.5858 4.51562 12 4.51562Z"
                                 />
                              </svg>
                           </span>
                        </button>
                     </h2>
                     <TECollapse
                        show={activeElement === "element6"}
                        className="!mt-0 !rounded-b-none !shadow-none"
                     >
                        <div className="px-5 pt-2 pb-4 text-white">
                           A Trading VPS is a Virtual Private Server optimized for
                           financial trading on platforms such as MT4/MT5. It offers
                           traders the ability to run their trading platforms 24/7 in a
                           secure, stable, and fast environment. This is crucial for
                           executing automated trades or strategies that require constant
                           connectivity and low latency.
                        </div>
                     </TECollapse>
                  </div>

                  {/* #7 */}
                  <div className="faq-border">
                     <h2 className="mb-0" id="headingSeven">
                        <button
                           className={`${activeElement === "element7" && `text-white`
                              } group relative flex w-full rounded-t-[8px] border-0 px-4 text-sm py-3 leading-[17px] text-left text-[#B5B5B5] transition [overflow-anchor:none]`}
                           type="button"
                           onClick={() => handleClick("element7")}
                           aria-expanded="true"
                           aria-controls="collapseOne"
                        >
                           Why should I use a trading VPS to optimize my futures, forex,
                           or crypto trading?
                           <span
                              className={`${activeElement === "element7"
                                 ? `rotate-[-135deg] -mr-1 text-[#fff]`
                                 : `rotate-0 fill-[#555555]`
                                 } ml-auto h-5 w-5 shrink-0 fill-[#fff] text-[#555555] transition-transform duration-200 ease-in-out motion-reduce:transition-none`}
                           >
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 strokeWidth="1.5"
                                 stroke="currentColor"
                                 className="h-6 w-6"
                              >
                                 <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12 4.51562C12.4142 4.51562 12.75 4.85141 12.75 5.26562V12.0156H19.5C19.9142 12.0156 20.25 12.3514 20.25 12.7656C20.25 13.1798 19.9142 13.5156 19.5 13.5156H12.75V20.2656C12.75 20.6798 12.4142 21.0156 12 21.0156C11.5858 21.0156 11.25 20.6798 11.25 20.2656V13.5156H4.5C4.08579 13.5156 3.75 13.1798 3.75 12.7656C3.75 12.3514 4.08579 12.0156 4.5 12.0156H11.25V5.26562C11.25 4.85141 11.5858 4.51562 12 4.51562Z"
                                 />
                              </svg>
                           </span>
                        </button>
                     </h2>
                     <TECollapse
                        show={activeElement === "element7"}
                        className="!mt-0 !rounded-b-none !shadow-none"
                     >
                        <div className="px-5 pt-2 pb-4 text-white">
                           A Trading VPS is a Virtual Private Server optimized for
                           financial trading on platforms such as MT4/MT5. It offers
                           traders the ability to run their trading platforms 24/7 in a
                           secure, stable, and fast environment. This is crucial for
                           executing automated trades or strategies that require constant
                           connectivity and low latency.
                        </div>
                     </TECollapse>
                  </div>

                  {/* #8 */}
                  <div className="faq-border">
                     <h2 className="mb-0" id="headingEight">
                        <button
                           className={`${activeElement === "element8" && `text-white`
                              } group relative flex w-full rounded-t-[8px] border-0 px-4 text-sm py-3 leading-[17px] text-left text-[#B5B5B5] transition [overflow-anchor:none]`}
                           type="button"
                           onClick={() => handleClick("element8")}
                           aria-expanded="true"
                           aria-controls="collapseOne"
                        >
                           What are the benefits of virtual and dedicated private servers
                           for trading?
                           <span
                              className={`${activeElement === "element8"
                                 ? `rotate-[-135deg] -mr-1 text-[#fff]`
                                 : `rotate-0 fill-[#555555]`
                                 } ml-auto h-5 w-5 shrink-0 fill-[#fff] text-[#555555] transition-transform duration-200 ease-in-out motion-reduce:transition-none`}
                           >
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 strokeWidth="1.5"
                                 stroke="currentColor"
                                 className="h-6 w-6"
                              >
                                 <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12 4.51562C12.4142 4.51562 12.75 4.85141 12.75 5.26562V12.0156H19.5C19.9142 12.0156 20.25 12.3514 20.25 12.7656C20.25 13.1798 19.9142 13.5156 19.5 13.5156H12.75V20.2656C12.75 20.6798 12.4142 21.0156 12 21.0156C11.5858 21.0156 11.25 20.6798 11.25 20.2656V13.5156H4.5C4.08579 13.5156 3.75 13.1798 3.75 12.7656C3.75 12.3514 4.08579 12.0156 4.5 12.0156H11.25V5.26562C11.25 4.85141 11.5858 4.51562 12 4.51562Z"
                                 />
                              </svg>
                           </span>
                        </button>
                     </h2>
                     <TECollapse
                        show={activeElement === "element8"}
                        className="!mt-0 !rounded-b-none !shadow-none"
                     >
                        <div className="px-5 pt-2 pb-4 text-white">
                           A Trading VPS is a Virtual Private Server optimized for
                           financial trading on platforms such as MT4/MT5. It offers
                           traders the ability to run their trading platforms 24/7 in a
                           secure, stable, and fast environment. This is crucial for
                           executing automated trades or strategies that require constant
                           connectivity and low latency.
                        </div>
                     </TECollapse>
                  </div>

                  {/* #9 */}
                  <div className="faq-border">
                     <h2 className="mb-0" id="headingNine">
                        <button
                           className={`${activeElement === "element9" && `text-white`
                              } group relative flex w-full rounded-t-[8px] border-0 px-4 text-sm py-3 leading-[17px] text-left text-[#B5B5B5] transition [overflow-anchor:none]`}
                           type="button"
                           onClick={() => handleClick("element9")}
                           aria-expanded="true"
                           aria-controls="collapseOne"
                        >
                           How does QuantVPS compare to ChartVPS?
                           <span
                              className={`${activeElement === "element9"
                                 ? `rotate-[-135deg] -mr-1 text-[#fff]`
                                 : `rotate-0 fill-[#555555]`
                                 } ml-auto h-5 w-5 shrink-0 fill-[#fff] text-[#555555] transition-transform duration-200 ease-in-out motion-reduce:transition-none`}
                           >
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 strokeWidth="1.5"
                                 stroke="currentColor"
                                 className="h-6 w-6"
                              >
                                 <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12 4.51562C12.4142 4.51562 12.75 4.85141 12.75 5.26562V12.0156H19.5C19.9142 12.0156 20.25 12.3514 20.25 12.7656C20.25 13.1798 19.9142 13.5156 19.5 13.5156H12.75V20.2656C12.75 20.6798 12.4142 21.0156 12 21.0156C11.5858 21.0156 11.25 20.6798 11.25 20.2656V13.5156H4.5C4.08579 13.5156 3.75 13.1798 3.75 12.7656C3.75 12.3514 4.08579 12.0156 4.5 12.0156H11.25V5.26562C11.25 4.85141 11.5858 4.51562 12 4.51562Z"
                                 />
                              </svg>
                           </span>
                        </button>
                     </h2>
                     <TECollapse
                        show={activeElement === "element9"}
                        className="!mt-0 !rounded-b-none !shadow-none"
                     >
                        <div className="px-5 pt-2 pb-4 text-white">
                           A Trading VPS is a Virtual Private Server optimized for
                           financial trading on platforms such as MT4/MT5. It offers
                           traders the ability to run their trading platforms 24/7 in a
                           secure, stable, and fast environment. This is crucial for
                           executing automated trades or strategies that require constant
                           connectivity and low latency.
                        </div>
                     </TECollapse>
                  </div>

                  {/* #10 */}
                  <div className="faq-border">
                     <h2 className="mb-0" id="headingTen">
                        <button
                           className={`${activeElement === "element10" && `text-white`
                              } group relative flex w-full rounded-t-[8px] border-0 px-4 text-sm py-3 leading-[17px] text-left text-[#B5B5B5] transition [overflow-anchor:none]`}
                           type="button"
                           onClick={() => handleClick("element10")}
                           aria-expanded="true"
                           aria-controls="collapseOne"
                        >
                           Which brokers does QuantVPS support ultra-low latency for?
                           <span
                              className={`${activeElement === "element10"
                                 ? `rotate-[-135deg] -mr-1 text-[#fff]`
                                 : `rotate-0 fill-[#555555]`
                                 } ml-auto h-5 w-5 shrink-0 fill-[#fff] text-[#555555] transition-transform duration-200 ease-in-out motion-reduce:transition-none`}
                           >
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 strokeWidth="1.5"
                                 stroke="currentColor"
                                 className="h-6 w-6"
                              >
                                 <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12 4.51562C12.4142 4.51562 12.75 4.85141 12.75 5.26562V12.0156H19.5C19.9142 12.0156 20.25 12.3514 20.25 12.7656C20.25 13.1798 19.9142 13.5156 19.5 13.5156H12.75V20.2656C12.75 20.6798 12.4142 21.0156 12 21.0156C11.5858 21.0156 11.25 20.6798 11.25 20.2656V13.5156H4.5C4.08579 13.5156 3.75 13.1798 3.75 12.7656C3.75 12.3514 4.08579 12.0156 4.5 12.0156H11.25V5.26562C11.25 4.85141 11.5858 4.51562 12 4.51562Z"
                                 />
                              </svg>
                           </span>
                        </button>
                     </h2>
                     <TECollapse
                        show={activeElement === "element10"}
                        className="!mt-0 !rounded-b-none !shadow-none"
                     >
                        <div className="px-5 pt-2 pb-4 text-white">
                           A Trading VPS is a Virtual Private Server optimized for
                           financial trading on platforms such as MT4/MT5. It offers
                           traders the ability to run their trading platforms 24/7 in a
                           secure, stable, and fast environment. This is crucial for
                           executing automated trades or strategies that require constant
                           connectivity and low latency.
                        </div>
                     </TECollapse>
                  </div>

                  {/* #11 */}
                  <div className="faq-border">
                     <h2 className="mb-0" id="headingEleven">
                        <button
                           className={`${activeElement === "element11" && `text-white`
                              } group relative flex w-full rounded-t-[8px] border-0 px-4 text-sm py-3 leading-[17px] text-left text-[#B5B5B5] transition [overflow-anchor:none]`}
                           type="button"
                           onClick={() => handleClick("element11")}
                           aria-expanded="true"
                           aria-controls="collapseOne"
                        >
                           How can you guarantee 24/7, 100% uptime?
                           <span
                              className={`${activeElement === "element11"
                                 ? `rotate-[-135deg] -mr-1 text-[#fff]`
                                 : `rotate-0 fill-[#555555]`
                                 } ml-auto h-5 w-5 shrink-0 fill-[#fff] text-[#555555] transition-transform duration-200 ease-in-out motion-reduce:transition-none`}
                           >
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 strokeWidth="1.5"
                                 stroke="currentColor"
                                 className="h-6 w-6"
                              >
                                 <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12 4.51562C12.4142 4.51562 12.75 4.85141 12.75 5.26562V12.0156H19.5C19.9142 12.0156 20.25 12.3514 20.25 12.7656C20.25 13.1798 19.9142 13.5156 19.5 13.5156H12.75V20.2656C12.75 20.6798 12.4142 21.0156 12 21.0156C11.5858 21.0156 11.25 20.6798 11.25 20.2656V13.5156H4.5C4.08579 13.5156 3.75 13.1798 3.75 12.7656C3.75 12.3514 4.08579 12.0156 4.5 12.0156H11.25V5.26562C11.25 4.85141 11.5858 4.51562 12 4.51562Z"
                                 />
                              </svg>
                           </span>
                        </button>
                     </h2>
                     <TECollapse
                        show={activeElement === "element11"}
                        className="!mt-0 !rounded-b-none !shadow-none"
                     >
                        <div className="px-5 pt-2 pb-4 text-white">
                           A Trading VPS is a Virtual Private Server optimized for
                           financial trading on platforms such as MT4/MT5. It offers
                           traders the ability to run their trading platforms 24/7 in a
                           secure, stable, and fast environment. This is crucial for
                           executing automated trades or strategies that require constant
                           connectivity and low latency.
                        </div>
                     </TECollapse>
                  </div>

                  {/* #12 */}
                  <div className="faq-border">
                     <h2 className="mb-0" id="headingtwelve">
                        <button
                           className={`${activeElement === "element12" && `text-white`
                              } group relative flex w-full rounded-t-[8px] border-0 px-4 text-sm py-3 leading-[17px] text-left text-[#B5B5B5] transition [overflow-anchor:none]`}
                           type="button"
                           onClick={() => handleClick("element12")}
                           aria-expanded="true"
                           aria-controls="collapseOne"
                        >
                           Do you offer dedicated servers?
                           <span
                              className={`${activeElement === "element12"
                                 ? `rotate-[-135deg] -mr-1 text-[#fff]`
                                 : `rotate-0 fill-[#555555]`
                                 } ml-auto h-5 w-5 shrink-0 fill-[#fff] text-[#555555] transition-transform duration-200 ease-in-out motion-reduce:transition-none`}
                           >
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 strokeWidth="1.5"
                                 stroke="currentColor"
                                 className="h-6 w-6"
                              >
                                 <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12 4.51562C12.4142 4.51562 12.75 4.85141 12.75 5.26562V12.0156H19.5C19.9142 12.0156 20.25 12.3514 20.25 12.7656C20.25 13.1798 19.9142 13.5156 19.5 13.5156H12.75V20.2656C12.75 20.6798 12.4142 21.0156 12 21.0156C11.5858 21.0156 11.25 20.6798 11.25 20.2656V13.5156H4.5C4.08579 13.5156 3.75 13.1798 3.75 12.7656C3.75 12.3514 4.08579 12.0156 4.5 12.0156H11.25V5.26562C11.25 4.85141 11.5858 4.51562 12 4.51562Z"
                                 />
                              </svg>
                           </span>
                        </button>
                     </h2>
                     <TECollapse
                        show={activeElement === "element12"}
                        className="!mt-0 !rounded-b-none !shadow-none"
                     >
                        <div className="px-5 pt-2 pb-4 text-white">
                           A Trading VPS is a Virtual Private Server optimized for
                           financial trading on platforms such as MT4/MT5. It offers
                           traders the ability to run their trading platforms 24/7 in a
                           secure, stable, and fast environment. This is crucial for
                           executing automated trades or strategies that require constant
                           connectivity and low latency.
                        </div>
                     </TECollapse>
                  </div>
               </div>
            </div>

            <div>
               <img
                  src="/static/img/text-banner.png"
                  alt="text-banner"
                  className="mx-auto mt-20"
               />
               <img
                  src="/static/img/long-border.svg"
                  alt="Border"
                  className="w-10/12 mx-auto"
               />
            </div>
         </section>
         {/* Accordions section end */}

         {/* Achievement Section Start */}
         <section className="py-20 high-performance-bg">
            <div className="max-w-[1200px] mx-auto flex md:gap-20 gap-10 justify-center items-center text-center md:px-0 px-4">
               <div>
                  <img
                     src="/static/img/section-logo.png"
                     alt="Logo"
                     className="mb-4 mx-auto"
                  />
                  <h1 className="md:text-[40px] text-4xl md:leading-[60px] leading-[48px] text-white font-sf-semibold">
                     <span className="secondary-white-gradient">High performance</span>
                     &nbsp;virtual
                     <br />
                     private servers for trading
                  </h1>
               </div>
            </div>
            <div className=" flex items-center justify-center my-8">
               <button className="text-white text-[13px] font-sf-medium bg-[--secondary-color] rounded-[8px] py-1.5 px-4 flex items-center justify-center custom-box-shadow h-[40px] w-[238px]">
                  <img
                     src="/static/img/ic-logo-triangle.svg"
                     alt="Logo Triangle Icon"
                     className="me-2"
                  />
                  Launch your own VPS now
               </button>
            </div>
            <div className="flex items-center justify-center gap-6 my-8">
               <img src="/static/img/company-logos/logo1.svg" alt="Company Logo" />
               <img src="/static/img/company-logos/logo2.svg" alt="Company Logo" />
               <img src="/static/img/company-logos/logo3.svg" alt="Company Logo" />
            </div>
            <div className="md:flex items-center justify-center gap-6 text-[13px]">
               <div className="text-white flex items-center justify-center gap-1 mb-2">
                  <img src="/static/img/ic-checked.svg" alt="Checked Icon" />
                  Expert support team
               </div>
               <div className="text-white flex items-center justify-center gap-1 mb-2">
                  <img src="/static/img/ic-checked.svg" alt="Checked Icon" />
                  100% uptime guaranteed
               </div>
               <div className="text-white flex items-center justify-center gap-1 mb-2">
                  <img src="/static/img/ic-checked.svg" alt="Checked Icon" />
                  302,129 deployed VPS
               </div>
            </div>
         </section>
         {/* Achievement Section End */}
         <Footer />
      </>
   );
}

export default App;
