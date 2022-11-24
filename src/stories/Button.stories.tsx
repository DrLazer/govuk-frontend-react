import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../components/Button/Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Continue',
  }
};