// src/vite-env.d.ts
/// <reference types="vite/client" />

export interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string
  readonly VITE_APP_TITLE: string
  // 添加你需要的其他环境变量...
}

export interface ImportMeta {
  readonly env: ImportMetaEnv
}