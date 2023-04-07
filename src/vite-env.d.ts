// / <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_REACT_APP_GITHUB_API_TOKEN: string;
  readonly VITE_APP_ACCESS_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
