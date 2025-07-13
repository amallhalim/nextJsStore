// src/components/PrimaryBtn.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import PrimaryBtn from './PrimaryBtn'
import { Trash2, Send } from 'lucide-react'

const meta: Meta<typeof PrimaryBtn> = {
    title: 'Components/PrimaryBtn',
    component: PrimaryBtn,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
        onClick: { action: 'clicked' },
        icon: { control: false }, // no UI control, use JSX
    },
    parameters: {
        // 👇 Applies to all stories in this file
        a11y: { test: 'error' },
    },
}

export default meta
type Story = StoryObj<typeof PrimaryBtn>

export const Default: Story = {
    args: {
        label: 'Click Me',
    },
}

export const Variants: Story = {
    render: () => (
        <div className="flex gap-4">
            <PrimaryBtn label="Primary" variant="primary" />
            <PrimaryBtn label="Secondary" variant="secondary" />
            <PrimaryBtn label="Danger" variant="danger" />
        </div>
    ),
}

export const WithIcon: Story = {
    args: {
        label: 'Send',
        icon: <Send size={16} />,
        variant: 'primary',
    },
}

export const DeleteButton: Story = {
    args: {
        label: 'Delete',
        icon: <Trash2 size={16} />,
        variant: 'danger',
    },
}

export const Sizes: Story = {
    render: () => (
        <div className="flex gap-4">
            <PrimaryBtn label="Small" size="sm" />
            <PrimaryBtn label="Medium" size="md" />
            <PrimaryBtn label="Large" size="lg" />
        </div>
    ),
}

export const FullWidth: Story = {
    args: {
        label: 'Full Width',
        fullWidth: true,
    },
}

export const Disabled: Story = {
    args: {
        label: 'Disabled',
        disabled: true,
    },
}

export const Loading: Story = {
    args: {
        label: 'Loading',
        loading: true,
    },
}