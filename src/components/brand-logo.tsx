import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function BrandLogo({ placement }: { placement: "header" | "footer" }) {
  return (
    <Link href="/" className={`brand-logo brand-logo-${placement}`} aria-label={`${site.name} home`}>
      <Image src="/images/brand-footer.webp" alt="" width={76} height={76} unoptimized />
      {placement === "header" && <span>{site.name}</span>}
    </Link>
  );
}
