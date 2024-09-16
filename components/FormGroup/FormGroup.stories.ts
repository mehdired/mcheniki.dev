import type { Meta, StoryObj } from '@storybook/react'
import { FormGroup } from './FormGroup'

const meta = {
    component: FormGroup,
} satisfies Meta<typeof FormGroup>

export default meta
type Story = StoryObj<typeof FormGroup>

export const Default: Story = {}
