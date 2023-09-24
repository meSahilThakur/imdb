"use client";
import { BsMoonStarsFill } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DarkMode = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mount, setMount] = useState(false);
  const currenttheme = theme === "system" ? systemTheme : theme;

  useEffect(()=>{
    setMount(true)
  },[]);

  return (
    <>
      {mount && currenttheme === "dark" ? (
        <MdLightMode onClick={() => setTheme("light")} className=" cursor-pointer"/>
      ) : (
        <BsMoonStarsFill onClick={() => setTheme("dark")} className="cursor-pointer" />
      )}
    </>
  );
};

export default DarkMode;
