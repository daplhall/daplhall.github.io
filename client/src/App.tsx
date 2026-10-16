import About from '@pages/about';
import '@style/style.css'


function CodeExample() {
  const code = `import ttstatistics.dicechanics as ds
d6 = ds.d(6)
pool = 10@d6
print(ds.sum(pool[:-5]))`;

  return (
    <pre>
      <code>{code}</code>
    </pre>
  );
}

function App() {
  return (
    <>
      <About />
      <CodeExample />
    </>
  )
}

export default App
