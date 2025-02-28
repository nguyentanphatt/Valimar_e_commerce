export const slug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[™'",:]/g, "")
      .split(/\s+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("_");
  };