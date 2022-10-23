import type { NextPage } from "next"
import { useQuery } from "@tanstack/react-query"
import { request } from "../../helpers/axios-util"
import Image from 'next/image'
import axios from "axios"

type PlaceProps = {
  country: string,
  img: string
}

// const fetchTravelData = () => {
//   return request({url: '/best-place'}) // Change per endpoint
// }

const fetchTravelData = () => {
  return axios.get('http://localhost:3000/api/db/db')
}
const FetchTest: NextPage = () => {

  const {data: places, isInitialLoading} = useQuery(['travel-data'], fetchTravelData) // use alias for data destructure
  
  console.log("data", places?.data)

  if(isInitialLoading) return <h2>Loading...</h2>

  return (
    <div className="w-full flex flex-col justify-center items-center gap-6">
      <h1>Data Fetch Test</h1>
      {
        places?.data["best-place"].map((place: PlaceProps) => (
          <div key={place.country} className='relative'>
            <h2 className="absolute left-1/2 bottom-3 -translate-x-1/2 text-white font-bold text-4xl z-[2]">{place.country}</h2>
            <div className="overlay absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black z-[1]"></div>
            <Image 
              src={place.img}
              alt={place.country}
              width={500}
              height={500}
            />
          </div>
        ))
      }
    </div>
  )
}
export default FetchTest
