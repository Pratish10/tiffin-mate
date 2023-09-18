import React from "react";

import { Link } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue_gray-900 flex font-montserrat items-center justify-center md:px-5 w-full">
      <div className="flex flex-col items-center justify-center mb-[54px] mt-[95px] mx-auto w-[91%]">
        <ul className="flex flex-col items-center justify-center w-full common-column-list">
          <li>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start">
              <Button
                className="border border-black-900 border-solid cursor-pointer font-abyssinicasil text-5xl sm:text-[38px] md:text-[44px] text-center w-[304px]"
                shape="square"
                color="amber_300"
                size="xs"
                variant="fill"
              >
                <Link to="/">tiffin mate</Link>
              </Button>
              <Text
                className="ml-60 md:ml-[0] ml-[370px] text-2xl md:text-[22px] text-amber-300 sm:text-xl"
                size="txtMontserratMedium24Amber300"
              >
                <Link to="/">Home</Link>
              </Text>
              <div className="md:ml-[0] ml-[523px] text-2xl md:text-[22px] text-white-A700 sm:text-xl">
                <Text size="txtMontserratMedium24WhiteA700">
                  <Link to="/terms&conditions">Terms & Conditions</Link>
                </Text>
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-row items-start justify-between md:ml-[0] ml-[544px] mt-[7px]">
              <Text
                className="common-pointer ml-[130px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtMontserratMedium24WhiteA700"
              >
                <Link to="/menu">Menu</Link>
              </Text>
              <div className="mr-[305px] text-2xl md:text-[22px] text-white-A700 sm:text-xl">
                <Text size="txtMontserratMedium24WhiteA700">
                  <Link to="/privacypolicy">Privacy Policy</Link>
                </Text>
              </div>
            </div>
          </li>
          <li>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[25px]">
              <div className="flex flex-col md:gap-10 gap-[86px] items-start justify-start w-[51%] sm:w-full">
                <Text
                  className="leading-[160.50%] text-white-A700 text-xl tracking-[3.10px] w-[45%] sm:w-full"
                  size="txtMontserratMedium20"
                >
                  Address: 5-180, Subhash Chandra Bose Street, Ags Cinemas
                  Opposite, Madurvoyal, Pincode - 600095.
                </Text>
                <div className="flex flex-row gap-5 items-center justify-between w-[45%] md:w-full">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 md:h-auto object-cover w-10"
                  >
                    <Img src="images/img_facebook1.png" alt="facebookOne" />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    className="h-10 md:h-auto object-cover w-10"
                  >
                    <Img src="images/img_linkedin1.png" alt="linkedinOne" />
                  </a>
                  <a
                    href="https://www.youtube.com/"
                    className="h-10 md:h-auto object-cover w-10"
                  >
                    <Img src="images/img_youtube1.png" alt="youtubeOne" />
                  </a>
                  <a
                    href="https://www.twitter.com/"
                    className="h-10 md:h-auto object-cover w-10"
                  >
                    <Img src="images/img_twitter1.png" alt="twitterOne" />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    className="h-10 md:h-auto object-cover w-10"
                  >
                    <Img src="images/img_instagram1.png" alt="instagramOne" />
                  </a>
                  <a
                    href="https://www.website.com/"
                    className="h-10 md:h-auto object-cover w-10"
                  >
                    <Img src="images/img_web1.png" alt="webOne" />
                  </a>
                </div>
              </div>
              <ul className="flex flex-col items-start justify-start sm:mt-0 mt-[21px] md:w-full common-column-list">
                <li>
                  <div className="mr-[100%] text-2xl md:text-[22px] text-white-A700 sm:text-xl">
                    <Text
                      className="common-pointer"
                      size="txtMontserratMedium24WhiteA700"
                    >
                      <Link to="/franchise">Franchise</Link>
                    </Text>
                  </div>
                </li>
                <li>
                  <div className="mr-[1000px] mt-[51px] text-2xl md:text-[22px] text-white-A700 sm:text-xl">
                    <Text
                      className="common-pointer"
                      size="txtMontserratMedium24WhiteA700"
                    >
                      <Link to="/faq">FAQ’s</Link>
                    </Text>
                  </div>
                </li>
                <li>
                  <div className="mt-12 text-2xl md:text-[22px] text-white-A700 sm:text-xl">
                    <Text
                      className="common-pointer"
                      size="txtMontserratMedium24WhiteA700"
                    >
                      <Link to="/contactus">Contact Us</Link>
                    </Text>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Line className="bg-gray-100 h-px mt-[30px] w-[100%]" />
          </li>
          <li>
            <div className="mt-[30px] text-white-A700 text-xl">
              <Text size="txtMontserratMedium20">
                © {currentYear} Tiffin Mate. All Rights Reserved.{" "}
              </Text>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
};

Footer.defaultProps = {};

export default Footer;
