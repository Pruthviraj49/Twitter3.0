import React from "react";
import SidebarOptions from "../components/SidebarOptions";
import { useState } from "react";
import { RiHome7Line, RiHome7Fill, RiFileList2Fill } from "react-icons/ri";
import { BiHash } from "react-icons/bi";
import { FiBell, FiMoreHorizontal } from "react-icons/fi";
import { HiOutlineMail, HiMail } from "react-icons/hi";
import { FaRegListAlt, FaHashtag, FaBell } from "react-icons/fa";
import { CgMoreO } from "react-icons/cg";
import { VscTwitter } from "react-icons/vsc";
import {
  BsBookmarkFill,
  BsPerson,
  BsPersonFill,
  BsBookmark,
} from "react-icons/bs";

const style = {
  wrapper: `flex-[0.7] px-8 flex flex-col`,
  twitterIconContainer: `text-5xl m-4`,
  tweetButton: `bg-[#1d9bf0] hover:bg-[#1b8cd8] flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer`,
  navContainer: `flex-1`,
  profileButton: `flex items-center mb-6 cursor-pointer hover:bg-[#333c45] rounded-[100px] p-2`,
  profileLeft: `flex item-center justify-center mr-4`,
  profileImage: `height-12 w-12 rounded-full`,
  profileRight: `flex-1 flex`,
  details: `flex-1`,
  name: `text-lg`,
  handle: `text-[#8899a6]`,
  moreContainer: `flex items-center mr-2`,
};

function Sidebar(initialSelectedIcon = "Home") {
  const [isSelected, setSelected] = useState("Home");
  return (
    <div className={style.wrapper}>
      <div className={style.twitterIconContainer}>
        <VscTwitter className="text-[#1DA1F2]" />
      </div>
      <SidebarOptions
        Icon={isSelected === "Home" ? RiHome7Fill : RiHome7Line}
        text="Home"
        isActive={Boolean(isSelected === "Home")}
        setSelected={setSelected}
        redirect={"/"}
      />
      <SidebarOptions
        Icon={isSelected === "Explore" ? FaHashtag : BiHash}
        text="Explore"
        isActive={Boolean(isSelected === "Explore")}
        setSelected={setSelected}
      />
      <SidebarOptions
        Icon={isSelected === "Notifications" ? FaBell : FiBell}
        text="Notifications"
        isActive={Boolean(isSelected === "Notifications")}
        setSelected={setSelected}
      />
      <SidebarOptions
        Icon={isSelected === "Messages" ? HiMail : HiOutlineMail}
        text="Messages"
        isActive={Boolean(isSelected === "Messages")}
        setSelected={setSelected}
      />
      <SidebarOptions
        Icon={isSelected === "Bookmarks" ? BsBookmarkFill : BsBookmark}
        text="Bookmarks"
        isActive={Boolean(isSelected === "Bookmarks")}
        setSelected={setSelected}
      />
      <SidebarOptions
        Icon={isSelected === "Lists" ? RiFileList2Fill : FaRegListAlt}
        text="Lists"
        isActive={Boolean(isSelected === "Lists")}
        setSelected={setSelected}
      />
      <SidebarOptions
        Icon={isSelected === "Profile" ? BsPersonFill : BsPerson}
        text="Profile"
        isActive={Boolean(isSelected === "Profile")}
        setSelected={setSelected}
        redirect={"/profile"}
      />
      <SidebarOptions Icon={CgMoreO} setSelected={setSelected} text="More" />

      <div className={style.tweetButton}>Mint</div>
      <div className={style.profileButton}>
        <div className={style.profileLeft}></div>
        <div className={style.profileRight}>
          <div className={style.details}>
            <div className={style.name}>pruthvi_raj49</div>
            <div className={style.handle}>@0x22dh...4hsoal</div>
          </div>
        </div>
        <div className={style.moreContainer}>
          <FiMoreHorizontal />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
