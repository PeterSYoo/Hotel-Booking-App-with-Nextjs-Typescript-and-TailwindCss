import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import { CiLocationOn, CiCalendar } from 'react-icons/ci';
import { CgFlagAlt } from 'react-icons/cg';
import { IoMdAirplane } from 'react-icons/io';
// import {Icons} from '../constants/icons'
import { HandleIcons } from '../lib/iconHandler';
import Button from './Button.components';

type AppProps = {
  imgPath: string;
  headline?: string;
  rating: number;
  amountOfRating: number;
  city: string;
  country: string;
  bookingStart: string;
  bookingEnd: string;
  amenities: Array<string>;
  // amenities: Array<Amenity>;
  price: string;
  hotelName: string;
  clickRoute?: string;
};

// type Amenity = {
//   icon: JSX.Element;
//   name: string;
// }
type Amenity = {
  name: string;
};

// const handleIcons = (amenity: string) => {
//   switch(amenity) {
//     case "Kitchen":
//       return (
//         <>
//           {Icons.kitchen}<span>{amenity}</span>
//         </>
//       )
//     case "Refrigerator":
//       return (
//         <>
//           {Icons.refrigerator}<span>{amenity}</span>
//         </>
//       )
//     case "Washer":
//     case "Free washer":
//       return (
//         <>
//           {Icons.washer}<span>{amenity}</span>
//         </>
//       )
//     case "Hair dryer":
//       return (
//         <>
//           {Icons.hairDryer}<span>{amenity}</span>
//         </>
//       )
//     case "Security cameras":
//       return (
//         <>
//           {Icons.securityCameras}<span>{amenity}</span>
//         </>
//       )
//     case "Wifi":
//       return (
//         <>
//           {Icons.wifi}<span>{amenity}</span>
//         </>
//       )
//     case "EV charger":
//       return (
//         <>
//           {Icons.evCharger}<span>{amenity}</span>
//         </>
//       )
//     case "Elevator":
//       return (
//         <>
//           {Icons.elevator}<span>{amenity}</span>
//         </>
//       )
//     case "Courtyard view":
//       return (
//         <>
//           {Icons.courtyardView}<span>{amenity}</span>
//         </>
//       )
//     case "TV":
//     case "HDTV":
//       return (
//         <>
//           {Icons.tv}<span>{amenity}</span>
//         </>
//       )
//     default:
//       return <span>{amenity}</span>
//   }
// }

const HotelListCard = ({
  imgPath,
  headline,
  rating,
  amountOfRating,
  city,
  country,
  bookingStart,
  bookingEnd,
  amenities,
  price,
  hotelName,
  clickRoute,
}: AppProps) => {
  return (
    <div className="flex flex-col justify-around items-center border border-[#e7ecf3] rounded-3xl p-3 md:flex-row md:w-full md:max-w-4xl">
      <div className="image-wrapper">
        <Image
          src={imgPath}
          alt={hotelName}
          width={450}
          height={450}
          objectFit="contain"
        />
      </div>
      <div className="content flex flex-col items-start gap-10 p-3">
        <div className="headline">
          <h1 className="font-bold text-4xl">
            {city}, {country}
          </h1>
          <div className="sub-heading flex flex-row justify-center items-center gap-2">
            <div className="rating flex flex-row justify-center items-center gap-1">
              <AiFillStar color="#ffc542" /> <span>{rating}</span>(
              {amountOfRating} reviews)
            </div>
            <div className="location flex flex-row justify-center items-center gap-1">
              <CgFlagAlt /> {city}, {country}
            </div>
          </div>
        </div>
        <div className="location-date-flight flex flex-col justify-center items-start gap-4">
          <div className="row flex flex-row justify-between items-center gap-5">
            <div className="location flex flex-row justify-between items-center gap-1">
              <CiLocationOn /> {hotelName}
            </div>
            <div className="date flex flex-row justify-between items-center gap-1">
              <CiCalendar /> <span>{bookingStart}</span>-
              <span>{bookingEnd}</span>
            </div>
          </div>
          <div className="flight flex flex-row justify-between items-center gap-1">
            <IoMdAirplane /> Departure from {city}
          </div>
        </div>
        <div className="service-button flex flex-row justify-between items-end w-full">
          <div className="service flex flex-col justify-between items-start gap-3">
            {amenities?.map((amenity: string) => (
              <div
                key={amenity}
                className="wifi flex flex-row justify-center items-center gap-4"
              >
                {HandleIcons(amenity)}
              </div>
            ))}
          </div>
          <div className="button-group flex flex-col items-center gap-5">
            <div className="price">
              <span className="font-bold text-2xl">{price} </span>
              <span>Per night</span>
            </div>
            <div className="button">
              <Button rounded="30px">Book Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelListCard;
