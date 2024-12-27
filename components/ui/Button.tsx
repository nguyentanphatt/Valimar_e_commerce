import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

//Define the same button props and the different
const classes = cva("bg-darkblue flex items-center justify-center rounded-2xl", {
  variants: {
    size: {
      sm: "w-16 h-5 text-sm",
      md: "w-24 h-8 text-base",
      lg: "w-28 h-0 text-xl"
    },

  },
});

export default function Button(
  props: {
    size?: "sm" | "md" | "lg";
    text?: string;
  } & ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { size, className, text, ...otherProps } = props;
  return (
    <button
      className={classes({
        size,
        className,
      })}
      {...otherProps}
    >
      {text}
    </button>
  );
}
