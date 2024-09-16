import React from 'react'
import type { Preview } from '@storybook/react'
import { jetbrains, roundo } from './../app/fonts'
import '../app/globals.css'

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story) => {
            return React.createElement('div', {
                className: `${jetbrains.variable} ${roundo.className}`,
                children: React.createElement(Story),
            })
        },
    ],
}

export default preview
