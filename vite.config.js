import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  // Phục vụ trực tiếp thư mục glassesImage từ tài nguyên có sẵn
  publicDir: path.resolve(__dirname, '../glassesImage-20261001T081638Z-1-001'),
});
