import React from 'react'
import { IconProps } from './types'

export default function AddIcon({ size = 42, color = '#2f3676' }: IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
            <path d="M4.667 42h32.666A4.668 4.668 0 0 0 42 37.333V4.667A4.668 4.668 0 0 0 37.333 0H4.667A4.668 4.668 0 0 0 0 4.667v32.666A4.668 4.668 0 0 0 4.667 42zm4.666-23.333h9.334V9.333h4.666v9.334h9.334v4.666h-9.334v9.334h-4.666v-9.334H9.333v-4.666z" fill={color} />
        </svg>
    )
}
