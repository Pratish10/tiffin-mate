import React from "react";

const sizeClasses = {
  txtMontserratSemiBold40Black900: "font-montserrat font-semibold",
  txtMontserratMedium20: "font-medium font-montserrat",
  txtMontserratMedium24: "font-medium font-montserrat",
  txtMontserratRegular20: "font-montserrat font-normal",
  txtMontserratRegular20Black90001: "font-montserrat font-normal",
  txtMontserratRegular18: "font-montserrat font-normal",
  txtMontserratRomanMedium36: "font-medium font-montserrat",
  txtMontserratRomanSemiBold32: "font-montserrat font-semibold",
  txtEuclidCircularBMedium40: "font-euclidcircularb font-medium",
  txtEuclidCircularBMedium42: "font-euclidcircularb font-medium",
  txtMontserratMedium60: "font-medium font-montserrat",
  txtMontserratRomanMedium32: "font-medium font-montserrat",
  txtMontserratRomanLight22: "font-light font-montserrat",
  txtMontserratMedium24WhiteA700: "font-medium font-montserrat",
  txtMontserratMedium18: "font-medium font-montserrat",
  txtMontserratSemiBold28: "font-montserrat font-semibold",
  txtMontserratMedium24Amber300: "font-medium font-montserrat",
  txtMontserratRomanRegular20: "font-montserrat font-normal",
  txtMontserratRomanRegular24: "font-montserrat font-normal",
  txtMontserratSemiBold40Lime90001: "font-montserrat font-semibold",
  txtEuclidCircularBItalic16: "font-euclidcircularb font-normal italic",
  txtMontserratSemiBold20: "font-montserrat font-semibold",
  txtMontserratRomanMedium28: "font-medium font-montserrat",
  txtMontserratSemiBold40: "font-montserrat font-semibold",
  txtMontserratRomanSemiBold24: "font-montserrat font-semibold",
  txtMontserratRomanSemiBold46: "font-montserrat font-semibold",
  txtEuclidCircularBMedium32: "font-euclidcircularb font-medium",
  txtMontserratRegular24: "font-montserrat font-normal",
  txtMontserratRomanSemiBold20: "font-montserrat font-semibold",
  txtMontserratMedium18Bluegray900: "font-medium font-montserrat",
  txtMontserratRomanMedium20: "font-medium font-montserrat",
  txtMontserratSemiBold40OrangeA700: "font-montserrat font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
