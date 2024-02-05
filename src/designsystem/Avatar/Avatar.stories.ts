import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from ".";

const meta = {
  title: "Avatar",
  component: Avatar,
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
  },
} satisfies Meta<typeof Avatar>;

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
