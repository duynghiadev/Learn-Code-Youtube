import { useState, useCallback, useEffect } from 'react';
import NotificationManagerService from '../../services/NotificationManagerService';
import { ToasterType } from '../../common/Types';

export function UseToastNotification() {
  const [toaster, setToaster] = useState<ToasterType | undefined>(undefined);

  const getToaster = async () => {
    const curToaster = await NotificationManagerService.get();
    setToaster(curToaster);
  };

  const clearToaster = useCallback(async () => {
    if (toaster === undefined) return;
    await NotificationManagerService.clear();
    setToaster(undefined);
  }, [toaster]);

  useEffect(() => {
    getToaster();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      clearToaster();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [clearToaster]);

  return {
    toaster,
    showToast: getToaster,
    clearToast: clearToaster,
  };
}
