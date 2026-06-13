import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva("button", {
  variants: {
    variant: {
      primary: "button-primary",
      outline: "button-outline",
      ghost: "button-ghost",
    },
    size: {
      default: "button-default",
      sm: "button-sm",
      icon: "button-icon",
    },
  },
  defaultVariants: { variant: "primary", size: "default" },
});

export function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
