import { useEffect, useRef } from "react";

const UseIsMountedRef = () => {
  const isMountedRef = useRef(null);
  useEffect(() => {
    isMountedRef.current = true;

    return () => (isMountedRef.current = false);
  }, []);

  return isMountedRef;
};

export default UseIsMountedRef;
