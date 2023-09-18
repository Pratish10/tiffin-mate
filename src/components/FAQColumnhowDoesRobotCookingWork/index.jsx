import React from "react";

import { Button, Img } from "components";

const FAQColumnhowDoesRobotCookingWork = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button
          className="cursor-pointer flex items-center justify-center min-w-[714px] md:min-w-full"
          rightIcon={
            <Img
              className="h-[25px] mb-px ml-[35px]"
              src="images/img_arrowdown.svg"
              alt="arrow_down"
            />
          }
          shape="square"
          color="white_A700"
          size="sm"
          variant="fill"
        >
          <div className="!text-black-900 font-montserrat text-left text-xl tracking-[0.80px]">
            {props?.howdoesrobotcookingworktext}
          </div>
        </Button>
        <Button
          className="cursor-pointer flex items-center justify-center min-w-[714px] md:min-w-full"
          rightIcon={
            <Img
              className="h-[25px] mb-px ml-[35px]"
              src="images/img_arrowdown.svg"
              alt="arrow_down"
            />
          }
          shape="square"
          color="white_A700"
          size="sm"
          variant="fill"
        >
          <div className="!text-black-900 font-montserrat text-left text-xl tracking-[0.80px]">
            {props?.whataretheadvantagestext}
          </div>
        </Button>
        <Button
          className="cursor-pointer flex items-center justify-center min-w-[714px] md:min-w-full"
          rightIcon={
            <Img
              className="h-[25px] mb-px ml-[35px]"
              src="images/img_arrowdown.svg"
              alt="arrow_down"
            />
          }
          shape="square"
          color="white_A700"
          size="sm"
          variant="fill"
        >
          <div className="!text-black-900 font-montserrat text-left text-xl tracking-[0.80px]">
            {props?.canicustomizeingredientstext}
          </div>
        </Button>
        <Button
          className="cursor-pointer flex items-center justify-center min-w-[714px] md:min-w-full"
          rightIcon={
            <Img
              className="h-[25px] mt-px ml-5"
              src="images/img_arrowdown.svg"
              alt="arrow_down"
            />
          }
          shape="square"
          color="white_A700"
          size="sm"
          variant="fill"
        >
          <div className="!text-black-900 font-montserrat text-left text-xl tracking-[0.80px]">
            {props?.arerobotcookedmealstext}
          </div>
        </Button>
        <Button
          className="cursor-pointer flex items-center justify-center min-w-[714px] md:min-w-full"
          rightIcon={
            <Img
              className="h-[25px] mb-px ml-[35px]"
              src="images/img_arrowdown.svg"
              alt="arrow_down"
            />
          }
          shape="square"
          color="white_A700"
          size="sm"
          variant="fill"
        >
          <div className="!text-black-900 font-montserrat text-left text-xl tracking-[0.80px]">
            {props?.whattypesofdishestext}
          </div>
        </Button>
        <Button
          className="cursor-pointer flex items-center justify-center min-w-[714px] md:min-w-full"
          rightIcon={
            <Img
              className="h-[25px] mt-px ml-[35px]"
              src="images/img_arrowdown.svg"
              alt="arrow_down"
            />
          }
          shape="square"
          color="white_A700"
          size="sm"
          variant="fill"
        >
          <div className="!text-black-900 font-montserrat text-left text-xl tracking-[0.80px]">
            {props?.aretherobotssafetext}
          </div>
        </Button>
        <Button
          className="cursor-pointer flex items-center justify-center min-w-[714px] md:min-w-full"
          rightIcon={
            <Img
              className="h-[25px] mb-px ml-[35px]"
              src="images/img_arrowdown.svg"
              alt="arrow_down"
            />
          }
          shape="square"
          color="white_A700"
          size="sm"
          variant="fill"
        >
          <div className="!text-black-900 font-montserrat text-left text-xl tracking-[0.80px]">
            {props?.howlongdoesittaketext}
          </div>
        </Button>
        <Button
          className="cursor-pointer flex items-center justify-center min-w-[714px] md:min-w-full"
          rightIcon={
            <Img
              className="h-[25px] mb-px ml-[35px]"
              src="images/img_arrowdown.svg"
              alt="arrow_down"
            />
          }
          shape="square"
          color="white_A700"
          size="sm"
          variant="fill"
        >
          <div className="!text-black-900 font-montserrat text-left text-xl tracking-[0.80px]">
            {props?.caniwatchtherobottext}
          </div>
        </Button>
      </div>
    </>
  );
};

FAQColumnhowDoesRobotCookingWork.defaultProps = {
  howdoesrobotcookingworktext: "How does robot cooking work?",
  whataretheadvantagestext: "What are the advantages of using a cooking robot?",
  canicustomizeingredientstext:
    "Can I customize ingredients with a cooking robot?",
  arerobotcookedmealstext:
    "Are robot-cooked meals as delicious as homemade meals?",
  whattypesofdishestext: "What types of dishes will be prepared by the robot?",
  aretherobotssafetext: "Are the robots safe to work around humans?",
  howlongdoesittaketext: "How long does it take for food preparation?",
  caniwatchtherobottext: "Can I watch the robot cook my food?",
};

export default FAQColumnhowDoesRobotCookingWork;
