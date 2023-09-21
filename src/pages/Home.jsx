import React, { useState } from "react";
import { Button, Img, Line, List, Text } from "../components";
import Card from "../components/Card";
import Foods from "components/Foods";
import JoinUs from "components/Join Us";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="bg-white-A700 flex flex-col font-abyssinicasil items-center justify-start mx-auto w-full">
      <div
        className="font-montserrat md:h-[884px] h-[904px] md:px-5 relative w-full"
        style={{ backgroundColor: "black" }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="md:h-[884px] h-[904px] m-auto object-cover w-full"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0.4,
          }}
        >
          <source src="/images/kitchen_robot.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute flex flex-col h-[100px] inset-[0] items-start justify-center mx-auto p-14 md:px-10 sm:px-5 w-full">
          <div className="flex flex-col gap-4 items-start justify-start mt-[31%] w-auto md:w-full ml-10">
            <Text
              className="max-w-[650px] md:max-w-full md:text-5xl text-6xl"
              style={{
                color: "#fed35c",
              }}
              size="txtMontserratMedium60"
            >
              Elevate Your Breakfast Experience
            </Text>
            <Text
              className="leading-[40.00px] max-w-[542px] md:max-w-full text-2xl md:text-[22px] text-gray-100 sm:text-xl"
              size="txtMontserratMedium24"
            >
              Discover Convenience, Flavour and Innovation in every Dish
            </Text>
            <Button
              className="cursor-pointer font-montserrat font-semibold min-w-[201px] md:ml-[0] mt-[30px] text-center text-lg"
              shape="square"
              size="md"
              variant="outline"
              style={{
                backgroundColor: isHovered ? "#fed35c" : "",
                color: isHovered ? "#333333" : "#fed35c",
                border: "1px solid #fed35c",
                width: "5px",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Explore Cafe
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-amber-300 flex flex-col font-montserrat gap-12 items-center justify-start max-w-[100%] mt-[-20px] pb-[50px] pt-[120px] w-full">
        <Text
          className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900 underline w-auto mr-[10px]"
          size="txtMontserratSemiBold40"
        >
          All About Tiffin Mate
        </Text>
        <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[1335px] mx-auto md:px-5 w-full">
          <div className="flex sm:flex-1 flex-col gap-[54px] items-start justify-start w-auto sm:w-full">
            <Card
              title="What we are"
              description='At Tiffin mate, we use amazing machines to make delicious
                    breakfast. It&#39;s like magic! Our breakfasts are made with
                    love and the best ingredients, so they&#39;re super yummy.
                    You order, we make, and you enjoy!"'
            />
            <Card
              title="Our Story"
              description="Tiffin Mate was born out of a passion for redefining
                breakfast. Our team combines culinary expertise with
                cutting-edge robotics to create a unique breakfast experience."
            />
          </div>
          <div className="flex sm:flex-1 flex-col items-start justify-start w-[430px] sm:w-full mr-[10px]">
            <div className="flex flex-col gap-[26px] items-center justify-start w-full">
              <div className="flex sm:flex-col flex-row gap-5 items-center justify-between w-full">
                <Img
                  className="sm:flex-1 h-[237px] md:h-auto object-cover w-[205px] sm:w-full"
                  src="images/img_rectangle30.png"
                  alt="rectangleThirty"
                />
                <Img
                  className="sm:flex-1 h-[237px] md:h-auto object-cover w-[205px] sm:w-full"
                  src="images/img_rectangle31.png"
                  alt="rectangleThirtyOne"
                />
              </div>
              <div className="flex sm:flex-col flex-row gap-5 items-center justify-between w-full">
                <Img
                  className="sm:flex-1 h-[237px] md:h-auto object-cover w-[205px] sm:w-full"
                  src="images/img_rectangle32.png"
                  alt="rectangleThirtyTwo"
                />
                <Img
                  className="sm:flex-1 h-[237px] md:h-auto object-cover w-[205px] sm:w-full"
                  src="images/img_rectangle33.png"
                  alt="rectangleThirtyThree"
                />
              </div>
            </div>
          </div>
          <div className="flex sm:flex-1 flex-col md:gap-10 gap-20 items-start justify-start w-auto sm:w-full">
            <Card
              title="Quality and Flavour"
              description="We&#39;re committed to quality. Our dishes are crafted with
                    love and the freshest ingredients to ensure every bite is
                    bursting with flavor."
            />
            <Card
              title="Innovation at your Service"
              description="We&#39;re committed to quality. Our dishes are crafted with
                    love and the freshest ingredients to ensure every bite is
                    bursting with flavor."
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col font-montserrat md:gap-10 gap-16 items-center justify-start pb-[50px] pt-[120px] w-auto md:w-full">
        <div className="flex flex-col gap-2 items-center justify-start md:px-5 w-auto md:w-full">
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-lime-900_01 underline w-auto"
            size="txtMontserratSemiBold40Lime90001"
          >
            How It Works
          </Text>
          <Text
            className="text-black-900_01 text-center text-xl w-auto"
            size="txtMontserratRegular20Black90001"
          >
            Ordering breakfast at Tiffin Mate is as easy as 1-2-3-4-5:
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-row flex-wrap items-center justify-between max-w-[1177px] mx-auto md:px-5 w-full">
              <Button
                className="flex h-[49px] items-center justify-center w-[49px]"
                shape="round"
                color="orange_50"
                size="xs"
                variant="fill"
              >
                <Img
                  className="h-[33px]"
                  src="images/img_qrcode.svg"
                  alt="qrcode"
                />
              </Button>
              <Button
                className="flex h-[49px] items-center justify-center w-[49px]"
                shape="round"
                color="orange_50"
                size="xs"
                variant="fill"
              >
                <Img src="images/img_mobile.svg" alt="mobile" />
              </Button>
              <Button
                className="flex h-[49px] items-center justify-center w-[49px]"
                shape="round"
                color="orange_50"
                size="sm"
                variant="fill"
              >
                <Img src="images/img_mail.svg" alt="mail" />
              </Button>
              <Button
                className="flex h-[49px] items-center justify-center w-[49px]"
                shape="round"
                color="orange_50"
                size="sm"
                variant="fill"
              >
                <Img src="images/img_cut.svg" alt="cut" />
              </Button>
              <Button
                className="flex h-[49px] items-center justify-center w-[49px]"
                shape="round"
                color="orange_50"
                size="sm"
                variant="fill"
              >
                <Img src="images/img_location.svg" alt="location" />
              </Button>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start max-w-[1298px] md:ml-[0] ml-[30px] md:px-5 w-full">
              <Text
                className="sm:flex-1 text-center text-gray-600 text-lg w-[11%] sm:w-full"
                size="txtMontserratMedium18"
              >
                Scan QR Code to Order
              </Text>
              <Text
                className="sm:flex-1 sm:ml-[0] ml-[142px] text-center text-gray-600 text-lg w-[11%] sm:w-full"
                size="txtMontserratMedium18"
              >
                Choose your Breakfast
              </Text>
              <Text
                className="sm:flex-1 sm:ml-[0] ml-[141px] text-center text-gray-600 text-lg w-[11%] sm:w-full"
                size="txtMontserratMedium18"
              >
                Make your Payment{" "}
              </Text>
              <Text
                className="sm:flex-1 sm:ml-[0] ml-[109px] text-center text-gray-600 text-lg w-[16%] sm:w-full"
                size="txtMontserratMedium18"
              >
                Robot Starts Preparing Breakfast
              </Text>
              <Text
                className="sm:flex-1 sm:ml-[0] ml-[76px] text-center text-gray-600 text-lg w-[16%] sm:w-full"
                size="txtMontserratMedium18"
              >
                Enjoy the Convenience
              </Text>
            </div>
            <div className="sm:h-[1170px] md:h-[120px] h-[35px] mt-3 md:px-5 relative w-[115.4%] md:w-full">
              <Line className="absolute bg-black-900 bottom-[46%] h-px inset-x-[0] max-w-[100%] w-full" />
              <List
                className="absolute sm:flex-col flex-row md:gap-10 gap-[247px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 inset-[0] justify-center m-auto w-[100px]"
                orientation="horizontal"
              >
                <div className="bg-orange-50 flex flex-col h-[35px] items-center justify-end ml-[-85px] sm:ml-[0] p-[11px] rounded-[17px] w-full">
                  <div className="bg-amber-300_01 h-3 rounded-[50%] w-3"></div>
                </div>
                <div className="bg-orange-50 flex flex-col h-[35px] items-center justify-end ml-[-45px] sm:ml-[0] p-[11px] rounded-[17px] w-full">
                  <div className="bg-amber-300_01 h-3 rounded-[50%] w-3"></div>
                </div>
                <div className="bg-orange-50 flex flex-col h-[35px] items-center justify-end ml-[-10px] sm:ml-[0] p-[11px] rounded-[17px] w-full">
                  <div className="bg-amber-300_01 h-3 rounded-[50%] w-3"></div>
                </div>
                <div className="bg-orange-50 flex flex-col h-[35px] items-center justify-end ml-5 sm:ml-[0] p-[11px] rounded-[17px] w-full">
                  <div className="bg-amber-300_01 h-3 rounded-[50%] w-3"></div>
                </div>
                <div className="bg-amber-100 flex flex-col h-[35px] items-center justify-end sm:ml-[0] ml-[60px] p-[11px] rounded-[17px] w-full">
                  <div className="bg-amber-300_01 h-3 rounded-[50%] w-3"></div>
                </div>
              </List>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1328px] mt-[45px] mx-auto md:px-5 w-full">
              <div className="h-[392px] relative w-[16%] md:w-full">
                <Img
                  className="h-[392px] m-auto object-cover w-full"
                  src="images/img_image3.png"
                  alt="imageThree"
                />
                <Img
                  className="absolute border-solid h-[375px] inset-[0] justify-center m-auto object-cover rounded-[10px] w-[93%]"
                  src="images/img_image9.png"
                  alt="imageNine"
                />
              </div>
              <div className="h-[392px] relative w-[16%] md:w-full">
                <Img
                  className="h-[392px] m-auto object-cover w-full"
                  src="images/img_image3.png"
                  alt="imageFour"
                />
                <Img
                  className="absolute border-solid h-[375px] inset-[0] justify-center m-auto object-cover rounded-[10px] w-[93%]"
                  src="images/img_image8.png"
                  alt="imageEight"
                />
              </div>
              <div className="h-[392px] relative w-[16%] md:w-full">
                <Img
                  className="h-[392px] m-auto object-cover w-full"
                  src="images/img_image3.png"
                  alt="imageFive"
                />
                <Img
                  className="absolute h-[375px] inset-[0] justify-center m-auto object-cover rounded-[10px] w-[93%]"
                  src="images/img_image9_355x186.png"
                  alt="imageNine_One"
                />
              </div>
              <div className="h-[392px] relative w-[16%] md:w-full">
                <Img
                  className="h-[392px] m-auto object-cover w-full"
                  src="images/img_image3.png"
                  alt="imageSix"
                />
                <Img
                  className="absolute h-[375px] inset-[0] justify-center m-auto object-cover rounded-[10px] w-[93%]"
                  src="images/img_image10.png"
                  alt="imageTen"
                />
              </div>
              <div className="h-[392px] relative w-[16%] md:w-full">
                <Img
                  className="h-[392px] m-auto object-cover w-full"
                  src="images/img_image3.png"
                  alt="imageSeven"
                />
                <Img
                  className="absolute h-[375px] inset-[0] justify-center m-auto object-cover rounded-[10px] w-[93%]"
                  src="images/img_image11.png"
                  alt="imageEleven"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-amber-300 flex flex-col font-montserrat items-center justify-start p-[94px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col gap-[41px] items-center justify-start max-w-[1252px] mb-8 mt-[47px] mx-auto w-full">
          <div className="flex flex-col gap-2 items-center justify-start w-auto md:w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 underline w-auto"
              size="txtMontserratSemiBold40Black900"
            >
              What Your Tiffin Mate Cooks
            </Text>
            <Text
              className="leading-[32.00px] max-w-[654px] md:max-w-full text-blue_gray-900 text-center text-xl"
              size="txtMontserratRegular20"
            >
              <>
                &quot;Discover Our Robot&#39;s Culinary Creations: Breakfasts
                Brought to Life&quot;
              </>
            </Text>
          </div>
          <Foods />
        </div>
      </div>
      <div className="bg-white-A700 flex flex-col font-montserrat h-[509px] md:h-auto items-center justify-start max-w-[1439px] pb-[50px] pt-[120px] w-full">
        <div className="flex flex-col gap-4 items-center justify-start max-w-[879px] mx-auto md:px-5 w-full">
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-colors w-auto"
            size="txtMontserratSemiBold40OrangeA700"
          >
            <span className="text-lime-900 font-montserrat text-left underline font-semibold">
              Tiffin Mate’s{" "}
            </span>
            <span className="text-black-900 font-montserrat text-left underline font-semibold">
              Franchise Opportunities
            </span>
          </Text>
          <Text
            className="leading-[32.00px] max-w-[879px] md:max-w-full text-blue_gray-900 text-center text-xl"
            size="txtMontserratRegular20"
          >
            A path with future Entrepreneurship. Are you ready to turn your
            dreams into reality? At Tiffin Mate, we offer an exciting
            opportunity for individuals who share our passion for delicious
            breakfast and innovation. Become a part of the Tiffin Mate family
            and embark on your journey to entrepreneurship!
          </Text>
          <Button
            className="cursor-pointer font-montserrat font-semibold min-w-[201px] md:ml-[0] mt-[30px] text-center text-lg"
            shape="square"
            size="md"
            variant="outline"
            // color="#9e7e0c"
            style={{
              backgroundColor: isHovered ? "#fed35c" : "",
              color: isHovered ? "#333333" : "#9e7e0c",
              border: "1px solid #9e7e0c",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Book Your Franchise
          </Button>
        </div>
      </div>
      <JoinUs />
    </div>
  );
};

export default Home;
