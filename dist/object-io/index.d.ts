declare function clone<T>(obj: T): T;

declare function isEmpty(obj: Record<string, any> | any[]): boolean;

declare const merge: (a: Record<string, any>, b: Record<string, any>, deep?: boolean) => Record<string, any>;

declare function omit<T extends object, K extends keyof T>(obj: T, keys: Array<K>): Omit<T, K>;

declare function pick<T extends object, K extends keyof T>(obj: T, keys: Array<K>): Pick<T, K>;

export { clone, isEmpty, merge, omit, pick };
