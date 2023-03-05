import { defineConfig } from './node_modules/initapi/src/utils/config'

export default defineConfig({
  importAxios: 'import axios from "../index";',
  useAxios: 'axios.request',
  swagger: {
    mangosteen: 'http://127.0.0.1:3000/api-json',
    test: 'https://petstore.swagger.io/v2/swagger.json',
  },
  outputDir: './src/api',
  outputType: 'TypeScript'
})
