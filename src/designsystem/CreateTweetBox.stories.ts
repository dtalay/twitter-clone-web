import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { CreateTweetBox } from './CreateTweetBox';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/CreateTweetBox',
  component: CreateTweetBox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: { onSubmit: fn(), onTextChange: fn() },
} satisfies Meta<typeof CreateTweetBox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    href: "https://twitter.com/X",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRn2mZXaaCzPEIMQ80x-LDNZ2JQ6j0Q_J_tw&usqp=CAU",
    alt: "avatar",
  },
};
