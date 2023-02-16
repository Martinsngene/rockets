/** @format */

import { useEffect, useState } from "react";

import { Button, MenuButton } from "../button";
import { Links } from "../constants/NavBar.Schema";
import Menu from "../menu";
const NavBar = () => {
  const [menuState, setMenuState] = useState(false);

  return (
    <nav
      className={`w-[100%] h-[6vh] z-50 flex items-center justify-between px-4 lg:px-[3rem] bg-white`}>
      {/* Logo */}
      <div className='logo w-[30px] lg:w-[50px] h-[30px] lg:h-[50px] flex items-center justify-center'>
        <img src='/vite.svg' width={35} height={35} />
      </div>
      <ul className='links w-[50%] xl:w-[40%] items-center justify-between hidden md:flex'>
        {/* Links from NavBar Schema mapped into buttons */}
        {Links.map((item, index) => {
          return (
            <a key={index} href={item.route}>
              <Button
                className={`text-[#361921] text-[0.75rem] xl:text-[1rem] font-[700] leading-[1.5rem]`}>
                {item.link}
              </Button>
            </a>
          );
        })}
      </ul>
      {/* Open Menu Button */}
      <div className='menuIcon block md:hidden'>
        <MenuButton onClick={() => setMenuState(true)}>open</MenuButton>
      </div>
      {/* Menu */}
      {menuState && <Menu ctrlMenu={() => setMenuState(false)} />}
    </nav>
  );
};

export default NavBar;
