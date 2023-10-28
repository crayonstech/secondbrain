import Image from "next/image";
import Link from "next/link";

export const Logo = (): JSX.Element => {
  return (
    <Link
      data-testid="app-logo"
      href={"https://brain.crayonstech.co"}
      className="flex items-center gap-4"
    >
      <Image
        className="rounded-full"
        src={"/logo.png"}
        alt="Crayonstech Logo"
        width={98}
        height={48}
      />
      {/* <h1 className="font-bold logo-heading">crayonstech</h1> */}
    </Link>
  );
};
