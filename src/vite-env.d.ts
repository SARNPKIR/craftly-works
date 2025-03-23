/// <reference types="vite/client" />

// Allow for dynamic imports of any modules
declare module '*';

// Define environment variables
interface ImportMetaEnv {
  readonly VITE_SMTP_HOST?: string;
  readonly VITE_SMTP_PORT?: string;
  readonly VITE_SMTP_USER?: string;
  readonly VITE_SMTP_PASS?: string;
  readonly VITE_EMAIL_TO?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
