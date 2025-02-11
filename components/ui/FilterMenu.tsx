import { FilterMenuProps } from "@/constant/type";
import { Checkbox, CheckboxGroup } from "@nextui-org/react";
import { twMerge } from "tailwind-merge";

export default function FilterMenu({
  title,
  content,
  className,
  onChange,
}: FilterMenuProps & { onChange: (values: string[]) => void }) {
  return (
    <div className="flex flex-col gap-2 bg-white/30">
      <div className="bg-white/10 shadow-sm shadow-black flex items-center justify-center ">
        <div className="text-white text-base lg:text-xl"> {title}</div>
      </div>
      <CheckboxGroup className={twMerge("text-white text-xs md:text-sm lg:text-base px-2 py-3", className)}
        onChange={onChange}    
    >
        {content.map((item) => (
          <Checkbox value={item.value} key={item.name}>
            {item.name}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </div>
  );
}
