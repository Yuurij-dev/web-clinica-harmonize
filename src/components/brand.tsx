import Link from "next/link";

export function Brand({ light = false }: { light?: boolean }) {
  return <Link aria-label="Harmonize+, início" className="inline-flex shrink-0 items-center gap-2.5" href="/">
    <span className={`grid size-9 place-items-center rounded-[8px] text-sm font-black ${light ? "bg-white text-primary" : "bg-primary text-white"}`}>H+</span>
    <span className={`text-[17px] font-bold ${light ? "text-white" : "text-foreground"}`}>Harmonize<span className={light ? "text-white" : "text-primary"}>+</span></span>
  </Link>;
}
