"use client";
import { useFeatureIsOn } from "@growthbook/growthbook-react";
import { usePathname } from "next/navigation";

import { DISCORD_URL, GITHUB_URL, TWITTER_URL } from "@/lib/config/CONSTANTS";
import { useSupabase } from "@/lib/context/SupabaseProvider";

const Footer = (): JSX.Element => {
  const { session } = useSupabase();

  const path = usePathname();
  const isNewHomePageActivated = useFeatureIsOn("new-homepage-activated");
  const isNewHomePage = path === "/" && isNewHomePageActivated;
  const isContactPage = path === "/contact";

  if (session?.user !== undefined || isNewHomePage || isContactPage) {
    return <></>;
  }

  return (
    <footer className="bg-white dark:bg-black border-t dark:border-white/10 mt-auto py-4">
      <div className="max-w-screen-xl mx-auto flex justify-center items-center gap-4">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Crayonstech GitHub"
        >
          <img
            className="h-8 w-auto dark:invert"
            src="/github.svg"
            alt="GitHub"
          />
        </a>
        <a
          href={TWITTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Crayonstech Twitter"
        >
          <img className="h-8 w-auto" src="/twitter.svg" alt="Twitter" />
        </a>
        <a
          href={DISCORD_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Crayonstech Discord"
        >
          <img className="h-8 w-auto" src="/discord.svg" alt="Discord" />
        </a>
      </div>
      <div className="max-w-screen-xl mx-auto flex justify-center items-center gap-4 mt-4">
        <a
          href="https://crayonstech.co/index.php/terms-and-conditions"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Crayonstech GitHub"
          className="custom-link"
        >
          Terms and Conditions
        </a>
        |
        <a
          href="https://crayonstech.co/index.php/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Crayonstech Twitter"
          className="custom-link"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
