# Portofolio
Stuff

# How not use use relative paths
in `tsconfig.app.json`
add
```
  "paths": {
    "@/*": [
      "./src/*"
    ]
  }
```
To the `CompileOptions` section

Furthere more in `vite.config.ts` add 
```
  resolve: {
    tsconfigPaths: true,
  }
```
to `defineConfig`