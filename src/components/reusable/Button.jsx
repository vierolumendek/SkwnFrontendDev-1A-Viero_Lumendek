import React from 'react'

export default function Button({ children, icon, variant = "default", size = "default", className, ...props }) {
  const buttonVariants = {
    default:
      "bg-primary text-secondary shadow hover:bg-primary/90",
    destructive:
      "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
    outline:
      "border border-input bg-background shadow-sm hover:bg-primary hover:text-white",
    secondary:
      "bg-secondary text-primary shadow-sm hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  }

  const buttonSize = {
    default: "h-9 px-4 py-2",
    sm: "h-8 px-3 text-xs",
    lg: "h-10 px-8",
    xl: "h-15 px-16 text-lg",
    icon: "h-9 w-9",
  }

  return (
    <button
      className={` inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0
        ${buttonVariants[variant] || buttonVariants.default}
        ${buttonSize[size] || buttonSize.default}
        ${className}
      `}
      {...props}
    >
      { icon && <span className="text-lg">{icon}</span> }
      { children }
    </button>
  )
}
