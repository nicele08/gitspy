// / <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GITHUB_ACCESS_DATA: string;
  readonly VITE_GITHUB_REFRESH_DATA: string;
  readonly VITE_APP_ACCESS_TOKEN: string;
  readonly VITE_APP_API_URL: string;
  readonly VITE_GITHUB_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
