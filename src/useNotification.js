import { useContext } from 'react';
import Context from './Context';

const useNotification = () => {
  const context = useContext(Context);

  return context;
};

export default useNotification;
