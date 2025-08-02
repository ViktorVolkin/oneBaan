"use client";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("./Header").then((mod) => mod.default), {
	ssr: false,
});

export default Header;
