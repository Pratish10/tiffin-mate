import React from "react";

import { Link } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue_gray-900 flex font-montserrat items-center justify-center md:px-5 w-full">
      {/* 1st row */}
      <div className="m-8 grid grid-cols-3 justify-evenly">
        {/* First Column */}
        <div className="flex-1 flex flex-col items-center justify-center mb-[50px] mt-[50px] mx-auto mr-[140px]">
          <div className="mb-[50px]">
            <Button
              className="border border-black-900 border-solid cursor-pointer font-abyssinicasil text-5xl sm:text-[35px] md:text-[40px] text-center w-[300px]"
              shape="square"
              color="amber_300"
              size="xs"
              variant="fill"
              style={{ fontFamily: "Abyssinica SIL" }}
            >
              <Link to="/">tiffin mate</Link>
            </Button>
          </div>
          <div className="text-center">
            <Text
              className="text-white-A700 text-xl sm:text-[22x] text-left sm:text-left"
              size="txtMontserratMedium24Amber300"
              style={{ lineHeight: "2", letterSpacing: 3 }}
            >
              Address: 5-180, <br />
              Subhash Chandra Bose <br />
              Street, Ags Cinemas <br />
              Opposite, Madurvoyal, <br />
              Pincode - 600095.
            </Text>
          </div>
          <div className="flex mt-20 mr-[30px]">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 h-[30px] w-[30px]"
            >
              <Img src="images/img_facebook1.png" alt="Facebook" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 h-[30px] w-[30px]"
            >
              <Img src="images/img_linkedin1.png" alt="LinkedIn" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 h-[30px] w-[30px]"
            >
              <Img src="images/img_youtube1.png" alt="YouTube" />
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 h-[30px] w-[30px]"
            >
              <Img src="images/img_twitter1.png" alt="Twitter" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 h-[30px] w-[30px]"
            >
              <Img src="images/img_instagram1.png" alt="Instagram" />
            </a>
            <a
              href="https://www.website.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 h-[30px] w-[30px]"
            >
              <Img src="images/img_web1.png" alt="Website" />
            </a>
          </div>
        </div>

        {/* Second Column */}
        <div className="flex-1 flex flex-col items-center justify-left mb-[50px] mt-[50px] mx-auto mr-[100px]">
          <ul className="text-white-A700 text-xl sm:text-[22px] ml-[20px] mb-[4rem] text-left sm:text-left">
            <li className="my-14">
              <Link to="/">Home</Link>
            </li>
            <li className="my-14">
              <Link to="/menu">Menu</Link>
            </li>
            <li className="my-14">
              <Link to="/franchise">Franchise</Link>
            </li>
            <li className="my-14">
              <Link to="/faq">FAQ’s</Link>
            </li>
            <li className="my-14">
              <Link to="/contactus">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Third Column */}
        <div className="flex-1 flex flex-col items-center justify-left mt-[50px] ml-[200px]">
          <ul className="text-white-A700 text-xl sm:text-[22px] ml-[20px] text-left sm:text-left">
            <li className="my-14">
              <Link to="/terms&conditions">Terms & Conditions</Link>
            </li>
            <li className="my-14">
              <Link to="/privacypolicy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        {/* 2nd row  */}
        <div className="col-span-3">
          <Line className="bg-gray-100 h-px w-[100%]" />
          <div className="w-full text-center text-white-A700 text-xl mt-[30px]">
            <Text size="txtMontserratMedium20">
              © {currentYear} Tiffin Mate. All Rights Reserved.{" "}
            </Text>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.defaultProps = {};

export default Footer;
