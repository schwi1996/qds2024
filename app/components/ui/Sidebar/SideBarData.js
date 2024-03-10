import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { IoIosAddCircle } from 'react-icons/io';
import { MdJoinFull } from 'react-icons/md';

const SidebarData = [
  {
    title: 'Home',
    path: '../../../domain/page.jsx',
    icon: <AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Create Room',
    path: '../../../create/page.jsx',
    icon: <IoIosAddCircle />,
    cName: 'nav-text',
  },
  {
    title: 'Join Room',
    path: '../../../join/page.jsx',
    icon: <MdJoinFull />,
    cName: 'nav-text',
  },
];

export default SidebarData;
