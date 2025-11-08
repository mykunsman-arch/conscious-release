import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { useRipple } from "@/hooks/use-ripple";
import { useMagnetic } from "@/hooks/use-magnetic";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.97] hover:scale-[1.02] hover:shadow-lg relative overflow-hidden cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-primary/20",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-destructive/20",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-accent/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-secondary/20",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  noEffects?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, noEffects = false, onClick, ...props }, ref) => {
    const { createRipple } = useRipple();
    const magneticRef = useMagnetic({ strength: 0.2, tolerance: 100 });
    
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!noEffects) {
        createRipple(e);
      }
      onClick?.(e);
    };

    const Comp = asChild ? Slot : "button";
    
    if (asChild || noEffects) {
      return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} onClick={onClick} {...props} />;
    }
    
    return (
      <Comp 
        className={cn(buttonVariants({ variant, size, className }))} 
        ref={(node) => {
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
          if (magneticRef.current !== node) {
            (magneticRef as any).current = node;
          }
        }}
        onClick={handleClick}
        {...props} 
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
