/** @format */

import { Button, MenuButton } from "../button";
import { Links } from "../constants/NavBar.Schema";

interface MenuPropsI {
  ctrlMenu: any;
}

const Menu = ({ ctrlMenu }: MenuPropsI) => {
  return (
    <div className='bg-[#F5FCFF] z-50 top-0 right-0 left-0 absolute w-[100%] h-[100%] flex items-start justify-center'>
      {/* Close Menu Button */}
      <div className='closeMenuBtn  absolute top-[1rem] right-[3rem]'>
        <MenuButton onClick={ctrlMenu}>close</MenuButton>
      </div>
      {/* Navigation Links */}
      <ul className=' h-[45%] flex items-center justify-around flex-col mt-[50px]'>
        {Links.map((item, index) => {
          return (
            <a key={index} href={item.route}>
              <Button
                className={`text-[#1C1E53] text-[1rem] font-[600] leading-[150%]`}>
                {item.link}
              </Button>
            </a>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
