import './App.css'
import TemplateInput from './TemplateInput'
import TemplateOutput from './TemplateOutput'
import ContextInputs from './ContextInputs'
import useLiquid from './useLiquid'

const DEFAULT_TEMPLATE = `
Paste your LiquidJS Template here

{{ myVariable }}
`.trim();

function App() {
  const { template, setTemplate, inputNames, values, setValues, result } = useLiquid(DEFAULT_TEMPLATE);

  return (
    <>
      <h1>Liquid Playground</h1>
      <div className="App">
        <TemplateInput template={template} setTemplate={setTemplate} />
        <ContextInputs inputNames={inputNames} values={values} setValues={setValues} />
        <TemplateOutput result={result} />
      </div>
    </>
  )
}

export default App
