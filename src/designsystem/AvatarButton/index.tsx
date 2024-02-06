import React from "react";
import { Avatar, AvatarProps } from "../Avatar";

export type AvatarButtonProps = AvatarProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const AvatarButton = ({
  imgSrc,
  alt,
  size,
  onClick,
}: AvatarButtonProps) => {
  return (
    <button onClick={onClick}>
      <Avatar
        imgSrc={imgSrc}
        alt={alt}
        size={size}
      />
    </button>
  );
};
