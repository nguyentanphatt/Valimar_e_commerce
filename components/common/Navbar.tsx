import React from "react";

const Navbar = () => {
  return (
    <nav className='bg-white/10 md:bg-dark flex flex-row items-center justify-center gap-10 md:gap-5 lg:gap-8 list-none py-3 '>
  <li className='relative text-white font-medium md:font-bold text-sm md:text-xl lg:text-3xl group'>
    <span className="relative group-hover:text-darkblue">
      Discovery
      <span className="absolute left-0 -bottom-1 md:-bottom-2 lg:-bottom-2 w-0 h-0.5 md:h-1 lg:h-1 bg-darkblue transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
    </span>
  </li>
  <li className='relative text-white font-medium md:font-bold text-sm md:text-xl lg:text-3xl group'>
    <span className="relative group-hover:text-darkblue">
      Category
      <span className="absolute left-0 -bottom-1 md:-bottom-2 lg:-bottom-2 w-0 h-0.5 md:h-1 lg:h-1  bg-darkblue transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
    </span>
  </li>
  <li className='relative text-white font-medium md:font-bold text-sm md:text-xl lg:text-3xl group'>
    <span className="relative group-hover:text-darkblue">
      Subscription
      <span className="absolute left-0 -bottom-1 md:-bottom-2 lg:-bottom-2 w-0 h-0.5 md:h-1 lg:h-1 bg-darkblue transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
    </span>
  </li>
</nav>
  );
};

export default Navbar;
