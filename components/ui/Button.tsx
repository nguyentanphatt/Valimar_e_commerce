import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

//Define the same button props and the different
const classes = cva("bg-darkblue flex items-center justify-center rounded-2xl hover:shadow-[0_0_10px_5px_rgba(0,208,255,0.5)]", {
  variants: {
    size: {
      sm: "w-16 h-5 text-xs",
      md: "w-24 h-8 text-base",
      lg: "w-28 h-10 text-xl"
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
