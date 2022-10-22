import type { NextPage } from "next";
import { useSession } from "next-auth/react";

import { SearchABestPlace } from "../components/home/searchABestPlace.components";
import { Hero } from "../components/home/hero.components";
import { TopTour } from "../components/home/topTour.components";
import { ExploreTheWorld } from "../components/home/exploreTheWorld.components";
import { TrendingCities } from "../components/home/trendingCities.components";
import { ProOffers } from "../components/home/proOffers.components";
import { SearchPlace } from "../components/home/searchPlace.components";

const Guest = () => {
  return (
    <>
      <div className="font-dmSans bg-sectionBg dark:bg-[#141416]">
        <Hero />
        <SearchABestPlace />
        <TopTour />
        <ExploreTheWorld />
        <TrendingCities />
        <ProOffers />
      </div>
    </>
  );
};

// Authorize User
const User = () => {
  return (
    <>
      <div className="font-dmSans bg-sectionBg dark:bg-[#141416]">
        <Hero />
        <SearchPlace />
        <SearchABestPlace />
        <TopTour />
        <ExploreTheWorld />
        <TrendingCities />
        <ProOffers />
      </div>
    </>
  );
};

const Home: NextPage = () => {
  const { data: session } = useSession();

  return <>{session ? User() : Guest()}</>;
};

export default Home;
