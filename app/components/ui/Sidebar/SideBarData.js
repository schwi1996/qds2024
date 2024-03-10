import React from "react";
import { AiFillHome } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
import { MdJoinFull } from "react-icons/md";
import "../../../(site)/create/page";

const SidebarData = [
  {
    title: "Home",
    path: "../../../page",
    icon: <AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Create Room",
    path: "../../../(site)/create/page",
    icon: <IoIosAddCircle />,
    cName: "nav-text",
  },
  {
    title: "Join Room",
    path: "../../../(site)/join/page",
    icon: <MdJoinFull />,
    cName: "nav-text",
  },
];

export default SidebarData;
