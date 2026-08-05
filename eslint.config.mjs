// ESLint 9 ne lit plus .eslintrc.json. eslint-config-next 16 publie directement
// des configs au format plat : pas besoin de la couche de compatibilite.
import coreWebVitals from 'eslint-config-next/core-web-vitals'
import typescriptConfig from 'eslint-config-next/typescript'

const config = [
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'next-env.d.ts',
      'app/css/vendor/**',
    ],
  },
  ...coreWebVitals,
  ...typescriptConfig,
]

export default config
