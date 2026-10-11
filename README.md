# Portofolio
Stuff

# Getting Started
You need `npm`

## Running the frontend in dev
```bash
cd client
npm run dev
```
## Creating Production
```
npm run build
```
To preview you simply write
```
npm run preview
```

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

# Projects
Projects text should be markdown

I should be able to pass children down to a project highlight eg

```
<HighlightDetails
    Links
    name
    languages
>
  <markdown text content>
</HighlightDetail>
```
This would be much cleaner and better to undertand


# Reading
[Rule of React](https://react.dev/reference/rules)
[React compiler](react.dev/learn/react-compiler/installation)