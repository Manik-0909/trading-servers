const Footer = () => {
    return (
        <>
            {/* Footer Start */}
            <footer className="px-10 pb-10">
                <div className="mx-auto w-full max-w-[980px] border-t border-white/10">
                    <div className="ps-10 mt-6 flex justify-start items-center gap-4">
                        <div>
                            <img src="/static/img/footer-logo.png" alt="footer-icon" />
                        </div>
                        <div>
                            <h6 className="text-[--footer-link-clr] text-xs font-normal">
                                QuantVPS
                            </h6>
                        </div>
                        <div>
                            <img src="/static/img/reverse-icon.svg" alt="reverse-icon" />
                        </div>
                        <div>
                            <h6 className="text-[--light-grey] text-xs font-normal">
                                All Services Online
                            </h6>
                        </div>

                        <div className="flex items-center me-4">
                            <img src="/static/img/green-check.svg" alt="Check Icon" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                        {/*div-1 */}
                        <div>
                            <h2 className="mb-[10px] text-xs font-semibold text-[--light-black]">
                                Navigation
                            </h2>
                            <ul className="text-[--footer-link-clr] text-xs font-normal">
                                <li className="mb-[10px]">
                                    <a href="#" className=" hover:underline">
                                        Home
                                    </a>
                                </li>
                                <li className="mb-[10px]">
                                    <a href="#" className="hover:underline">
                                        Pricing
                                    </a>
                                </li>
                                <li className="mb-[10px]">
                                    <a href="#" className="hover:underline">
                                        Features
                                    </a>
                                </li>
                                <li className="mb-[10px]">
                                    <a href="#" className="hover:underline">
                                        How it Works
                                    </a>
                                </li>
                                <li className="mb-[10px]">
                                    <a href="#" className="hover:underline">
                                        FAQ
                                    </a>
                                </li>
                                <li className="mb-9">
                                    <a href="#" className="hover:underline">
                                        Login
                                    </a>
                                </li>
                            </ul>

                            {/* about-section */}
                            <h2 className="mb-[10px] text-xs font-semibold text-[--light-black]">
                                About
                            </h2>
                            <ul className="text-[--footer-link-clr] text-xs font-normal">
                                <li className="mb-[10px]">
                                    <a href="#" className=" hover:underline">
                                        Broker Latency Check
                                    </a>
                                </li>
                                <li className="mb-[10px]">
                                    <a href="#" className="hover:underline">
                                        Chicago Data Center
                                    </a>
                                </li>
                                <li className="mb-[10px]">
                                    <a href="#" className="hover:underline">
                                        New York Data Center
                                    </a>
                                </li>
                                <li className="mb-[10px]">
                                    <a href="#" className="hover:underline">
                                        Twitter
                                    </a>
                                </li>
                                <li className="mb-[10px]">
                                    <a href="#" className="hover:underline">
                                        Instagram
                                    </a>
                                </li>
                                <li className="mb-[10px]">
                                    <a href="#" className="hover:underline">
                                        YouTube
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/*div-2*/}
                        <div>
                            <h2 className="mb-[10px] text-xs font-semibold text-[--light-black]">
                                Resources
                            </h2>
                            <ul className="text-[--footer-link-clr] text-xs font-normal">
                                <li className="mb-[10px]">
                                    <a href="#" className=" hover:underline">
                                        Documentation
                                    </a>
                                </li>

                                <li className="mb-[10px]">
                                    <a href="#" className=" hover:underline">
                                        Tutorials & Tips
                                    </a>
                                </li>
                                <li className="mb-[10px]">
                                    <a href="#" className="hover:underline">
                                        Blog
                                    </a>
                                </li>
                                <li className="mb-6">
                                    <a href="#" className="hover:underline">
                                        Videos
                                    </a>
                                </li>
                            </ul>

                            {/* support-section */}
                            <h2 className="mb-[10px] text-xs font-semibold text-[--light-black]">
                                Support
                            </h2>
                            <ul className="text-[--footer-link-clr] text-xs font-normal">
                                <li className="mb-[10px]">
                                    <a href="#" className=" hover:underline">
                                        Support Articles
                                    </a>
                                </li>

                                <li className="mb-[10px]">
                                    <a href="#" className=" hover:underline">
                                        Contact Us
                                    </a>
                                </li>
                                <li className="mb-6">
                                    <a href="#" className="hover:underline">
                                        System Status
                                    </a>
                                </li>
                            </ul>

                            {/* Account-section */}
                            <h2 className="mb-[10px] text-xs font-semibold text-[--light-black]">
                                Account
                            </h2>
                            <ul className="text-[--footer-link-clr] text-xs font-normal">
                                <li className="mb-[10px]">
                                    <a href="#" className=" hover:underline">
                                        Login
                                    </a>
                                </li>

                                <li className="mb-[10px]">
                                    <a href="#" className=" hover:underline">
                                        Deploy New Server
                                    </a>
                                </li>
                                <li className="mb-[10px]">
                                    <a href="#" className="hover:underline">
                                        Chat with Support
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/*div-3*/}
                        <div>
                            <h2 className="mb-[10px] text-xs font-semibold text-[--light-black]">
                                Trading Servers
                            </h2>
                            <ul className="text-[--footer-link-clr] text-xs font-normal">
                                <li className="mb-[10px]">
                                    <a href="#" className=" hover:underline">
                                        Futures Trading VPS
                                    </a>
                                </li>

                                <li className="mb-[10px]">
                                    <a href="#" className=" hover:underline">
                                        Best VPS for Futures Trading
                                    </a>
                                </li>
                                <li className="mb-[10px]">
                                    <a href="#" className="hover:underline">
                                        Best VPS for Crypto Trading
                                    </a>
                                </li>
                                <li className="mb-[10px]">
                                    <a href="#" className="hover:underline">
                                        Best VPS for Forex Trading
                                    </a>
                                </li>
                                <li className="mb-[10px]">
                                    <a href="#" className="hover:underline">
                                        VPS for Interactive Brokers
                                    </a>
                                </li>
                                <li className="mb-[10px]">
                                    <a href="#" className="hover:underline">
                                        VPS for MetaTrader 4
                                    </a>
                                </li>
                                <li className="mb-[10px]">
                                    <a href="#" className="hover:underline">
                                        VPS for MetaTrader 5
                                    </a>
                                </li>
                                <li className="mb-[10px]">
                                    <a href="#" className="hover:underline">
                                        VPS for TradeStation
                                    </a>
                                </li>
                                <li className="mb-[10px]">
                                    <a href="#" className="hover:underline">
                                        VPS for NinjaTrader
                                    </a>
                                </li>
                                <li className="mb-[10px]">
                                    <a href="#" className="hover:underline">
                                        VPS for MultiCharts
                                    </a>
                                </li>
                                <li className="mb-[10px]">
                                    <a href="#" className="hover:underline">
                                        Best Trading VPS
                                    </a>
                                </li>
                                <li className="mb-[10px]">
                                    <a href="#" className="hover:underline">
                                        VPS for Coinbase
                                    </a>
                                </li>
                                <li className="mb-[10px]">
                                    <a href="#" className="hover:underline">
                                        VPS for Binance
                                    </a>
                                </li>
                                <li className="mb-[10px]">
                                    <a href="#" className="hover:underline">
                                        AMD Ryzen VPS
                                    </a>
                                </li>
                                <li className="mb-[10px]">
                                    <a href="#" className="hover:underline">
                                        AMD EPYC VPS
                                    </a>
                                </li>
                                <li className="mb-[10px]">
                                    <a href="#" className="hover:underline">
                                        VPS for Rithmic
                                    </a>
                                </li>
                                <li className="mb-[10px]">
                                    <a href="#" className="hover:underline">
                                        VPS for ByBit
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/*div-4*/}
                        <div>
                            <h2 className="mb-[10px] text-xs font-semibold text-[--light-black]">
                                More Services
                            </h2>
                            <ul className="text-[--footer-link-clr] text-xs font-normal">
                                <li className="mb-[10px]">
                                    <a href="#" className=" hover:underline">
                                        Virtual Private Server for Apex Trader Funding
                                    </a>
                                </li>

                                <li className="mb-[10px]">
                                    <a href="#" className=" hover:underline">
                                        Chicago Equinix CHI1 CHI2 CHI3 VPS
                                    </a>
                                </li>
                                <li className="mb-[10px]">
                                    <a href="#" className=" hover:underline">
                                        New York Equinix NY1 / NY2 VPS
                                    </a>
                                </li>
                                <li className="mb-[10px]">
                                    <a href="#" className=" hover:underline">
                                        Virtual Private Server for TopStep
                                    </a>
                                </li>
                                <li className="mb-[10px]">
                                    <a href="#" className=" hover:underline">
                                        Windows Server 2022 VPS
                                    </a>
                                </li>
                                <li className="mb-[10px]">
                                    <a href="#" className=" hover:underline">
                                        Windows Server 2019 VPS
                                    </a>
                                </li>
                                <li className="mb-[10px]">
                                    <a href="#" className=" hover:underline">
                                        Windows Server 2016 VPS
                                    </a>
                                </li>
                                <li className="mb-[10px]">
                                    <a href="#" className=" hover:underline">
                                        NYSE NASDAQ Servers
                                    </a>
                                </li>
                                <li className="mb-[10px]">
                                    <a href="#" className=" hover:underline">
                                        Futures CME Servers
                                    </a>
                                </li>
                                <li className="mb-[10px]">
                                    <a href="#" className=" hover:underline">
                                        Chicago CME VPS
                                    </a>
                                </li>
                                <li className="mb-[10px]">
                                    <a href="#" className=" hover:underline">
                                        Kinetick VPS
                                    </a>
                                </li>
                                <li className="mb-[10px]">
                                    <a href="#" className=" hover:underline">
                                        Linux VPS
                                    </a>
                                </li>
                                <li className="mb-[10px]">
                                    <a href="#" className=" hover:underline">
                                        MT4 VPS
                                    </a>
                                </li>
                                <li className="mb-[10px]">
                                    <a href="#" className=" hover:underline">
                                        MT5 VPS
                                    </a>
                                </li>
                                <li className="mb-[10px]">
                                    <a href="#" className=" hover:underline">
                                        CQG VPS
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* footer-part-2 */}
                    <div className="border-b border-t-0 border-l-0 border-r-0 border-white/10 py-2">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="text-center md:text-left mb-4 md:mb-0">
                                <h6 className="text-[--light-grey] text-xs font-normal">
                                    Deploy a {" "}
                                    <span className="text-[--footer-secondary-fonts]">
                                        Trading Server Instantly
                                    </span>
                                </h6>
                            </div>
                            <div className="border border-[--footer-secondary-fonts] rounded-full flex items-center gap-3 ps-3 pe-0">
                                <h6 className="text-[--footer-secondary-fonts] text-xs font-normal">
                                    Русский
                                </h6>
                                <h6 className="text-[--footer-secondary-fonts] text-xs font-normal">
                                    Polski
                                </h6>
                                <h6 className="text-[--footer-secondary-fonts] text-xs font-normal">
                                    Español
                                </h6>
                                <div className="border border-[--secondary-color] rounded-full px-4 py-1 m-0.5 bg-[--secondary-color]">
                                    <h6 className="  text-white text-xs font-normal">English</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* footer-part-3*/}

                    <div className="flex items-center justify-center md:justify-between pt-2 pb-6">
                        <div className="flex flex-col md:flex-row gap-5 mb-4 md:mb-0 ">
                            <div>
                                <h6 className="text-[--light-grey] text-xs font-normal">
                                    Copyright © 20{24} {" "}
                                    <span className="text-[--footer-link-clr]">QuantVPS</span> All rights
                                    reserved.
                                </h6>
                            </div>
                            <div>
                                <ul className="text-[--footer-link-clr] text-xs font-normal flex flex-row gap-5">
                                    <li>
                                        <a href="#" className="hover:underline">
                                            Legal
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover:underline border border-b-0 border-t-0 border-white/10 px-3"
                                        >
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">
                                            SLA
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <img src="/static/img/dropdown.svg" alt="dropdown-icon" />
                        </div>
                    </div>

                    <div>
                        <h6 className="text-[10px] font-normal text-[--light-black-color]">
                            Caution: Trading involves risk (including Futures and Forex) and
                            is not suitable for every investor. An investor could potentially
                            lose all or more than the initial investment. You are responsible
                            for your financial decisions and we assume zero liability for
                            money made or lost as a result of using our services. Only risk
                            capital should be used for trading and only those with sufficient
                            risk capital should consider trading. Visit <a href="#" className="underline">quantvps.com/legal</a> for
                            more.
                        </h6>
                    </div>
                </div>
            </footer>
            {/* Footer End */}
        </>
    );
};

export default Footer;
