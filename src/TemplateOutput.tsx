import { Liquid } from 'liquidjs';
import { useEffect, useState } from 'react';
import styles from './TemplateOutput.module.css';
import CopyButton from './CopyButton';

const liquid = new Liquid();

const TemplateOutput = ({
  template,
  values,
} : {
  template: string,
  values: Record<string, string | number>,
}) => {
  const [result, setResult] = useState('');
  useEffect(() => {
    const render = async () => {
      try {
        setResult(await liquid.parseAndRender(template, values));
      } catch (e) {
        console.warn("error rendering template:", e, template, values);
      }
    } 
    render();
  }, [template, values])
  return (
    <div>
      <h2>
        Result
        {' '}
        <CopyButton textToCopy={result} />
      </h2>
      <div className={styles.templateOutput}>
        {result}
      </div>
    </div>
  )
}

export default TemplateOutput;
