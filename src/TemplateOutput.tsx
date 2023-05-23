import styles from './TemplateOutput.module.css';
import CopyButton from './CopyButton';

const TemplateOutput = ({
  result,
} : {
  result: string,
}) => {
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
