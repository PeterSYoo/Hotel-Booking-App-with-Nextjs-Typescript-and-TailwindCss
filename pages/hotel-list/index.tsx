import { useState, useEffect } from 'react';
import { unstable_getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useQuery } from "@tanstack/react-query"
import { authOptions } from '../api/auth/[...nextauth]';
import { request } from "../../helpers/axios-util"
import BookingHeader from "../../components/bookingHeader.components"
import { SearchPlace } from "../../components/home/searchPlace.components"
import HotelListCard from "../../components/hotelListCard.components"
import axios from "axios";
import Button from '../../components/button.components';

const fetchHotelData = () => {
  return request({url: `/db`}) // uncomment for production
  // return axios.get('http://localhost:3000/api/db/db') // Uncomment for development
}

const HotelList = () => {
  const [query, setQuery] = useState<any | null>(null)

  const { data: session }: any = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push('/');
    }
    setQuery(router.query.dest)
  }, [session, router, query]);

  const {data: places, isInitialLoading} = useQuery(['hotel-data'], fetchHotelData)

  if(session) {
    if(isInitialLoading) return <h2>Loading...</h2>

    const searchedDestination = query.replace(/ /g, '').toLowerCase()
    const checkDestination = (obj: {}, searchString: string) => {
      if(Object.keys(obj).find(el => el === searchString) !== undefined)  {
        return true
      } else {
        return false
      }
    }
  
    return (
      <>
        <BookingHeader crumbs={['Hotel-list']} />
        <SearchPlace isHome={false} searchQuery={query}/>
        <div className="hotel-list flex flex-col justify-center items-center p-3 gap-4 md:items-center">
          <h1 className='font-bold text-4xl capitalize text-slate-700'>{query}</h1>
          {/* CARD COMPOENT */}
          {checkDestination(places.data, searchedDestination) ? (
            places?.data[`${searchedDestination}`].map((place: any) => (
              <HotelListCard 
                imgPath={place.images[0]}
                headline={place.name}
                rating={place.ratings}
                amountOfRating={place.amountOfRating}
                city={place.city}
                country={place.country}
                bookingStart={place.bookingStart}
                bookingEnd={place.bookingEnd}
                amenities={place.amenities}
                price={place.price}
                hotelName={place.hotelName}
                key={place.hotelName}
              />
            ))

          ) : (
            <h2>Sorry, we did not find anything there. Please enter a different location.</h2>
          )}
        <div className="view-all-button my-4">
          <Button version='clear'>+ View All</Button>
        </div>
        </div>
      </>
    )
  }

}

export default HotelList

export const getServerSideProps = async (context: any) => {
  return {
    props: {
      session: await unstable_getServerSession(
        context.req,
        context.res,
        authOptions
      ),
    },
  };
};