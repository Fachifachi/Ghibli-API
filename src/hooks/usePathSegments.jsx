import { useLocation } from 'wouter';

const usePathSegments = () => {
  const [location] = useLocation();

  const getPathSegments = () => {
    return location.split('/').filter(segment => segment !== '');
  };

  return getPathSegments();
};

export default usePathSegments;
