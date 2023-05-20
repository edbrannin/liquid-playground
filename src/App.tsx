import { useState } from 'react'
import './App.css'
import TemplateInput from './TemplateInput'
import TemplateOutput from './TemplateOutput'
import TemplateParser from './TemplateParser'
import TemplateInputs from './TemplateInputs'

const DEFAULT_TEMPLATE = `Paste your LiquidJS Template here`

function App() {
  const [template, setTemplate] = useState(DEFAULT_TEMPLATE);
  const [inputs, setInputs] = useState<string[]>([]);
  const [values, setValues] = useState<Record<string, string | number>>({
    id: 7,
    identifyAs911: 'disabled'
  });

  return (
    <>
      <h1>Liquid Playground</h1>
      <div className="App">
        <TemplateInput template={template} setTemplate={setTemplate} />
        <div>
        <TemplateInputs inputs={inputs} values={values} setValues={setValues} />
        <TemplateParser template={template} setInputs={setInputs}  />
        </div>
        <TemplateOutput template={template} values={values} />
      </div>
    </>
  )
}

export default App
