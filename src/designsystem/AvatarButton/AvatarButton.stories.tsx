import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { AvatarButton } from "./AvatarButton";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "AvatarButton",
  component: AvatarButton,
  argTypes: {
    size: {
      control: {
        type: "inline-radio",
        labels: {
          small: "small",
          medium: "medium",
          large: "large",
        },
      },
      mapping: {
        small: "size-10",
        medium: "size-15",
        large: "size-20",
      },
    },
    onClick: { action: "clicked" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof AvatarButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRn2mZXaaCzPEIMQ80x-LDNZ2JQ6j0Q_J_tw&usqp=CAU",
    alt: "avatar",
    size: "small",
  },
};
