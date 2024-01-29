import React from "react";
import Link from "next/link";
import Image from "next/image";

interface AvatarLinkProps {
  imgSrc: string;
  alt: string;
  size?: "small" | "medium" | "large";
  href: string;
  onClick?: () => void;
}

export const AvatarLink = ({
  imgSrc,
  alt,
  size,
  href,
  ...props
}: AvatarLinkProps) => {
  return (
    <Link href={href}>
      <Image
        src={imgSrc}
        width={50}
        height={50}
        className={`${size} rounded-full`}
        alt={alt}
      />
    </Link>
  );
};
