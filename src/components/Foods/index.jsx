import React from "react";
import { Img, Text } from "../";

const Foods = () => {
  return (
    <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[95%]">
      <div className="bg-white-A700 flex flex-1 flex-col gap-[22px] items-center justify-end p-3 w-full">
        <Img
          className="h-64 sm:h-auto mt-[3px] object-cover w-[98%] md:w-full"
          src="images/img_rectangle10894.png"
          alt="rectangle10894"
        />
        <Text
          className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl"
          size="txtMontserratRomanSemiBold24"
        >
          Masala Upma
        </Text>
      </div>
      <div className="bg-white-A700 flex flex-1 flex-col gap-5 items-center justify-end p-3.5 w-full">
        <Img
          className="h-64 sm:h-auto object-cover w-[99%] md:w-full"
          src="images/img_rectangle10854.png"
          alt="rectangle10854"
        />
        <Text
          className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl"
          size="txtMontserratRomanSemiBold24"
        >
          Kitchdi
        </Text>
      </div>
      <div className="bg-white-A700 flex flex-1 flex-col gap-[17px] items-center justify-start p-4 w-full">
        <Img
          className="h-64 sm:h-auto object-cover w-full"
          src="images/img_rectangle10899.png"
          alt="rectangle10899"
        />
        <div className="flex flex-col items-start justify-start w-auto sm:w-full">
          <Text
            className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl w-auto"
            size="txtMontserratRomanSemiBold24"
          >
            Poha
          </Text>
        </div>
      </div>
      <div className="bg-white-A700 flex flex-1 flex-col gap-[17px] items-center justify-end p-3.5 w-full">
        <Img
          className="h-[257px] sm:h-auto mt-0.5 object-cover w-[99%] md:w-full"
          src="images/img_rectangle10853.png"
          alt="rectangle10853"
        />
        <div className="flex flex-col items-start justify-start w-auto sm:w-full">
          <Text
            className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl w-auto"
            size="txtMontserratRomanSemiBold24"
          >
            Bisibele Bath
          </Text>
        </div>
      </div>
      <div className="bg-white-A700 flex flex-1 flex-col gap-[17px] items-center justify-end p-3.5 w-full">
        <Img
          className="h-[257px] sm:h-auto mt-0.5 object-cover w-[99%] md:w-full"
          src="images/img_rectangle10897.png"
          alt="rectangle10897"
        />
        <div className="flex flex-col items-start justify-start w-auto sm:w-full">
          <Text
            className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl w-auto"
            size="txtMontserratRomanSemiBold24"
          >
            Pongal
          </Text>
        </div>
      </div>
      <div className="bg-white-A700 flex flex-1 flex-col gap-[17px] items-center justify-end p-3.5 w-full">
        <Img
          className="h-[257px] sm:h-auto mt-0.5 object-cover w-[99%] md:w-full"
          src="images/img_rectangle10901.png"
          alt="rectangle10901"
        />
        <div className="flex flex-col items-start justify-start w-auto sm:w-full">
          <Text
            className="text-2xl md:text-[22px] text-blue_gray-900 text-center sm:text-xl w-auto"
            size="txtMontserratRomanSemiBold24"
          >
            Kesari Halwa
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Foods;
