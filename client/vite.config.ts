import babel from '@rolldown/plugin-babel'
import react from '@vitejs/plugin-react'
import {reactCompilerPreset} from '@vitejs/plugin-react'
import {defineConfig} from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(), react(), babel({presets: [reactCompilerPreset()]})],
  resolve: {
    tsconfigPaths: true,
  }
})
