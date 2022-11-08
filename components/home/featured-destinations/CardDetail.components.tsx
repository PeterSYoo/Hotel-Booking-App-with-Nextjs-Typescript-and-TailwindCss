import Image from "next/image"
type AppProps = {
  rating: number;
  location: string;
  titleSize: string;
  activities: number;
  img: string;
  avatar: string;
}

const Card = ({rating, location, titleSize, activities, img, avatar}: AppProps) => {
  return (
    <div className="relative p-7 h-full bg-cover bg-center rounded-3xl" style={{backgroundImage: `url(${img})`}}>
      <div className="overlay absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black z-[1] rounded-3xl"></div>
      <div className="flex flex-col justify-between h-full" >
        <div className="rating-container flex">
          <div className="card-rating text-red-700 font-bold text-lg bg-white rounded-2xl py-[2px] px-5 ">{rating}</div>
        </div>
        <div className="card-title z-[2]">
          <span className={`font-bold text-white ${titleSize}`}>{location}</span>
          <div className="avatar-group flex flex-row justify-start items-center gap-x-3">
            <div className="avatar-image rounded-full w-7 h-7">
              <Image 
                src={avatar}
                alt='avatar'
                width="28px"
                height="28px"
              />
            </div>
            <span className="text-white font-normal text-xl">{activities} Activites</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card