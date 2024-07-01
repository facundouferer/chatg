/// <reference types="vite/client" />

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_API_KEY: string;
  readonly VITE_MODEL_NAME: string;
  readonly VITE_NOT_RESPONDING: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
