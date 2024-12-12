import {
  Facebook,
  Instagram,
  Linkedin,
  PhoneCallIcon,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const socialData = [
  {
    title: "Youtube",
    icon: <Youtube />,
    href: "https://www.youtube.com",
  },
  {
    title: "Instagram",
    icon: <Instagram />,
    href: "https://www.youtube.com",
  },
  {
    title: "Linkedin",
    icon: <Linkedin />,
    href: "https://www.youtube.com",
  },
  {
    title: "Facebook",
    icon: <Facebook />,
    href: "https://www.youtube.com",
  },
  {
    title: "Whatssap",
    icon: <PhoneCallIcon />,
    href: "https://wa.me/56931744299",
  },
];

const SocialLinks = () => {
  return (
    <TooltipProvider>
      <div className="flex items-center gap-3">
        {socialData?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <div className="text-lightSky/80 border border-lightSky/30 p-2.5 rounded-full hover:bg-lightSky/10 hover:border-lightSky hoverEffect">
                <Link
                  href={item?.href}
                  target="_blank"
                >
                  <span>{item?.icon}</span>
                </Link>
              </div>
            </TooltipTrigger>
            <TooltipContent className="bg-hoverColor text-black font-semibold">
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialLinks;
