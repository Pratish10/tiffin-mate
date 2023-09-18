import React from "react";

import { Link } from "react-router-dom";

import { Button, Text } from "components";

const Header = () => {
  return (
    <header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs w-full">
      <Button
        className="border border-black-900 border-solid cursor-pointer h-[81px] ml-14 md:ml-[0] md:mt-0 my-[19px] sm:text-[40px] md:text-[46px] text-[54px] text-center w-[317px]"
        shape="square"
        color="amber_300"
        size="xs"
        variant="fill"
      >
        <Link to="/">tiffin mate</Link>
      </Button>
      <ul className="flex md:flex-col flex-row font-montserrat gap-[54px] sm:hidden items-start justify-start md:ml-[0] ml-[357px] md:mt-0 my-[46px] w-auto common-row-list">
        <li>
          <div className="hover:font-semibold text-lime-900 text-xl underline">
            <Text size="txtMontserratSemiBold20">
              <Link to="/">Home</Link>
            </Text>
          </div>
        </li>
        <li>
          <div className="hover:font-semibold text-blue_gray-900 hover:text-lime-900 text-xl hover:underline">
            <Text size="txtMontserratRegular20">
              <Link to="/menu">Menu</Link>
            </Text>
          </div>
        </li>
        <li>
          <div className="hover:font-semibold text-blue_gray-900 hover:text-lime-900 text-xl hover:underline">
            <Text className="common-pointer" size="txtMontserratRegular20">
              <Link to="/franchise">Franchise</Link>
            </Text>
          </div>
        </li>
        <li>
          <div className="hover:font-semibold text-blue_gray-900 hover:text-lime-900 text-xl hover:underline">
            <Text className="common-pointer" size="txtMontserratRegular20">
              <Link to="/faq">FAQ’s</Link>
            </Text>
          </div>
        </li>
        <li>
          <div className="hover:font-semibold text-blue_gray-900 hover:text-lime-900 text-xl hover:underline">
            <Text className="common-pointer" size="txtMontserratRegular20">
              <Link to="/contactus">Contact Us</Link>
            </Text>
          </div>
        </li>
      </ul>
    </header>
  );
};

Header.defaultProps = {};

export default Header;
