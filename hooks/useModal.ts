import { useState } from 'react';

const useModal = () => {
  const [openModal, setOpenModal] = useState(false);

  return { openModal, setOpenModal };
};

export default useModal;
