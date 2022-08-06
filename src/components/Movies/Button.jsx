import { useLocation } from 'react-router-dom';

export const BackBTN = () => {
  const location = useLocation();

  return (
    <button to={location?.state?.from ?? '/'} type="button">
      back
    </button>
  );
};
