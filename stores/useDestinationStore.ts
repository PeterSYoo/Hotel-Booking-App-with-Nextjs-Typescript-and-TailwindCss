import create from "zustand";
import { persist } from "zustand/middleware";


type DestinationState = {
  destination: string;
  property: string;
  updateDestination: (payload: string) => void;
  updateProperty: (payload: string) => void;
}

const useDestinationStore = create<DestinationState>()(
  persist(
    (set) => ({
      destination: '',
      property: '',
      updateDestination: (payload: string) =>
        set(() => ({
          destination: payload,
        })),
      updateProperty: (payload: string) =>
        set(() => ({
          property: payload
        }))
    }),
    {
      name: "searched_destination",
    }
  )
);


// let destinationStore = (set: any) => ({
//   destination: '',
//   updateDestination: (payload: string) => set(() => ({ destination: payload}))
// })

// destinationStore = persist(destinationStore, { name: 'searched_destination'})



export default useDestinationStore