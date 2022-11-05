import { GiWashingMachine, GiElevator, GiWifiRouter, GiHeatHaze, GiCctvCamera, GiPalmTree } from 'react-icons/gi';
import {IoIosTv} from 'react-icons/io'
import { MdKitchen } from "react-icons/md";
import { RiChargingPileFill, RiFridgeFill } from 'react-icons/ri';

export const Icons = {
  "kitchen": <MdKitchen />,
  "tv": <IoIosTv />,
  "washer": <GiWashingMachine />,
  "elevator" : <GiElevator />,
  "wifi" : <GiWifiRouter />,
  "hairDryer": <GiHeatHaze />,
  "securityCameras": <GiCctvCamera />,
  "evCharger": <RiChargingPileFill />,
  "refrigerator" : <RiFridgeFill />,
  "courtyardView": <GiPalmTree />
}