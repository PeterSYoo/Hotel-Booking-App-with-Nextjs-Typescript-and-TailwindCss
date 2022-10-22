import Button from '../../button.components'

type AppProps = {
  price: number;
  location: string;
  rooms: number;
  reviews: number;
  reviewAmount: number;
  imgPath: string;
  hotelName: string;
  distanceToTownCenter: number;
}

const DetailedCard = ({price, location, rooms, reviews, reviewAmount, imgPath, hotelName, distanceToTownCenter}: AppProps) => {
  return (
    <>
      <div className="card-wrapper px-4 pt-4 pb-7 bg-white rounded-2xl">
        <div className="content-wrapper flex flex-col p-0">
          <div className="top-half flex flex-col justify-center items-start gap-5">
            <div className="image w-60 h-40 rounded-2xl bg-cover" style={{backgroundImage: `url(${imgPath})`}}></div>
            <div className="flex flex-row items-center gap-2">
              <div className="star-icon">
                <img src="/star.png" alt="star for rating" />
              </div>
              <span>{reviews} ({reviewAmount})</span>
            </div>
          </div>
          <div className="bottom-half flex flex-col justify-center items-start gap-4">
            <div className="row1 flex flex-row items-start gap-9">
              <div className="flex flex-col justify-start items-start gap-1">
                <span className="font-medium text-xl text-[#3b3e44]">{hotelName}</span>
                <span className="font-medium text-sm text-[#84878b]">{distanceToTownCenter} km to Town Center</span>
              </div>
              <Button>${price}</Button>
            </div>
            <div className="row2 flex flex-col justify-center items-start gap-2">
              <div className="flex flex-row justify-space-between items-center gap-2">
                <div className="icon">
                  <img src="/gps-marker.png" alt="gps marker" />
                </div>
                <span className='font-normal text-sm text-[#84878B]'>{location}</span>
              </div>
              <div className="flex flex-row justify-space-between items-end gap-2">
                <div className="icon">
                  <img src="/building-icon.png" alt="building icon" />
                </div>
                <span className='font-normal text-sm text-[#84878B]'>Rooms available: {rooms}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailedCard