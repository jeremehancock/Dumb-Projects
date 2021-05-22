import { useEffect } from 'react';
import { navigate } from "@reach/router"

const FourOFour = () => {
  useEffect(() => {
    navigate('/');
  }, []);
  return null;
};

export default FourOFour;