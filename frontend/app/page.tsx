import Link from "next/link";

export default function Home() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(background.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hola!!</h1>
          <p>
            Welcome to{" "}
            <Link
              href={"/"}
              className="text-red-400 font-semibold text-lg underline underline-offset-2 italic"
              style={{ fontFamily: "'Brush Script MT', cursive" }}
            >
              Vibeo
            </Link>
            .
          </p>
          <p className="mb-5 text-sm">
            A simple video player with video time sync and more to come.
          </p>
          <Link href={"/room"} className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
