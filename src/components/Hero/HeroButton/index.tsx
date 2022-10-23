import React, { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
}

export function HeroButton (props: Props) {
  return (
    <button className="hero__button">{props.text}</button>
  )
}