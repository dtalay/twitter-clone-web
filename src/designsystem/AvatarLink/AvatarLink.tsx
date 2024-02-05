import React from "react";
import Link, { LinkProps } from "next/link";
import { Avatar, AvatarProps } from "../Avatar/Avatar";

type AvatarLinkProps = AvatarProps & LinkProps;

export const AvatarLink = ({ 
  imgSrc, alt, size, href 
}: AvatarLinkProps) => {
  return (
    <Link href={href}>
      <Avatar
        imgSrc={imgSrc}
        alt={alt}
        size={size}
      />
    </Link>
  );
};
