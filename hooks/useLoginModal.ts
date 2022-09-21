import { useState } from 'react';

const useLoginModal = () => {
  const [openLogin, setOpenLogin] = useState(false);

  return { openLogin, setOpenLogin };
};

export default useLoginModal;
