import { useEffect, useRef } from "react";

export function useFetch(callback) {
  const hasFethed = useRef(false);
  useEffect(() => {
    if (!hasFethed.current) {
      callback();
      hasFethed.current = true;
    }
  }, []);
}
