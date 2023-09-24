import React from 'react'
import { IconProps } from './types'

export default function SubtractIcon({ size = 42, color = '#2f3676' }: IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
            <path d="M4.667 0A4.668 4.668 0 0 0 0 4.667v32.666A4.668 4.668 0 0 0 4.667 42h32.666A4.668 4.668 0 0 0 42 37.333V4.667A4.668 4.668 0 0 0 37.333 0H4.667zm28 23.333H9.333v-4.666h23.334v4.666z" fill={color}/>
        </svg>
    )
}
