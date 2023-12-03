export default {
  dev: {
    '/pipe/pile': {
      target: 'http://81.69.4.168:10000',
      changeOrigin: true,
      // pathRewrite: { '^': '' },
    },
  },
} as const;
