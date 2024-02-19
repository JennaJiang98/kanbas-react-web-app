import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { BiUserCircle, BiBook, BiCalendar } from "react-icons/bi";
import { TfiDashboard } from "react-icons/tfi";
import { SlEnvolopeLetter, SlClock } from "react-icons/sl";
import { TbPresentationAnalytics } from "react-icons/tb";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import "./index.css";

interface LinkItem {
  id: number;
  name: string;
}

interface NavigationProps {
  // Define any props for your component here
}

const Navigation: FC<NavigationProps> = () => {
  const links: LinkItem[] = [
    { id: 1, name: "Account" },
    { id: 2, name: "Dashboard" },
    { id: 3, name: "Courses" },
    { id: 4, name: "Calendar" },
    { id: 5, name: "Inbox" },
    { id: 6, name: "History" },
    { id: 7, name: "Studio" },
    { id: 8, name: "Commons" },
    { id: 9, name: "Help" },
  ];

  const linkToIconMap: { [key: string]: JSX.Element } = {
    Account: <BiUserCircle className="wd-icon" />,
    Dashboard: <TfiDashboard className="wd-icon" />,
    Courses: <BiBook className="wd-icon" />,
    Calendar: <BiCalendar className="wd-icon" />,
    Inbox: <SlEnvolopeLetter className="wd-icon" />,
    History: <SlClock className="wd-icon" />,
    Studio: <TbPresentationAnalytics className="wd-icon" />,
    Commons: <IoArrowForwardCircleOutline className="wd-icon" />,
    Help: <AiOutlineQuestionCircle className="wd-icon" />,
  };

  const { pathname } = useLocation();

  return (
    <div className="wd-kanbas-navbar">
      <div className="list-group wd-kanbas-navigation" style={{ width: 150 }}>
        <Link
          key={0}
          to="/Kanbas/Dashboard"
          className="list-group-item d-flex flex-column neu-icon"
        >
          <img className="img-fluid" src={require("./neu.png")} alt="NU Logo" />
        </Link>
        {links.map((link) => (
          <Link
            key={link.id}
            to={`/Kanbas/${link.name}`}
            className={`list-group-item ${
              pathname === `/Kanbas/${link.name}` && "active"
            } d-flex flex-column`}
          >
            {linkToIconMap[link.name]}
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
