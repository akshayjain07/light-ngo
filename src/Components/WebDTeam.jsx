// import {useEffect} from "react";
// import { Tilt } from "react-tilt";

// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { contributors } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";
// import bgImg from "../Assets/assets/herobg.png";
// import { linkedIn, instagram, twitter } from "../Assets/Icons";


// const ContributorsCard = ({ index, name, position, photo, linkedInLink, instagramLink, twitterLink }) => (
//     <motion.div
//       variants={fadeIn("right", "spring", index * 0.5, 0.75)}
//       // className='green-pink-gradient p-[1px] rounded-[20px] shadow-card'
//       className='p-[1px] rounded-[20px] shadow-card border border-white'
//     >
//     {/* <div className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'> */}
//     <div>
//       <div
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
//         // style={{ width: "300px", height: "300px" }}
//       >
//         <img
//           src={photo}
//           alt='contributor'
//           className='object-contain h-[200px]'
//         />

//         <h3 className='text-white text-[20px] font-bold text-center'>
//         <u>  {name} </u>
//         </h3>
//         <h3 className='text-green-300 text-[15px] font-bold text-center'>
//           {position}
//         </h3>
//         <h3 className='flex flex-row gap-8 text-white text-[15px] font-bold text-center mt-2'>
//           <div> <a href={linkedInLink} target="_blank"> <img src={linkedIn} alt="linkedIn" /> </a> </div>
//           <div> <a href={instagramLink} target="_blank"> <img src={instagram} alt="instagram" /> </a> </div>
//           <div> <a href={twitterLink} target="_blank"> <img src={twitter} alt="" /> </a> </div>
          
//         </h3>
//       </div>
//       </div>
//       {/* </div> */}
//       </motion.div>
// );


// const WebDTeam = () => {
//       useEffect(() => {
//         window.scrollTo(0, 0);
//       }, []);
//       return (
//     <>
//       <div class="w-full h-auto bg-fixed bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${bgImg})` }}>
//         <div className=" mx-10 my-20 lg:mx-40 lg:my-20">
//           <div>
//             <motion.div variants={textVariant()}>
//               <h2 className={styles.sectionHeadText} > <center>CONTRIBUTORS SPOTLIGHT</center></h2>
//             </motion.div>

//             <div className="px-4 lg:px-20">
//               <motion.p
//               variants={fadeIn("", "", 0.1, 1)}
//               className='mt-4 mx-auto text-secondary text-[17px] text-center'
//             > 
//                 "Spotlighting the exceptional individuals who contributed their
//                   creativity and expertise to make Team Shaurya's website a reality. Explore the stories behind their contributions."
//             </motion.p>

//             </div>

//             <div className='mt-20 flex flex-wrap gap-20 justify-center'>
//               {contributors.map((contributor, index) => (
//                 <ContributorsCard key={contributor.title} index={index} {...contributor} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }
// export default WebDTeam;



import { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { contributors } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import bgImg from "../assets";
import akshay from "./akshay.png"
import { linkedIn, instagram, twitter } from "../assets/Icons";

const ContributorsCard = ({ index, name, position, photo, linkedInLink, instagramLink, twitterLink }) => {
  const [hovered, setHovered] = useState(false);

   return (
    // <Tilt className='xs:w-[250px]'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='p-[1px] rounded-[20px] shadow-card border border-white'
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          {hovered ? (
            <img
              src={photo}
              alt='contributor'
              className='object-contain h-[200px]'
            />
          ) : (
            <img
              src={akshay}
              alt='contributor'
              className='object-contain h-[300px]'
            />
          )}
          {hovered && (
            <>
              <h3 className='text-white text-[20px] font-bold text-center'>
                <u> {name} </u>
              </h3>
              <h3 className='text-green-300 text-[15px] font-bold text-center'>
                {position}
              </h3>
              <h3 className='flex flex-row gap-8 text-white text-[15px] font-bold text-center mt-2'>
                <div> <a href={linkedInLink} target="_blank"> <img src={linkedIn} alt="linkedIn" /> </a> </div>
                <div> <a href={instagramLink} target="_blank"> <img src={instagram} alt="instagram" /> </a> </div>
                <div> <a href={twitterLink} target="_blank"> <img src={twitter} alt="" /> </a> </div>
              </h3>
            </>
          )}
        </div>
      </motion.div>
    // </Tilt>
  );
};

const WebDTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div class="w-full h-auto bg-fixed bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${bgImg})` }}>
        <div className=" mx-10 my-20 lg:mx-40 lg:my-20">
          <div>
            <motion.div variants={textVariant()}>
              <h2 className={styles.sectionHeadText} > <center>CONTRIBUTORS SPOTLIGHT</center></h2>
            </motion.div>
            <div className="px-4 lg:px-20">
              <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 mx-auto text-secondary text-[17px] text-center'
              >
                "Spotlighting the exceptional individuals who contributed their creativity and expertise to make Team Shaurya's website a reality. Explore the stories behind their contributions."
              </motion.p>
            </div>
            <div className='mt-20 flex flex-wrap gap-20 justify-center'>
              {contributors.map((contributor, index) => (
                <ContributorsCard key={contributor.title} index={index} {...contributor} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebDTeam;