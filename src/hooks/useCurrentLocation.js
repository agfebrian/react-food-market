import { useLocation } from "react-router-dom";

export const useCurrentLocation = () => {
  const location = useLocation();
  const currentLocation = location.pathname;
  return currentLocation;
};
