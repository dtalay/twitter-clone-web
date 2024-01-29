import React from "react";
import Image from "next/image";

interface AvatarProps {
  imgSrc: string;
  alt: string;
  size?: "small" | "medium" | "large";
}

export const Avatar = ({ imgSrc, alt, size, ...props }: AvatarProps) => {
  return (
    <Image
      src={imgSrc}
      width={50}
      height={50}
      className={`${size} rounded-full`}
      alt={alt}
    />
  );
};
