import { useRouter } from "next/router"
import BookingHeader from "../../components/bookingHeader.components"
import Image from "next/image"
import {AiFillStar} from 'react-icons/ai'
import { BsStarHalf, BsStarFill } from "react-icons/bs"
import {CgFlagAlt} from 'react-icons/cg'



const HotelDetails = () => {

  const router = useRouter()

  if(router.isFallback) return <h1>Loading...</h1>

  return (
    <>
      <BookingHeader crumbs={['Hotel list', 'Hotel details']} />
      <section className="headline flex flex-col items-start gap-6">
        <div className="flex flex-col items-start gap-6">
          <h1 className="font-medium text-5xl">Swiss Alps and Places to Stay</h1>
          <div className="rating-location flex flex-row justify-between items-center gap-2">
            <div className="rating flex flex-row items-center gap-1">
              <AiFillStar color="#ffc542" /> <span>4.8 </span><span>(122 reviews)</span>
            </div>
            <div className="location flex flex-row items-center gap-1">
              <CgFlagAlt /> City, Country
            </div>
          </div>
        </div>
      </section>
      <div className="image-wrapper overflow-x-auto snap-x snap-mandatory">
        <div className="image flex gap-4 flex-nowrap">
          <div className="snap-always snap-center inline-block rounded-3xl">
            <div className="w-250 h-207">
              <Image 
                src="https://unsplash.it/300/200"
                width={300}
                height={200}
              />
            </div>
          </div>
          <div className="snap-always snap-center inline-block rounded-3xl">
            <div className="w-250 h-207">
              <Image 
                src="https://unsplash.it/300/200"
                width={300}
                height={200}
              />
            </div>
          </div>
          <div className="snap-always snap-center inline-block rounded-3xl">
            <div className="w-250 h-207">
              <Image 
                src="https://unsplash.it/300/200"
                width={300}
                height={200}
              />
            </div>
          </div>
          <div className="snap-always snap-center inline-block rounded-3xl">
            <div className="w-250 h-207">
              <Image 
                src="https://unsplash.it/300/200"
                width={300}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="tags-review flex flex-row justify-start items-center gap-9">
        <div className="tags flex flex-row justify-between items-center gap-3">
          {/* MAP TAGS */}
          <div className="flex flex-row justify-center items-center py-1 px-3 rounded-md bg-[#d5e1d6] text-[#38b245]">5.0</div>
          <div className="flex flex-row justify-center items-center py-1 px-3 rounded-md bg-[#e8decf] text-[#fd9704]">Perfect</div>
        </div>
        <div className="review flex flex-row justify-between items-center gap-2">
          {/* MAP STARS */}
          <BsStarFill color="#ffc542" />
          <BsStarFill color="#ffc542" />
          <BsStarFill color="#ffc542" />
          <BsStarFill color="#ffc542" />
          <BsStarHalf color="ffc542" />
        </div>
      </div>
      <div className="title-line flex flex-col items-start gap-8"></div>
      <div className="description flex flex-col items-start gap-5"></div>
      <div className="features-amenities flex flex-col justify-center items-start gap-16"></div>
    </>
  )
}

export default HotelDetails

