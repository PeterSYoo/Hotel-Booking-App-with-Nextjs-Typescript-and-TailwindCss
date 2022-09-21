import { useState } from 'react';

const useSignupModal = () => {
  const [openSignup, setOpenSignup] = useState(false);

  return { openSignup, setOpenSignup };
};

export default useSignupModal;
