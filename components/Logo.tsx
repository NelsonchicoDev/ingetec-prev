import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import logo from "@/images/logoIngeWhite.png";
import Image from "next/image";

interface Props {
  className?: string;
  title: string;
  subtitle: string;
}
const Logo = ({ className }: Props) => {
  return (
    <div className="text-2xl group">
      <Link href={"/"}>
        <h2
          className={cn(
            "font-semibold tracking-wide hover:text-hoverColor hoverEffect",
            className
          )}
        >
          {/* {title}{" "}
          <span className="text-lightSky group-hover:text-white hoverEffect">
            {subtitle}
          </span> */}
          <Image
            className="w-28"
            priority
            src={logo}
            alt="Ingetec-prev"
          />
        </h2>
      </Link>
    </div>
  );
};

export default Logo;
