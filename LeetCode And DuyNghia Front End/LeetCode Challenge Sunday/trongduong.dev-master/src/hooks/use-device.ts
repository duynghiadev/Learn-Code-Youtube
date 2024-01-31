"use client";

import debounce from "lodash/debounce";
import { useEffect, useState } from "react";
import { useEvent } from "react-use";

export type DeviceType = "desktop" | "tablet" | "mobile";

function useDevice() {
  const [device, setDevice] = useState<DeviceType>("desktop");
  const [screenSize, setScreenSize] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleManifestDevice = debounce(() => {
    let result = "" as DeviceType | null;

    if (window.innerWidth > 768) {
      result = "desktop";
    }

    if (window.innerWidth > 525 && window.innerWidth <= 768) {
      result = "tablet";
    }

    if (window.innerWidth <= 525) {
      result = "mobile";
    }

    setScreenSize(window.innerWidth);
    setDevice(result as DeviceType);
  }, 200);

  useEffect(() => {
    handleManifestDevice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEvent("resize", handleManifestDevice);

  return { device, screenSize };
}

export default useDevice;
