import React from "react";
import { Text } from "../";

// this is a card for all about tiffin mate in home page

const Card = (props) => {
  return (
    <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
      <Text
        className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900 w-auto"
        size="txtMontserratSemiBold28"
      >
        {props.title}
      </Text>
      <Text
        className="leading-[32.00px] max-w-[429px] md:max-w-full text-blue_gray-900 text-xl"
        size="txtMontserratRegular20"
      >
        <>{props.description}</>
      </Text>
    </div>
  );
};

export default Card;
