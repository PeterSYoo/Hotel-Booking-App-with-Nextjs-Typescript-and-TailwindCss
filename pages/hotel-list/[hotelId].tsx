import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import { BsStarHalf, BsStarFill } from 'react-icons/bs';
import { CgFlagAlt } from 'react-icons/cg';
import { HandleIcons } from '../../lib/iconHandler';
import { Icons } from '../../constants/icons';
import { BookingHeader } from '../../components/bookingHeader.components';

const tagsForDev = [
  '5.0',
  'Perfect',
  'Hotels',
  'Bulding',
  'Top Value',
  'Something',
];

const amenities = ['Kitchen', 'Free washer', 'Wifi', 'Hair dryer'];

const HotelDetails = () => {
  return (
    <>
      <BookingHeader crumbs={['Hotel list', 'Hotel details']} />
      <section className="headline flex flex-col items-start gap-6 px-4">
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
      <div className="image-wrapper overflow-x-auto snap-x snap-mandatory">
        <div className="image flex gap-4 flex-nowrap">
          <div className="snap-always snap-center inline-block rounded-3xl">
            <div className="w-250 h-207">
              <Image
                src="https://unsplash.it/300/200"
                alt="Placeholder Image"
                width={300}
                height={200}
              />
            </div>
          </div>
          <div className="snap-always snap-center inline-block rounded-3xl">
            <div className="w-250 h-207">
              <Image
                src="https://unsplash.it/300/200"
                alt="Placeholder Image"
                width={300}
                height={200}
              />
            </div>
          </div>
          <div className="snap-always snap-center inline-block rounded-3xl">
            <div className="w-250 h-207">
              <Image
                src="https://unsplash.it/300/200"
                alt="Placeholder Image"
                width={300}
                height={200}
              />
            </div>
          </div>
          <div className="snap-always snap-center inline-block rounded-3xl">
            <div className="w-250 h-207">
              <Image
                src="https://unsplash.it/300/200"
                alt="Placeholder Image"
                width={300}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="tags-review flex flex-col justify-start items-start gap-2 px-4">
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
      <div className="title-line flex flex-col items-start gap-8 px-4">
        <div className="title flex flex-col items-start gap-5">
          <h2 className="font-medium text-4xl text-[#252525]">
            Exlcusive room in house
          </h2>
          <h3 className="font-medium text-2xl text-[#84878b]">
            Zuich, Switzerland
          </h3>
        </div>
        <div className="line w-full h-[1px] bg-[#d5e1d6] mb-7"></div>
      </div>
      <div className="description-content flex flex-col items-start gap-2 px-4">
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
          as one of the highly recom.2 kms), Al Wasl Indoor Stadium (1.2 kms),
          Dubai Mall (5.4 kms), Jumeirah Beach Park (9.6 kms) and Jumeirah
          Public Beach (15.8 kms).
        </p>
      </div>
      <div className="features-amenities flex flex-col justify-center items-start gap-16">
        <div className="amenities flex flex-col justify-center items-start gap-4 w-full px-4">
          <h2>Amenities</h2>
          <div className="amenities-list flex flex-col flex-wrap items-start gap-4">
            {amenities.map((amenity, i) => (
              <div className="flex flex-row gap-2 items-center" key={i}>
                {HandleIcons(amenity)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelDetails;
