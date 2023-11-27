import { ToasterType } from '../common/Types';

class NotificationManagerService {
  private storageKey: string;
  private db: Storage | undefined;

  constructor() {
    this.storageKey = 'toaster';
    if (typeof window !== 'undefined') {
      this.db = localStorage;
    }
  }

  public async get(): Promise<ToasterType | undefined> {
    if (!this.db) return undefined;
    try {
      const toaster = this.db.getItem(this.storageKey);
      return toaster ? JSON.parse(toaster) : undefined;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  public async clear(): Promise<boolean> {
    if (!this.db) return false;
    try {
      this.db.removeItem(this.storageKey);
      return true;
    } catch (error) {
      console.error('Error:', error);
      return false;
    }
  }

  public async create(toaster: ToasterType): Promise<boolean> {
    if (!this.db) return false;
    try {
      this.db.setItem(this.storageKey, JSON.stringify(toaster));
      return true;
    } catch (error) {
      console.error('Error:', error);
      return false;
    }
  }
}

const instance = new NotificationManagerService();
export default instance;
