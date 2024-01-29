import React from "react";
import Image from "next/image";

interface AvatarButtonProps {
  imgSrc: string;
  alt: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

export const AvatarButton = ({
  imgSrc,
  alt,
  size,
  ...props
}: AvatarButtonProps) => {
  return (
    <button onClick={props.onClick}>
      <Image
        src={imgSrc}
        width={50}
        height={50}
        className={`${size} rounded-full`}
        alt={alt}
      />
    </button>
  );
};
