import {
   NavigationMenu,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
} from "@/components/ui/navigation-menu";
const Header = () => {
   return (
      <>
         {/* Header Start */}
         <header>
            <NavigationMenu className="block max-w-full">
               <div className="max-w-[1200px] mx-auto pt-4 pb-3 flex items-center justify-between xl:px-0 px-4">
                  <div className="flex items-center gap-2 xl:w-1/4">
                     <img src="/static/img/logo.svg" alt="Logo" />
                     <div className="h-8 flex items-center">
                        <div className="h-full">
                           <h5 className="text-white font-sf-semibold text-[13px] leading-[13px]">
                              Trading Servers
                           </h5>
                           <p className="text-[--grey-color] text-xs font-sf-medium leading-3 mt-1">
                              by QuantVPS.com
                           </p>
                        </div>
                     </div>
                  </div>

                  <div className="lg:block hidden">
                     <NavigationMenuList className="flex gap-8 items-center">
                        <NavigationMenuItem>
                           <NavigationMenuLink href="#" className="text-white">
                              Benefits
                           </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                           <NavigationMenuLink href="#" className="text-white">
                              Features
                           </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                           <NavigationMenuLink href="#" className="text-white">
                              Brokers
                           </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                           <NavigationMenuLink href="#" className="text-white">
                              How It Works
                           </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                           <NavigationMenuLink href="#" className="text-white">
                              Pricing
                           </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                           <NavigationMenuLink href="#" className="text-white">
                              FAQ
                           </NavigationMenuLink>
                        </NavigationMenuItem>
                     </NavigationMenuList>
                  </div>

                  <div className="flex items-center gap-4 lg:w-1/4 justify-end">
                     <button className="text-white text-nowrap font-sf-medium border border-white rounded-[8px] py-1.5 px-6 lg:block hidden h-8">
                        Get Help
                     </button>

                     <button className="text-white text-nowrap font-sf-medium bg-[--secondary-color] rounded-[8px] py-1.5 px-4 flex items-center gap-2 custom-box-shadow h-8">
                        <img
                           src="/static/img/ic-logo-triangle.svg"
                           alt="Logo Triangle Icon"
                        />
                        Deploy Server
                     </button>
                  </div>
               </div>
            </NavigationMenu>
         </header>
         {/* Header End */}
      </>
   );
};

export default Header;
