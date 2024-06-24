import { useEffect, useRef } from 'react';

const useUpdate = (callback, dependencies) => {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      callback();
    }
  }, dependencies);
};

export default useUpdate;
