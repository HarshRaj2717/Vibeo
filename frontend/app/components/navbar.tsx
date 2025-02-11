import Link from "next/link";

export default function Navbar() {
  return (
    <div className="btm-nav bg-opacity-60">
      <Link href={"/"} className="text-red-400">
        <span
          className="font-semibold text-lg underline underline-offset-2 italic"
          style={{ fontFamily: "'Brush Script MT', cursive" }}
        >
          Vibeo
        </span>
      </Link>
    </div>
  );
}
