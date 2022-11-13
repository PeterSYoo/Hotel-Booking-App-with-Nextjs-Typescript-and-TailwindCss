import Image from 'next/image';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]';
import { AiFillStar } from 'react-icons/ai';
import { BsStarHalf, BsStarFill } from 'react-icons/bs';
import { CgFlagAlt } from 'react-icons/cg';
import { HandleIcons } from '../../lib/iconHandler';
import { BookingHeader } from '../../components/BookingHeader.components';
import { Button } from '../../components/Button.components';

const fetchHotelData = () => {
  // return request({ url: `/db` }); // uncomment for production
  return axios.get('http://localhost:3000/api/db/db') // Uncomment for development
};


const tagsForDev = [
  '5.0',
  'Perfect',
  'Hotels',
  'Bulding',
  'Top Value',
  'Something',
];

const amenities = ['Kitchen', 'Free washer', 'Wifi', 'Hair dryer', 'Courtyard view'];

const HotelDetails = () => {

  const { data: session }: any = useSession();

  const {data: places, isInitialLoading} = useQuery(
    ['hotel-details'], 
    fetchHotelData
  );

  return (
    <>
      <BookingHeader crumbs={['Hotel list', 'Hotel details']} />
      <section className="headline flex flex-col items-start gap-6 px-4 md:px-0">
        <div className="flex flex-col items-start gap-6">
          <h1 className="font-medium text-5xl">
            Swiss Alps and Places to Stay
          </h1>
          <div className="rating-location flex flex-row justify-between items-center gap-2">
            <div className="rating flex flex-row items-center gap-1">
              <AiFillStar color="#ffc542" /> <span>4.8 </span>
              <span>(122 reviews)</span>
            </div>
            <div className="location flex flex-row items-center gap-1">
              <CgFlagAlt /> City, Country
            </div>
          </div>
        </div>
      </section>
      <div className="image-wrapper overflow-x-auto snap-x snap-mandatory rounded-xl md:my-8 md:w-full">
        <div className="image flex gap-4 flex-nowrap md:grid grid-cols-12 ">

          <div className="snap-always snap-center inline-block rounded-3xl md:row-start-1 md:row-end-4 md:col-start-1 md:col-span-7 md:w-full md:h-full">
            <div className="w-250 h-207 md:w-full md:h-full relative">
              <Image
                src="https://unsplash.it/300/200"
                alt="Placeholder Image"
                layout='fill'
                objectFit='cover'
              />
            </div>
          </div>
          <div className="snap-always snap-center inline-block rounded-3xl md:row-start-1 md:col-start-8 md:col-end-13 md:w-full md:h-full">
            <div className="w-250 h-207 relative md:w-full">
              <Image
                src="https://unsplash.it/300/200"
                alt="Placeholder Image"
                layout='fill'
                objectFit='cover'
              />
            </div>
          </div>
          <div className="snap-always snap-center inline-block rounded-3xl md:col-start-8 md:col-end-13 md:w-full md:h-full">
            <div className="w-250 h-207 relative  md:w-full">
              <Image
                src="https://unsplash.it/300/200"
                alt="Placeholder Image"
                layout='fill'
                objectFit='cover'
              />
            </div>
          </div>
          <div className="snap-always snap-center inline-block rounded-3xl md:col-start-8 md:col-end-13 md:w-full md:h-full">
            <div className="w-250 h-207 relative  md:w-full">
              <Image
                src="https://unsplash.it/300/200"
                alt="Placeholder Image"
                layout='fill'
                objectFit='cover'
              />
            </div>
          </div>
        </div>
      </div>
      <div className="tags-review flex flex-col justify-start items-start gap-2 px-4 md:px-0 md:flex-row-reverse md:justify-end md:items-center md:mb-8">
        <div className="review flex flex-row justify-between items-center gap-2">
          {/* MAP STARS */}
          <BsStarFill color="#ffc542" />
          <BsStarFill color="#ffc542" />
          <BsStarFill color="#ffc542" />
          <BsStarFill color="#ffc542" />
          <BsStarHalf color="ffc542" />
        </div>
        <div className="tags flex flex-row flex-wrap items-center gap-3">
          {/* MAP TAGS */}
          {tagsForDev.map((tag, i) => (
            <div key={i}>
              <div className="flex flex-row justify-center items-center py-1 px-3 rounded-md bg-[#d5e1d6] text-[#38b245]">
                {tag}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="title-line flex flex-col items-start gap-8 px-4 md:px-0">
        <div className="title flex flex-col items-start gap-5">
          <h2 className="font-medium text-4xl text-[#252525] dark:text-white">
            Exlcusive room in house
          </h2>
          <h3 className="font-medium text-2xl text-[#84878b] dark:text-[#f7f7f7]">
            Zuich, Switzerland
          </h3>
        </div>
        <div className="line w-full h-[1px] bg-[#d5e1d6] mb-7"></div>
      </div>
      <div className="description-content flex flex-col items-start gap-2 px-4 md:px-0 md:mb-8">
        <div className="row flex flex-row items-center gap-10">
          <div className="font-medium text-base text-[#145ce6]">
            Description
          </div>
        </div>
        <div className="divider flex flex-row items-center w-full">
          <div className="bg-[#145ce6] h-[2px] w-1/4"></div>
          <div className="bg-[#f4f5f6] h-[2px] w-3/4"></div>
        </div>
        <p>
          Arabian Park Hotel is a great choice for travellers looking for a 3
          star hotel in Dubai. It is located in Bur Dubai. This Hotel stands out
          as one of the highly recommended, Al Wasl Indoor Stadium (1.2 kms),
          Dubai Mall (5.4 kms), Jumeirah Beach Park (9.6 kms) and Jumeirah
          Public Beach (15.8 kms).
        </p>
      </div>
      <div className="features-amenities flex flex-col justify-center items-start gap-16">
        <div className="amenities flex flex-col justify-center items-start gap-4 w-full px-4 md:px-0">
          <h2 className='font-bold text-2xl'>Amenities</h2>
          <div className="amenities-list flex flex-col flex-wrap items-start gap-4 md:grid md:grid-cols-2 md:gap-x-36">
            {amenities.map((amenity, i) => (
              <div className="flex flex-row gap-2 items-center" key={i}>
                {HandleIcons(amenity)}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="button-group flex flex-col items-center gap-5 my-4">
        <div className="price">
          <span className="font-bold text-2xl">$320 </span>
          <span>Per night</span>
        </div>
        <div className="button">
          <Button rounded="30px">Book Now</Button>
        </div>
      </div>
      <div className="line w-full h-[1px] bg-[#d5e1d6] mb-7"></div>
      <div className="reviews flex flex-col items-start gap 10">
        <div className="add-review flex flex-col items-start gap-5 w-full px-4 md:px-0">
          <div className="add-review-header flex flex-row items-center justify-between w-full">
            <h1 className='font-bold text-4xl'>Add your review</h1>
            <div className="rating">
              {/* FIGURE OUT A REAL RATING SYSTEM */}
              <div className="review flex flex-row justify-between items-center gap-2">
                {/* MAP STARS */}
                <BsStarFill color="#ffc542" />
                <BsStarFill color="#ffc542" />
                <BsStarFill color="#ffc542" />
                <BsStarFill color="#ffc542" />
                <BsStarHalf color="ffc542" />
              </div>
            </div>
          </div>
          <form className='flex flex-col justify-center items-center gap-4 w-full' action="">
            <div className="form-group flex flex-col justify-center items-start w-full">
              <label htmlFor="review" hidden>Your Review</label>
              <textarea className='w-full p-3 md:p-7' name="review" id="review" rows={10} placeholder='Write your detailed review here...'></textarea>
            </div>
            <div className="button-group flex flex-row justify-end items-center gap-5">
              <Button version='clear'>Cancel</Button>
              <Button rounded='30px'>Add Review</Button>
            </div>
          </form>
        </div>
        <div className="latest-reviews flex flex-col justify-center items-center gap-10 md:w-full">
            <div className="reviews flex flex-col items-start gap-8 md:w-full">
              <h2 className='font-semibold text-2xl'>Latest Reviews</h2>
              <div className="review-list flex flex-col items-start gap-7">

                <div className="review flex flex-col justify-center items-start p-4 bg-white dark:bg-[#404040] rounded-2xl md:p-7">
                  <div className="content flex flex-col justify-center items-start md:flex-row md:justify-between md:gap-52">
                    <div className="profile md:flex md:flex-row md:items-start md:gap-4 ">
                      <div className="avatar flex flex-row justify-start items-center">
                        <Image 
                          src={'/img/avatar-icon.png'}
                          width={28}
                          height={28}
                        />
                      </div>
                      <div className="name-group flex flex-col justify-center items-start gap-1">
                        <h3 className='font-medium text-base'>Patrick W. Fenster</h3>
                        <span className='font-normal text-sm text-[#84878b]'>Kuwait</span>
                        <span className='font-normal text-xs text-[#b1b5c4]'>45 Followers, 68 Reviews</span>
                      </div>
                    </div>
                    <div className="review flex flex-col justify-center items-start gap-4 md:flex-wrap">
                      <div className="rating-group flex flex-row justify-center items-center gap-5">
                        <div className="review flex flex-row justify-between items-center gap-2">
                          {/* MAP STARS */}
                          <BsStarFill color="#ffc542" />
                          <BsStarFill color="#ffc542" />
                          <BsStarFill color="#ffc542" />
                          <BsStarFill color="#ffc542" />
                          <BsStarHalf color="ffc542" />
                        </div>
                        <div className="review-date">
                          5/25/2022
                        </div>
                      </div>
                      <p>We had the most spectacular view. Unfortunately it was very hot in the room from 2-8:30 pm due to no air conditioning and no shade.</p>
                    </div>
                  </div>
                </div>
                <div className="review flex flex-col justify-center items-start p-4 bg-white dark:bg-[#404040] rounded-2xl md:p-7">
                  <div className="content flex flex-col justify-center items-start md:flex-row md:justify-between md:gap-52">
                    <div className="profile md:flex md:flex-row md:items-start md:gap-4">
                      <div className="avatar flex flex-row justify-start items-center">
                        <Image 
                          src={'/img/avatar-icon.png'}
                          width={28}
                          height={28}
                        />
                      </div>
                      <div className="name-group flex flex-col justify-center items-start gap-1">
                        <h3 className='font-medium text-base'>Patrick W. Fenster</h3>
                        <span className='font-normal text-sm text-[#84878b]'>Kuwait</span>
                        <span className='font-normal text-xs text-[#b1b5c4]'>45 Followers, 68 Reviews</span>
                      </div>
                    </div>
                    <div className="review flex flex-col justify-center items-start gap-4 md:flex-wrap">
                      <div className="rating-group flex flex-row justify-center items-center gap-5">
                        <div className="review flex flex-row justify-between items-center gap-2">
                          {/* MAP STARS */}
                          <BsStarFill color="#ffc542" />
                          <BsStarFill color="#ffc542" />
                          <BsStarFill color="#ffc542" />
                          <BsStarFill color="#ffc542" />
                          <BsStarHalf color="ffc542" />
                        </div>
                        <div className="review-date">
                          5/25/2022
                        </div>
                      </div>
                      <p>We had the most spectacular view. Unfortunately it was very hot in the room from 2-8:30 pm due to no air conditioning and no shade.</p>
                    </div>
                  </div>
                </div>
                <div className="review flex flex-col justify-center items-start p-4 bg-white dark:bg-[#404040] rounded-2xl md:p-7">
                  <div className="content flex flex-col justify-center items-start md:flex-row md:justify-between md:gap-52">
                    <div className="profile md:flex md:flex-row md:items-start md:gap-4">
                      <div className="avatar flex flex-row justify-start items-center">
                        <Image 
                          src={'/img/avatar-icon.png'}
                          width={28}
                          height={28}
                        />
                      </div>
                      <div className="name-group flex flex-col justify-center items-start gap-1">
                        <h3 className='font-medium text-base'>Patrick W. Fenster</h3>
                        <span className='font-normal text-sm text-[#84878b]'>Kuwait</span>
                        <span className='font-normal text-xs text-[#b1b5c4]'>45 Followers, 68 Reviews</span>
                      </div>
                    </div>
                    <div className="review flex flex-col justify-center items-start gap-4 md:flex-wrap">
                      <div className="rating-group flex flex-row justify-center items-center gap-5">
                        <div className="review flex flex-row justify-between items-center gap-2">
                          {/* MAP STARS */}
                          <BsStarFill color="#ffc542" />
                          <BsStarFill color="#ffc542" />
                          <BsStarFill color="#ffc542" />
                          <BsStarFill color="#ffc542" />
                          <BsStarHalf color="ffc542" />
                        </div>
                        <div className="review-date">
                          5/25/2022
                        </div>
                      </div>
                      <p>We had the most spectacular view. Unfortunately it was very hot in the room from 2-8:30 pm due to no air conditioning and no shade.</p>
                    </div>
                  </div>
                </div>

                
                <div className="view-all-button my-4 self-center">
                  <Button version="clear">+ View All</Button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default HotelDetails;

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