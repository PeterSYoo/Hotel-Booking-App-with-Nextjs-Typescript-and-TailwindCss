import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className="max-w-1440 mx-auto flex justify-center w-full">
      {/* Hero Section */}
      <section className="bg-hero bg-cover bg-no-repeat bg-center w-1440 h-541 md:h-578"></section>
    </div>
  );
};

export default Home;
