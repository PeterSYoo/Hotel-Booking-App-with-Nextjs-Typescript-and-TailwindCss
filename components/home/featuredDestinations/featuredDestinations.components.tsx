import { useQuery } from "@tanstack/react-query"
import axios from "axios";
import { request } from "../../../helpers/axios-util";
import Card from "./cardDetail";

const fetchFeaturedDestinations = () => {
  return axios.get('https://hotel-booking-app-tau.vercel.app/api/db/db')
  // return request({url: '/db'})
}

const placeholderAvatar = '/img/destinations/avatar.png'

export const FeaturedDestinations = () => {

  const {data, isInitialLoading} = useQuery(['featured-dest'], fetchFeaturedDestinations)
  if(isInitialLoading) return <h2>Loading...</h2>

  console.log("data", data?.data)
  // console.log(data?.data["featured-destinations"])

  return (
    <>
      {/* Featured Destinations */}
      <section className="max-w-375 mx-auto md:pl-[135px] md:mx-0 md:max-w-1170">
        <h1 className="text-center text-3xl px-9 pt-7 pb-3 font-bold leading-10 md:text-left md:px-0 md:text-5xl">
          Featured Destinations
        </h1>
        <p className="max-w-375 w-600 text-center px-14 leading-6 text-gray-600 pb-1 md:max-w-1440 md:text-left md:px-0 md:mb-[50px]">
          Popular destinations open to vistors from Indonesia
        </p>
      </section>

      {/* Desktop and Mobile*/}
      {/* Featured Destinations - Cards */}
      <section className="md:px-[135px] md:block">
        <div className="flex flex-col items-center w-full md:grid md:grid-cols-12 md:grid-rows-6 gap-[30px] md:h-[718px]">
          <div className=" md:row-start-1 md:row-span-6 md:col-start-1 md:col-span-9 w-full">
            <div className="grid grid-cols-1 gap-y-8 gap-x-14 w-full md:grid-cols-2 md:grid-rows-5 md:gap-[30px] md:h-[718px]">
              <div className="bg-gray-200 row-start-1 md:row-span-2 col-start-1 md:col-span-2 rounded-3xl h-[280px]">
                <Card 
                  rating={3.5}
                  location={`${data?.data["featured-destinations"][0].city}, ${data?.data["featured-destinations"][0].country}`}
                  titleSize="text-2xl"
                  activities={196}
                  img={data?.data["featured-destinations"][0].img}
                  avatar={placeholderAvatar}
                />
              </div>
              {data?.data["featured-destinations"].slice(1,3).map((dest: any) => (
                <div key={dest.city} className="bg-gray-200 md:row-start-3 md:row-span-3 rounded-3xl h-96">
                  <Card 
                    rating={3.5}
                    location={`${dest.city}, ${dest.country}`}
                    titleSize='text-2xl'
                    activities={196}
                    img={dest.img}
                    avatar={placeholderAvatar}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="md:row-start-1 md:row-span-6 md:col-start-10 md:col-span-4 w-full">
            <div className="flex flex-col gap-6 h-full w-full md:grid md:grid-cols-1 md:grid-rows-3 md:gap-[30px] md:h-[718px]">
              {data?.data["featured-destinations"].slice(3).map((dest: any) => (
                <div key={dest.city} className="bg-gray-200 rounded-3xl h-60">
                  <Card 
                    rating={3.5}
                    location={`${dest.city}, ${dest.country}`}
                    titleSize='text-2xl'
                    activities={196}
                    img={dest.img}
                    avatar={placeholderAvatar}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
