import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-lg", square: "rounded-none" };
const variants = {
  outline: {
    amber_300_01: "border border-amber-300_01 border-solid text-amber-300_01",
    lime_900: "border border-lime-900 border-solid text-lime-900",
    lime_800: "border border-lime-800 border-solid text-lime-800",
  },
  fill: {
    blue_gray_900: "bg-blue_gray-900 text-white-A700",
    orange_50: "bg-orange-50",
    amber_300: "bg-amber-300 text-black-900",
    white_A700: "bg-white-A700",
  },
};
const sizes = { xs: "p-1.5", sm: "p-[11px]", md: "px-4 py-[17px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "amber_300_01",
    "lime_900",
    "lime_800",
    "blue_gray_900",
    "orange_50",
    "amber_300",
    "white_A700",
  ]),
};

export { Button };
