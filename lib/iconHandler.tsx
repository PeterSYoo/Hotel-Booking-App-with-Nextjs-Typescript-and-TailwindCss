import {Icons} from '../constants/icons'


export const HandleIcons = (amenity: string) => {
  switch(amenity) {
    case "Kitchen":
      return (
        <>
          {Icons.kitchen}<span>{amenity}</span>
        </>
      )
    case "Refrigerator":
      return (
        <>
          {Icons.refrigerator}<span>{amenity}</span>
        </>
      )
    case "Washer":
    case "Free washer":
      return (
        <>
          {Icons.washer}<span>{amenity}</span>
        </>
      )
    case "Hair dryer":
      return (
        <>
          {Icons.hairDryer}<span>{amenity}</span>
        </>
      )
    case "Security cameras":
      return (
        <>
          {Icons.securityCameras}<span>{amenity}</span>
        </>
      )
    case "Wifi":
      return (
        <>
          {Icons.wifi}<span>{amenity}</span>
        </>
      )
    case "EV charger":
      return (
        <>
          {Icons.evCharger}<span>{amenity}</span>
        </>
      )
    case "Elevator":
      return (
        <>
          {Icons.elevator}<span>{amenity}</span>
        </>
      )
    case "Courtyard view":
      return (
        <>
          {Icons.courtyardView}<span>{amenity}</span>
        </>
      )
    case "TV":
    case "HDTV":
      return (
        <>
          {Icons.tv}<span>{amenity}</span>
        </>
      )
    default:
      return <span>{amenity}</span>
  }
}