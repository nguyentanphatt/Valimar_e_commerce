import { twMerge } from "tailwind-merge";

export default function SearchBar({ className }: { className?: string }) {
  return (
    <div
      className={twMerge(
        "border-2 border-white hover:border-darkblue rounded-full",
        className
      )}
    >
      <input
        type="text"
        className="bg-dark w-full rounded-full outline-none text-white px-5"
        placeholder="Search..."
      />
    </div>
  );
}
