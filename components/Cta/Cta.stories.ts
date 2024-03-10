import type { Meta, StoryObj } from '@storybook/react';
import { Cta } from '@/components/Cta/Cta';

const meta: Meta<typeof Cta> = {
	component: Cta
};

export default meta;
type Story = StoryObj<typeof Cta>;

export const Component: Story = {
	args: {
		url: '#',
		indent: 'primary',
		children: 'Primary'
	}
};
