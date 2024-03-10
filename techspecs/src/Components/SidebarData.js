import React from "react";
import { MdDashboard } from "react-icons/md";
import { LuGitCompare } from "react-icons/lu";
import { RiTimeLine } from "react-icons/ri";

export const SideBarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <MdDashboard />,
    cName: 'nav-text',
  },  
  {
    title: 'Compare',
    path: '/Compare',
    icon: <LuGitCompare />,
    cName: 'nav-text',
  },
  {
    title: 'Timeline',
    path: '/Timeline',
    icon: <RiTimeLine />,
    cName: 'nav-text',
  },   
]

export const SideBarDataCollapse = [
  {
    path: '/',
    icon: <MdDashboard />,
    cName: 'nav-icon',
  },  
  {
    path: '/Compare',
    icon: <LuGitCompare />,
    cName: 'nav-icon',
  },
  {
    path: '/Timeline',
    icon: <RiTimeLine />,
    cName: 'nav-icon',
  },   
]