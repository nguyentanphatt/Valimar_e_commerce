"use client";
import { Suspense } from "react";
import SearchPages from "@/components/common/search-page";

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <SearchPages />
    </Suspense>
  );
}
