import type { Meta, StoryObj } from '@storybook/react'
import { Cta } from './Cta'

const meta = {
    component: Cta,
} satisfies Meta<typeof Cta>

export default meta
type Story = StoryObj<typeof Cta>

export const Component: Story = {
    args: {
        url: '#',
        indent: 'primary',
        children: 'Primary',
    },
}
