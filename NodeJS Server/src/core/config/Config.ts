export default abstract class Config {
    protected readonly config: any

    public constructor(path: string) {
        this.config = this.load(path);
    }

    protected abstract load(path: string) : any

    public GetValueOrDefault<T>(key: string, defaultValue: T) : T {
        if (this.config && this.config[key]) {
            return this.config[key] as T
        }
        return defaultValue;
    }
}