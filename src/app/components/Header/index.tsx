"use client";
import React, { FC, useMemo } from "react";
import Link from "next/link";
import { Routes } from "@/app/routes";
import Image from "next/image";
// import { Icon } from "./assets/icon";
import TrendIcon from "./assets/trendsIcon.svg";
import SettingsIcon from "./assets/settingsIcon.svg";
import { Dropdown } from "@/app/ui/Dropdown";
import MetaMask from "./assets/metamask.svg";
import Circle from './assets/left_lead.svg';
import { usePathname } from 'next/navigation';

const Header: FC = () => {
  const pathname = usePathname();

  const isActiveNav = useMemo(() => {
    return Routes.find(nav => pathname.includes(nav.path))?.path || ''
  },[pathname])

  return (
    <header className="flex justify-between items-center px-6 py-5 bg-white h-20 w-full">
      <nav>
        <ul className="flex">
          {Routes.map((route) => {
            if (route?.title) {
              return (
                <li className="flex items-center">
                  <Link key={route.id} href={route.path}>
                    <div className={`font-manrope font-600 text-sm py-2 px-3 ${isActiveNav === route.path ? 'flex items-center justify-center bg-primary border-[1px] rounded-[12px] text-secondary': 'text-lowGrey'}`}>{route.title}</div>
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </nav>
      <div className="flex gap-2">
        <div className="rounded-[12px] bg-primary h-[40px] w-[40px] flex justify-center items-center">
          {/* <Icon name="trend" className="w-12 h-12"/> */}
          <Image src={TrendIcon} width={18} height={18} alt="trends" />
        </div>
        <div>
          <Dropdown options={[]} />
        </div>
        <div className="rounded-[20px] bg-primary h-[40px] flex gap-2 pl-[16px] pr-[2px] py-[2px flex items-center">
          <Image src={MetaMask} width={20} height={20} alt="meta mask" />
          <p className="manrope.className text-darkText">2.73 Eth</p>
          <div className="rounded-[20px] px-[12px] h-[36px] bg-white flex gap-2 items-center">
            <Image
              src={Circle}
              className="shrink-0"
              width={18}
              height={18}
              alt="circle"
            />
            <p className="manrope.className ">
              0x7e…4c3d
            </p>
          </div>
        </div>
        <div className="rounded-[50px] bg-primary h-[40px] w-[40px] flex justify-center items-center">
          <Image src={SettingsIcon} width={18} height={18} alt="settings" />
        </div>
      </div>
    </header>
  );
};

export default Header;
