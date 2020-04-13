// eslint-disable-next-line unused-imports/no-unused-imports-ts

declare interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: unknown;
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: unknown;
  WebFont: {
    load(params: unknown): void;
  };
}

declare interface NodeModule {
  hot?: { accept: (path: string, callback: () => void) => void };
}

declare interface System {
  import<T = unknown>(module: string): Promise<T>;
}
declare let System: System;

declare namespace NodeJS {
  export interface ProcessEnv {
    PHONE: string;
    NETPORT: string;
    FIREBASECONFIG: object;
    MAIL: {
      to: string;
      smtpPort: number;
      smtpHost: string;
    };
  }
}
