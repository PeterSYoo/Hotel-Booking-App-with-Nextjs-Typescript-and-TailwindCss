import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { ExploreTheWorld } from '../components/home/explore-the-world/ExploreTheWorld.components';
import { FeaturedDestinations } from '../components/home/featured-destinations/FeaturedDestinations.components';
import { Hero } from '../components/home/Hero.components';
import { ProOffers } from '../components/home/ProOffers.components';
import { SearchABestPlace } from '../components/home/SearchABestPlace.components';
import { SearchPlace } from '../components/home/SearchPlace.components';
import { TopTour } from '../components/home/TopTour.components';
import { TrendingCities } from '../components/home/TrendingCities.components';

const Guest = () => {
  return (
    <>
      <div className="font-dmSans bg-sectionBg dark:bg-[#141416]">
        <Hero />
        <SearchABestPlace />
        <FeaturedDestinations />
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
        <SearchPlace isHome={true} />
        <SearchABestPlace />
        <FeaturedDestinations />
        <TopTour />
        <ExploreTheWorld />
        <TrendingCities />
        <ProOffers />
      </div>
    </>
  );
};

const Home: NextPage = ({ bestPlaces }: any) => {
  // console.log(bestPlaces.data, ": bestPlaces");

  const { data: session } = useSession();

  return <>{session ? User() : Guest()}</>;
};

export default Home;

export const getServerSideProps = async (context: any) => {
  const local = 'http://localhost:3000';
  const vercel = 'https://tripguide-mocha.vercel.app';

  const res = await fetch(`${vercel}/api/cards/best-places`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const bestPlaces = await res.json();

  return {
    props: { bestPlaces },
  };
};

// ignore this line
