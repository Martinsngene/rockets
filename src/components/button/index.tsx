/** @format */

import React from "react";
interface ButtonPropsI {
  children: React.ReactNode;
  onClick?: (param: any) => void;
  className?: string;
}

//Generic button component
export const Button = React.forwardRef((props: ButtonPropsI, ref: any) => {
  return (
    <button ref={ref} className={props.className} onClick={props.onClick}>
      {props.children}
    </button>
  );
});

//Uses the above component to build a specific button for the menu to avoid repetition of classes
export const MenuButton = (props: ButtonPropsI) => {
  return (
    <Button
      {...props}
      className='text-[1.8rem] hover:text-[#5E3BEE] transition ease-in-out delay-150 hover:scale-x-125 hover:scale-110 duration-300'>
      {props.children}
    </Button>
  );
};
