import React, { useState } from "react";
import { Img, Text, List, Button } from "../";

const JoinUs = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;

    alert(data);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <div className="flex flex-col h-[716px] md:h-auto items-end justify-start max-w-[1439px] md:px-10 sm:px-5 px-[131px] py-[49px] w-full">
      <div className="flex flex-col items-center justify-start max-w-[1178px] mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
          <div className="flex md:flex-1 flex-col items-start justify-start w-[53%] md:w-full">
            <Img
              className="h-[281px]"
              src="images/img_digitaltransformationbro.svg"
              alt="digitaltransfor"
            />
            <Text
              className="mt-[63px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900 font-bold"
              style={{ fontFamily: "Euclid Circular B" }}
            >
              We are for you
            </Text>
            <Text
              className="mt-[13px] sm:text-4xl md:text-[38px] text-[40px] text-lime-900"
              style={{ fontFamily: "Euclid Circular B", fontWeight: 600 }}
            >
              Let’s Build Together{" "}
            </Text>
            <Text
              className="leading-[34.00px] mt-1 text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-full"
              size="txtMontserratRegular24"
            >
              <>
                &quot;Want to have your very own breakfast place? Be a Tiffin
                Mate and share delicious breakfast dishes with your town.
                It&#39;s fun and yummy!&quot;
              </>
            </Text>
          </div>
          <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-10 w-[36%] md:w-full">
            <Text
              className="sm:text-[32px] md:text-[38px] text-[42px] text-gray-900 font-bold"
              style={{ fontFamily: "Euclid Circular B" }}
            >
              Come Join Us
            </Text>
            <List
              className="flex flex-col font-euclidcircularb gap-[45px] items-center mt-[17px] w-full"
              orientation="vertical"
            >
              <form>
                <div className="flex flex-row gap-[5.17px] items-start justify-start ml-1.5 md:ml-[0] w-[430px] mb-[30px]">
                  <input
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "15px",
                      border: "1px solid #7b7b7b",
                    }}
                    className={`bg-cover bg-no-repeat border border-blue_gray-500 border-solid flex flex-1 flex-col items-start justify-start p-[15px] rounded-[5px] w-full italic text-base text-gray-600_01 txtMontserratRegular20 w-auto`}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    onFocus={(e) => {
                      e.target.style.border = "1.5px solid black";
                    }}
                    onBlur={(e) => {
                      e.target.style.border = "1px solid #7b7b7b";
                    }}
                  />
                </div>

                <div className="flex flex-row gap-[5.17px] items-start justify-start ml-1.5 md:ml-[0] w-auto mb-[30px]">
                  <input
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "15px",
                      border: "1px solid #7b7b7b",
                    }}
                    className={`bg-cover bg-no-repeat border border-blue_gray-500 border-solid flex flex-1 flex-col items-start justify-start p-[15px] rounded-[5px] w-full italic text-base text-gray-600_01 txtMontserratRegular20 w-auto`}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email - ID"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    onFocus={(e) => {
                      e.target.style.border = "1.5px solid black";
                    }}
                    onBlur={(e) => {
                      e.target.style.border = "1px solid #7b7b7b";
                    }}
                  />
                </div>

                <div className="flex flex-row gap-[5.17px] items-start justify-start ml-1.5 md:ml-[0] w-auto mb-[30px]">
                  <textarea
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "15px",
                      border: "1px solid #7b7b7b",
                    }}
                    className={`bg-cover bg-no-repeat border border-blue_gray-500 border-solid flex flex-1 flex-col items-start justify-start p-[15px] rounded-[5px] w-full italic text-base text-gray-600_01 txtMontserratRegular20 w-auto`}
                    rows={5}
                    id="message"
                    name="message"
                    placeholder="Tell us few words about your business"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    onFocus={(e) => {
                      e.target.style.border = "1.5px solid black";
                    }}
                    onBlur={(e) => {
                      e.target.style.border = "1px solid #7b7b7b";
                    }}
                  />
                </div>
              </form>
            </List>
            <Button
              className="cursor-pointer font-montserrat font-semibold min-w-[201px] md:ml-[0] ml-[110px] mt-[30px] text-center text-lg"
              shape="square"
              size="md"
              variant="outline"
              // color="#9e7e0c"
              style={{
                backgroundColor: isHovered ? "#fed35c" : "",
                color: isHovered ? "#ffffff" : "#9e7e0c",
                border: "1px solid #9e7e0c",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleSubmit}
            >
              Send and connect
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
