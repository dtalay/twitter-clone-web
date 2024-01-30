import React from "react";
import Image from "next/image";

interface AvatarButtonProps {
  imgSrc: string;
  alt: string;
  size?: "small" | "medium" | "large";
  onClick: () => void;
}

export const AvatarButton = ({
  imgSrc,
  alt,
  size,
  onClick,
}: AvatarButtonProps) => {
  return (
    <button onClick={onClick}>
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
