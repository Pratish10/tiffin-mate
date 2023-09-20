import React from "react";

import { Text } from "components";
import FAQColumnhowDoesRobotCookingWork from "components/FAQColumnhowDoesRobotCookingWork";

const FAQPage = () => {
  return (
    <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
      <Text
        className="mt-[52px] sm:text-4xl md:text-[42px] text-[46px] text-black-900 text-center"
        size="txtMontserratRomanSemiBold46"
      >
        Frequently asked Questions
      </Text>
      <FAQColumnhowDoesRobotCookingWork className="flex flex-col font-montserrat gap-[22px] items-center justify-start mt-14 md:px-5 w-1/2 md:w-full" />
      <Text
        className="mt-32 text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-[77%] sm:w-full"
        size="txtMontserratRomanRegular24"
      >
        Lorem ipsum dolor sit amet consectetur. Nascetur felis enim ac sem
        volutpat. Egestas nunc nibh pulvinar mollis volutpat morbi aliquam
        feugiat. Lacus id aliquam volutpat arcu. Pellentesque vestibulum ornare
        eu nulla faucibus. Eu bibendum magna in orci et.{" "}
      </Text>
    </div>
  );
};

export default FAQPage;
