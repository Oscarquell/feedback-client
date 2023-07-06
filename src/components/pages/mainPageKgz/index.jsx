// import React, {useEffect, useState} from 'react';
// import CircularIndeterminate from "../../loader";
// import FirstSectionKg from "../../firstSection/indexKg";
// import FeedbackFormKg from "../../feedbackForm/feedbackKg";
// import TimerBlockKg from "../../timerBlock/timerKg";
// import FooterKg from "../../footer/indexKg";
// import SecondSectionKg from "../../secondSection/indexKg";
//
//
// const MainPageKgz = () => {
//
//     const [isLoading, setIsLoading] = useState(true)
//
//     useEffect(() => {
//         setTimeout(() => {
//             setIsLoading(false);
//         }, 3000);
//     }, []);
//
//
//     return (
//         <div>
//             {
//                 isLoading ?
//                     <CircularIndeterminate />
//                     :
//                     <div>
//                         <FirstSectionKg />
//                         <SecondSectionKg />
//                         <FeedbackFormKg />
//                         <TimerBlockKg />
//                         <FooterKg />
//                     </div>
//             }
//         </div>
//     );
// };
//
// export default MainPageKgz;