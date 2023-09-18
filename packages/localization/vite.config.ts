/// <reference types="vite/client" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
      skipDiagnostics: false,
    })
  ],
  build: {
    minify: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'localization',
      formats: ['es'],
      fileName: (format) => `index.${format}.js`
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  }
})


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import dts from 'vite-plugin-dts'
// import { resolve } from 'path'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     dts({
//       insertTypesEntry: true,
//       rollupTypes: true,
//       skipDiagnostics: false,
//     })
//   ],
//   build: {
//     minify: false,
//     lib: {
//       entry: resolve(__dirname, 'src/index.tsx'),
//       formats: ['es'],
//       fileName: (format) => `index.${format}.js`
//     },
//     commonjsOptions: {
//       transformMixedEsModules: true,
//     },
//     rollupOptions: {
//       external: ['react', 'react-dom'],
//       output: {
//         globals: {
//           react: 'React',
//           'react-dom': 'ReactDOM',
//         },
//       },
//     },
//   }
// })
