
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-95 hover:shadow-md",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:translate-y-[-2px]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:translate-y-[-2px]",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:translate-y-[-2px]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:translate-y-[-2px]",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:translate-y-[-2px]",
        link: "text-primary underline-offset-4 hover:underline",
        vce: "bg-vce-red text-white hover:bg-vce-light-red hover:translate-y-[-2px]",
        vceOutline: "border-2 border-vce-blue text-vce-blue hover:bg-vce-blue hover:text-white hover:translate-y-[-2px]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
      animation: {
        none: "",
        pulse: "animate-pulse",
        bounce: "hover:animate-bounce",
        wiggle: "hover:animate-[wiggle_0.5s_ease-in-out]",
        fadeIn: "animate-fade-in",
        slideIn: "animate-slide-in-right",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "none",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  animation?: "none" | "pulse" | "bounce" | "wiggle" | "fadeIn" | "slideIn"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, animation, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const [isPressed, setIsPressed] = React.useState(false)
    
    const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
      setIsPressed(true)
      if (props.onMouseDown) {
        props.onMouseDown(e)
      }
    }
    
    const handleMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
      setIsPressed(false)
      if (props.onMouseUp) {
        props.onMouseUp(e)
      }
    }
    
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, animation, className }),
          isPressed ? "scale-90 shadow-inner bg-opacity-90" : ""
        )}
        ref={ref}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => setIsPressed(false)}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
