const authTokenKey: string = 'authToken';

class AppStorage {
    storage: Storage = sessionStorage;


    public get authToken(): string {
        return this.storage.getItem(authTokenKey);
    }
    public set authToken(value: string) {
        if (null === value) {
            this.storage.removeItem(authTokenKey);
        } else {
            this.storage.setItem(authTokenKey, value);
        }
    }
}

export const Storage: AppStorage = new AppStorage();
