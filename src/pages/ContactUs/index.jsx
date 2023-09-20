import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text, TextArea } from "components";

const ContactUsOnePage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
      <div className="flex flex-col justify-start w-full">
        <Text
          className="md:ml-[0] ml-[281px] mt-9 md:text-3xl sm:text-[28px] text-[32px] text-black-900"
          size="txtMontserratRomanSemiBold32"
        >
          Contact Us
        </Text>
        <Text
          className="md:ml-[0] ml-[281px] mt-1 text-blue_gray-900 text-xl"
          size="txtMontserratRomanMedium20"
        >
          Lorem ipsum dolor sit ametipsum{" "}
        </Text>
        <Text
          className="md:ml-[0] ml-[282px] mt-[46px] text-blue_gray-900 text-xl"
          size="txtMontserratRomanMedium20"
        >
          First Name
        </Text>
        <Input
          name="rectangle10902"
          placeholder=""
          className="p-0 w-full"
          wrapClassName="flex h-10 md:ml-[0] ml-[281px] mt-[7px] w-[24%]"
        ></Input>
        <div className="flex flex-row font-montserrat sm:gap-10 items-center justify-between md:ml-[0] ml-[281px] mt-[18px] md:px-5 w-[43%] md:w-full">
          <Text
            className="text-blue_gray-900 text-xl"
            size="txtMontserratRomanMedium20"
          >
            Email Id
          </Text>
          <Text
            className="text-blue_gray-900 text-xl"
            size="txtMontserratRomanMedium20"
          >
            Mobile Number
          </Text>
        </div>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[281px] mt-[9px] md:px-5 w-[55%] md:w-full">
          <Input
            name="rectangle10904"
            placeholder=""
            className="p-0 w-full"
            wrapClassName="flex h-10 md:w-full"
          ></Input>
          <Input
            name="rectangle10905"
            placeholder=""
            className="p-0 w-full"
            wrapClassName="flex h-10 md:w-full"
          ></Input>
        </div>
        <Text
          className="md:ml-[0] ml-[281px] mt-[21px] text-blue_gray-900 text-xl"
          size="txtMontserratRomanMedium20"
        >
          Message
        </Text>
        <TextArea
          className="bg-transparent border border-black-900 border-solid md:ml-[0] ml-[281px] mt-[5px] rounded-md w-[55%] sm:w-full"
          name="rectangle10906"
          placeholder=""
        ></TextArea>
        {/* <div className="flex sm:flex-col flex-row gap-[9px] items-center justify-start md:ml-[0] ml-[281px] mt-[30px] md:px-5 w-[27%] md:w-full">
          <Img
            className="h-16 md:h-auto object-cover w-[83%] sm:w-full"
            src="images/img_rectangle10908.png"
            alt="rectangle10908"
          />
          <div className="bg-black-900_7f flex flex-col items-center justify-start p-3 rounded-md w-[16%] sm:w-full">
            <Img
              className="h-9 my-0.5 w-9"
              src="images/img_refresh.svg"
              alt="refresh"
            />
          </div>
        </div> */}
        {/* captcha here */}
        {/* <Input
          name="groupTwo"
          placeholder="Enter Captcha"
          className="font-medium font-montserrat leading-[normal] p-0 placeholder:text-blue_gray-400 text-left text-xl w-full"
          wrapClassName="md:ml-[0] ml-[281px] mt-5 w-[23%]"
          size="xs"
        ></Input> */}
        <Button
          className="cursor-pointer font-medium font-montserrat leading-[normal] md:ml-[0] ml-[282px] mr-[954px] mt-[42px] rounded-md text-2xl md:text-[22px] text-center sm:text-xl w-[204px]"
          shape="round"
          color="blue_gray_900"
          size="xs"
          variant="fill"
        >
          Send
        </Button>
        <br />
        <br />
      </div>
    </div>
  );
};

export default ContactUsOnePage;
