import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import Header from "components/Header";
import JoinUs from "components/Join Us";

const FranchiseeTwoPage = () => {
  const navigate = useNavigate();

  return (
    // <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
    //   <div className="flex flex-col items-center justify-start w-full">
    //     <Text
    //       className="mt-[47px] sm:text-4xl md:text-[42px] text-[46px] text-black-900 text-center"
    //       size="txtMontserratRomanSemiBold46"
    //     >
    //       Franchisee
    //     </Text>
    //     <Text
    //       className="mt-[53px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
    //       size="txtMontserratRomanMedium36"
    //     >
    //       Overview
    //     </Text>
    //     <div className="flex md:flex-col flex-row font-montserrat md:gap-5 items-start justify-end mt-7 md:px-5 w-[85%] md:w-full">
    //       <Text
    //         className="leading-[150.00%] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl tracking-[3.60px] w-[54%] sm:w-full"
    //         size="txtMontserratRomanRegular24"
    //       >
    //         Franchise opportunities in the robot cooking industry can be
    //         attractive to entrepreneurs looking to enter the food service sector
    //         with a proven and innovative concept. The success of the franchise
    //         model depends on the strength of the brand, the quality of the
    //         technology, and the ongoing support provided to franchisees.
    //       </Text>
    //       <Img
    //         className="h-[434px]"
    //         src="images/img_digitaltransformationbro.svg"
    //         alt="undrawperforma"
    //       />
    //     </div>
    //     <div className="bg-amber-300 flex flex-col font-montserrat gap-[55px] justify-center mt-[60px] p-14 md:px-10 sm:px-5 w-full">
    //       <Text
    //         className="ml-28 md:ml-[0] mr-[898px] mt-[26px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
    //         size="txtMontserratRomanMedium36"
    //       >
    //         Why Choose Us ?
    //       </Text>
    //       <div className="flex flex-col items-center justify-start max-w-[80%] mb-1 mx-auto w-full">
    //         <div className="flex flex-col items-start justify-start w-full">
    //           <div className="md:gap-10 gap-[245px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between w-[84%] md:w-full">
    //             <div className="bg-orange-50 flex flex-col h-[93px] md:h-auto items-start justify-start p-[17.86px] w-[100px]">
    //               <Img
    //                 className="h-[60px] w-[60px]"
    //                 src="images/img_lightbulb.svg"
    //                 alt="lightbulb"
    //               />
    //             </div>
    //             <div className="bg-orange-50 flex flex-col h-[93px] md:h-auto items-start justify-start p-4 w-[100px]">
    //               <Img
    //                 className="h-14 w-14"
    //                 src="images/img_user.svg"
    //                 alt="user"
    //               />
    //             </div>
    //             <div className="bg-orange-50 flex flex-col h-[93px] md:h-auto items-start justify-start p-4 w-[100px]">
    //               <Img
    //                 className="h-[60px] w-[60px]"
    //                 src="images/img_user_yellow_800.svg"
    //                 alt="user_One"
    //               />
    //             </div>
    //             <div className="bg-orange-50 flex flex-col h-[93px] md:h-auto items-center justify-center p-4 w-[100px]">
    //               <Img
    //                 className="h-[45px] w-[60px]"
    //                 src="images/img_megaphone.svg"
    //                 alt="megaphone"
    //               />
    //             </div>
    //           </div>
    //           <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between mt-[33px] w-full">
    //             <Text
    //               className="flex-1 leading-[32.00px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 w-full"
    //               size="txtMontserratRomanMedium32"
    //             >
    //               <>
    //                 Innovative
    //                 <br /> Concept
    //               </>
    //             </Text>
    //             <Text
    //               className="flex-1 leading-[32.00px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 w-full"
    //               size="txtMontserratRomanMedium32"
    //             >
    //               Supportive Network
    //             </Text>
    //             <Text
    //               className="flex-1 leading-[32.00px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 w-full"
    //               size="txtMontserratRomanMedium32"
    //             >
    //               Comprehensive Training
    //             </Text>
    //             <Text
    //               className="flex-1 leading-[32.00px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 w-full"
    //               size="txtMontserratRomanMedium32"
    //             >
    //               Marketing Expertise
    //             </Text>
    //           </div>
    //           <div className="gap-[21px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between mt-4 w-full">
    //             <Text
    //               className="flex-1 text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl tracking-[3.60px] w-full"
    //               size="txtMontserratRomanRegular24"
    //             >
    //               Lorem ipsum dolor sit amet. Sit tincidunt sagittis posuere id
    //               molestie facilisis non feugiat{" "}
    //             </Text>
    //             <Text
    //               className="flex-1 text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl tracking-[3.60px] w-full"
    //               size="txtMontserratRomanRegular24"
    //             >
    //               Lorem ipsum dolor sit amet. Sit tincidunt sagittis posuere id
    //               molestie facilisis non feugiat{" "}
    //             </Text>
    //             <Text
    //               className="flex-1 text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl tracking-[3.60px] w-full"
    //               size="txtMontserratRomanRegular24"
    //             >
    //               Lorem ipsum dolor sit amet. Sit tincidunt sagittis posuere id
    //               molestie facilisis non feugiat{" "}
    //             </Text>
    //             <Text
    //               className="flex-1 text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl tracking-[3.60px] w-full"
    //               size="txtMontserratRomanRegular24"
    //             >
    //               Lorem ipsum dolor sit amet. Sit tincidunt sagittis posuere id
    //               molestie facilisis non feugiat{" "}
    //             </Text>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <Text
    //       className="mt-[78px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
    //       size="txtMontserratRomanMedium36"
    //     >
    //       Business Model
    //     </Text>
    //     <div className="flex sm:flex-col flex-row font-montserrat gap-[49px] items-start justify-start max-w-[1104px] mt-7 mx-auto md:px-5 w-full">
    //       <Text
    //         className="sm:flex-1 leading-[150.00%] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl tracking-[3.60px] w-3/5 sm:w-full"
    //         size="txtMontserratRomanRegular24"
    //       >
    //         Franchise opportunities in the robot cooking industry can be
    //         attractive to entrepreneurs looking to enter the food service sector
    //         with a proven and innovative concept. The success of the franchise
    //         model depends on the strength of the brand, the quality of the
    //         technology, and the ongoing support provided to franchisees.
    //       </Text>
    //       <Img
    //         className="sm:flex-1 h-[369px] md:h-auto object-cover w-[37%] sm:w-full"
    //         src="images/img_image15.png"
    //         alt="imageFifteen"
    //       />
    //     </div>
    //     <div className="bg-amber-300 flex flex-col font-montserrat items-center justify-start mt-[69px] p-[54px] md:px-10 sm:px-5 w-full">
    //       <div className="flex flex-col gap-14 justify-start max-w-[90%] mb-1.5 mt-[18px] mx-auto w-full">
    //         <Text
    //           className="ml-28 md:ml-[0] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
    //           size="txtMontserratRomanMedium36"
    //         >
    //           Training and Support
    //         </Text>
    //         <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
    //           <div className="flex flex-1 flex-col gap-[34px] items-center justify-start w-full">
    //             <div className="bg-orange-50 flex flex-col h-[93px] md:h-auto items-start justify-start p-4 w-[92px]">
    //               <Img
    //                 className="h-[66px] w-[60px]"
    //                 src="images/img_lightbulb_yellow_800.svg"
    //                 alt="lightbulb"
    //               />
    //             </div>
    //             <div className="flex flex-col gap-[11px] items-center justify-start w-full">
    //               <Text
    //                 className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900 text-center tracking-[0.84px]"
    //                 size="txtMontserratRomanMedium28"
    //               >
    //                 Technical Training
    //               </Text>
    //               <Text
    //                 className="text-[22px] text-blue_gray-900 text-center sm:text-lg md:text-xl tracking-[3.30px] w-full"
    //                 size="txtMontserratRomanLight22"
    //               >
    //                 Staff are trained to operate and maintain robotic cooking
    //                 systems and related software while prioritizing safety.
    //               </Text>
    //             </div>
    //           </div>
    //           <div className="flex flex-1 flex-col items-center justify-start w-full">
    //             <div className="bg-orange-50 flex flex-col h-[93px] md:h-auto items-start justify-start p-[17.86px] w-[92px]">
    //               <Img
    //                 className="h-[60px] w-[60px]"
    //                 src="images/img_user_yellow_800.svg"
    //                 alt="user"
    //               />
    //             </div>
    //             <Text
    //               className="mt-11 sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900 text-center tracking-[0.84px]"
    //               size="txtMontserratRomanMedium28"
    //             >
    //               Culinary Training
    //             </Text>
    //             <Text
    //               className="mt-[11px] text-[22px] text-blue_gray-900 text-center sm:text-lg md:text-xl tracking-[3.30px] w-full"
    //               size="txtMontserratRomanLight22"
    //             >
    //               Kitchen staff learn menu planning, recipe adaptation for
    //               robots, and maintaining consistent quality.
    //             </Text>
    //           </div>
    //           <div className="flex flex-1 flex-col items-center justify-start w-full">
    //             <div className="bg-orange-50 flex flex-col h-[93px] md:h-auto items-start justify-start p-[17.86px] w-[92px]">
    //               <Img
    //                 className="h-[60px] w-[60px]"
    //                 src="images/img_volume.svg"
    //                 alt="volume"
    //               />
    //             </div>
    //             <Text
    //               className="mt-[42px] sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900 text-center tracking-[0.84px]"
    //               size="txtMontserratRomanMedium28"
    //             >
    //               Customer Service
    //             </Text>
    //             <Text
    //               className="mt-[13px] text-[22px] text-blue_gray-900 text-center sm:text-lg md:text-xl tracking-[3.30px] w-full"
    //               size="txtMontserratRomanLight22"
    //             >
    //               Training covers order management and customer interactions,
    //               ensuring efficient service and satisfaction.
    //             </Text>
    //           </div>
    //           <div className="flex flex-1 flex-col items-center justify-start w-full">
    //             <div className="bg-orange-50 flex flex-col h-[93px] md:h-auto items-start justify-start p-[17.86px] w-[92px]">
    //               <Img
    //                 className="h-[60px] w-[60px]"
    //                 src="images/img_search.svg"
    //                 alt="search"
    //               />
    //             </div>
    //             <Text
    //               className="mt-[34px] sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900 text-center tracking-[0.84px]"
    //               size="txtMontserratRomanMedium28"
    //             >
    //               Maintenance and Repairs
    //             </Text>
    //             <Text
    //               className="mt-[11px] text-[22px] text-blue_gray-900 text-center sm:text-lg md:text-xl tracking-[3.30px] w-full"
    //               size="txtMontserratRomanLight22"
    //             >
    //               Personnel are taught routine maintenance and troubleshooting
    //               to keep robots in optimal condition.
    //             </Text>
    //           </div>
    //           <div className="flex flex-1 flex-col items-center justify-start w-full">
    //             <div className="bg-orange-50 flex flex-col h-[93px] md:h-auto items-start justify-start p-[17.86px] w-[92px]">
    //               <Img
    //                 className="h-[60px] w-[60px]"
    //                 src="images/img_bookmark.svg"
    //                 alt="bookmark"
    //               />
    //             </div>
    //             <Text
    //               className="mt-11 sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900 text-center tracking-[0.84px]"
    //               size="txtMontserratRomanMedium28"
    //             >
    //               Hygiene and Sanitation
    //             </Text>
    //             <Text
    //               className="mt-[11px] text-[22px] text-blue_gray-900 text-center sm:text-lg md:text-xl tracking-[3.30px] w-full"
    //               size="txtMontserratRomanLight22"
    //             >
    //               Staff learn food safety and proper cleaning procedures for
    //               equipment and kitchen areas.
    //             </Text>
    //           </div>
    //           <div className="flex flex-1 flex-col items-center justify-start w-full">
    //             <div className="bg-orange-50 flex flex-col h-[93px] md:h-auto items-start justify-start p-[17.86px] w-[92px]">
    //               <Img
    //                 className="h-[60px] w-[60px]"
    //                 src="images/img_car.svg"
    //                 alt="car"
    //               />
    //             </div>
    //             <Text
    //               className="mt-11 sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900 text-center tracking-[0.84px]"
    //               size="txtMontserratRomanMedium28"
    //             >
    //               Operational Procedures
    //             </Text>
    //             <Text
    //               className="mt-[11px] text-[22px] text-blue_gray-900 text-center sm:text-lg md:text-xl tracking-[3.30px] w-full"
    //               size="txtMontserratRomanLight22"
    //             >
    //               Standardized processes for order flow and inventory management
    //               are developed.
    //             </Text>
    //           </div>
    //           <div className="flex flex-1 flex-col items-center justify-start w-full">
    //             <div className="bg-orange-50 flex flex-col h-[93px] md:h-auto items-start justify-start p-[17.86px] w-[92px]">
    //               <Img
    //                 className="h-[60px] w-14"
    //                 src="images/img_vector.svg"
    //                 alt="vector"
    //               />
    //             </div>
    //             <Text
    //               className="mt-[34px] sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900 text-center tracking-[0.84px]"
    //               size="txtMontserratRomanMedium28"
    //             >
    //               Continuous Improvement
    //             </Text>
    //             <Text
    //               className="mt-[11px] text-[22px] text-blue_gray-900 text-center sm:text-lg md:text-xl tracking-[3.30px] w-full"
    //               size="txtMontserratRomanLight22"
    //             >
    //               {" "}
    //               Feedback channels are established for staff, enabling
    //               performance enhancement and technology updates.
    //             </Text>
    //           </div>
    //           <div className="flex flex-1 flex-col items-center justify-start w-full">
    //             <div className="bg-orange-50 flex flex-col h-[93px] md:h-auto items-start justify-start p-[17.86px] w-[92px]">
    //               <Img
    //                 className="h-[60px] w-[60px]"
    //                 src="images/img_alarm.svg"
    //                 alt="alarm"
    //               />
    //             </div>
    //             <Text
    //               className="mt-[45px] sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900 text-center tracking-[0.84px]"
    //               size="txtMontserratRomanMedium28"
    //             >
    //               Emergency Response
    //             </Text>
    //             <Text
    //               className="mt-2.5 text-[22px] text-blue_gray-900 text-center sm:text-lg md:text-xl tracking-[3.30px] w-full"
    //               size="txtMontserratRomanLight22"
    //             >
    //               Protocols are in place for handling equipment emergencies
    //               safely and effectively.
    //             </Text>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <Text
    //       className="mt-[81px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
    //       size="txtMontserratRomanMedium36"
    //     >
    //       Application Process
    //     </Text>
    //     <div className="flex flex-col font-montserrat items-center justify-start max-w-[1130px] mt-14 mx-auto md:px-5 w-full">
    //       <div className="flex md:flex-col flex-row md:gap-[51px] items-center justify-between w-full">
    //         <div className="flex md:flex-1 flex-col items-center justify-start w-[28%] md:w-full">
    //           <div className="flex flex-row gap-[23px] items-center justify-between w-full">
    //             <div className="h-[1439px] relative w-[12%]">
    //               <Line className="absolute bg-black-900 h-[1439px] inset-[0] justify-center m-auto w-px" />
    //               <div className="absolute flex flex-col md:gap-10 gap-[245px] h-max inset-[0] items-center justify-center m-auto w-full">
    //                 <div className="flex flex-col items-center justify-start w-full">
    //                   <div className="bg-orange-50 flex flex-col h-[35px] items-center justify-end p-[11px] rotate-[-90deg] rounded-[17px] w-[35px]">
    //                     <div className="bg-amber-300_01 h-3 rounded-[50%] w-3"></div>
    //                   </div>
    //                   <div className="bg-orange-50 flex flex-col h-[35px] items-center justify-start mt-[241px] p-[11px] rotate-[-90deg] rounded-[17px] w-[35px]">
    //                     <div className="bg-amber-300_01 h-3 rounded-[50%] w-3"></div>
    //                   </div>
    //                   <div className="bg-orange-50 flex flex-col h-[35px] items-center justify-start mt-[242px] p-[11px] rotate-[-90deg] rounded-[17px] w-[35px]">
    //                     <div className="bg-amber-300_01 h-3 rounded-[50%] w-3"></div>
    //                   </div>
    //                   <div className="bg-orange-50 flex flex-col h-[35px] items-center justify-start mt-[232px] p-[11px] rotate-[-90deg] rounded-[17px] w-[35px]">
    //                     <div className="bg-amber-300_01 h-3 rounded-[50%] w-3"></div>
    //                   </div>
    //                 </div>
    //                 <div className="bg-amber-100 flex flex-col h-[35px] items-center justify-start p-[11px] rotate-[-90deg] rounded-[17px] w-[35px]">
    //                   <div className="bg-amber-300_01 h-3 rounded-[50%] w-3"></div>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="flex flex-col items-center justify-start w-[82%]">
    //               <div className="flex flex-col md:gap-10 gap-[152px] items-center justify-start w-[57%] md:w-full">
    //                 <div className="flex flex-col gap-[13px] items-center justify-start w-full">
    //                   <div className="bg-orange-50 flex flex-col h-[89px] md:h-auto items-center justify-center p-2 rounded-lg w-[92px]">
    //                     <Img
    //                       className="h-[84px] w-[84px]"
    //                       src="images/img_menu.svg"
    //                       alt="menu_One"
    //                     />
    //                   </div>
    //                   <Text
    //                     className="text-blue_gray-900 text-center text-lg"
    //                     size="txtMontserratMedium18Bluegray900"
    //                   >
    //                     Submit Enquiry
    //                   </Text>
    //                 </div>
    //                 <div className="bg-orange-50 flex flex-col h-[89px] md:h-auto items-center justify-center p-2 rounded-lg w-[92px]">
    //                   <Img
    //                     className="h-[76px] w-[76px]"
    //                     src="images/img_healthiconsgro.svg"
    //                     alt="healthiconsgro"
    //                   />
    //                 </div>
    //               </div>
    //               <Text
    //                 className="mt-2 text-blue_gray-900 text-center text-lg"
    //                 size="txtMontserratMedium18Bluegray900"
    //               >
    //                 Initial Discussions &Reviews
    //               </Text>
    //               <div className="bg-orange-50 flex flex-col h-[89px] md:h-auto items-center justify-center mt-[158px] p-2 rounded-lg w-[92px]">
    //                 <Img
    //                   className="h-[71px] w-[71px]"
    //                   src="images/img_iconoirnotes.svg"
    //                   alt="iconoirnotes"
    //                 />
    //               </div>
    //               <Text
    //                 className="mt-[15px] text-blue_gray-900 text-center text-lg"
    //                 size="txtMontserratMedium18Bluegray900"
    //               >
    //                 Franchise Agreement
    //               </Text>
    //               <div className="bg-orange-50 flex flex-col h-[89px] md:h-auto items-center justify-center mt-[141px] p-2 rounded-lg w-[92px]">
    //                 <Img
    //                   className="h-[67px] w-[68px]"
    //                   src="images/img_mdirobotindustrialoutline.svg"
    //                   alt="mdirobotindustr"
    //                 />
    //               </div>
    //               <Text
    //                 className="mt-[15px] text-blue_gray-900 text-center text-lg"
    //                 size="txtMontserratMedium18Bluegray900"
    //               >
    //                 Training and Setup
    //               </Text>
    //               <div className="bg-orange-50 flex flex-col h-[89px] md:h-auto items-center justify-center mt-[153px] p-2 rounded-lg w-[92px]">
    //                 <Img
    //                   className="h-[66px] w-[66px]"
    //                   src="images/img_carbonstore.svg"
    //                   alt="carbonstore"
    //                 />
    //               </div>
    //               <Text
    //                 className="mt-[15px] text-blue_gray-900 text-center text-lg"
    //                 size="txtMontserratMedium18Bluegray900"
    //               >
    //                 Grand Opening
    //               </Text>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="flex flex-col items-center justify-start">
    //           <Text
    //             className="leading-[28.00px] text-center text-gray-700 text-lg w-full"
    //             size="txtMontserratRegular18"
    //           >
    //             Fill out the form below to express your interest in a Roboto
    //             Cafe franchise opportunity.
    //           </Text>
    //           <Text
    //             className="leading-[28.00px] mt-[220px] text-center text-gray-700 text-lg w-full"
    //             size="txtMontserratRegular18"
    //           >
    //             <>
    //               We&#39;ll schedule an initial discussion to get to know each
    //               other better and answer any questions you may have
    //             </>
    //           </Text>
    //           <Text
    //             className="mt-60 text-center text-gray-700 text-lg"
    //             size="txtMontserratRegular18"
    //           >
    //             <>
    //               Upon approval, we&#39;ll provide you with a franchise
    //               agreement to sign
    //             </>
    //           </Text>
    //           <Text
    //             className="mt-[246px] text-center text-gray-700 text-lg"
    //             size="txtMontserratRegular18"
    //           >
    //             <>
    //               You&#39;ll receive comprehensive training and support as you
    //               set up your cafe
    //             </>
    //           </Text>
    //           <Text
    //             className="leading-[28.00px] mt-[239px] text-center text-gray-700 text-lg w-full"
    //             size="txtMontserratRegular18"
    //           >
    //             <>
    //               Congratulations! You&#39;re ready to open your doors to your
    //               community and start serving delicious breakfasts
    //             </>
    //           </Text>
    //         </div>
    //       </div>
    //     </div>
    //     <JoinUs />
    //   </div>
    // </div>
    <>franchise</>
  );
};

export default FranchiseeTwoPage;
