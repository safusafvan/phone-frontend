
import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser, FaArrowCircleRight } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck, BsPhoneFill } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import './sidebar.css'
// import Landingpage from "../Pages/Landingpage";
import Mainpage from "../Pages/Mainpage";
import Footer from "../Pages/Footer";

const routes = [
  {
    path: "/home",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/admin ",
    name: "Admin",
    icon: <FaUser />,
  },


  {
    path: "/file-manager",
    name: "Product",
    icon: <FaArrowCircleRight />,
    subRoutes: [
      {
        path: "/phone",
        name: "Phone ",
        icon: <BsPhoneFill />,
      },
      {
        path: "/phoneview ",
        name: " Phonedetails ",
        icon: <BsPhoneFill />,
      },


    ],
  },
  {
    path: "/order",
    name: "Order",
    icon: <BsCartCheck />,
  },

  {
    path: "/logot",
    name: "LOG OUT",
    icon: <FiLogOut />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      // height:"100vh",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      
      transition: {
        duration: 0.5,
      },
    },
  };

  return (

    <div className="">
      <div className="main-container  ">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={"sidebar"}
        >
          <div className="top_section">
            {/* <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  DoSomeCoding
                </motion.h1>
              )}
            </AnimatePresence> */}

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>


          <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>

          
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                   
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <Mainpage/>
       
     </div>
  
    </div>

  );
};

export default SideBar;