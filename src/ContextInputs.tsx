import styles from './ContextInputs.module.css';

const ContextInput = ({
  name,
  values,
  setValues,
} : {
  name: string,
  values: Record<string, string | number>,
  setValues: (newValues: Record<string, string | number>) => void,
}) => {
  const onChange = (newValue: string | number) => setValues({
    ...values,
    [name]: newValue,
  });
  const value = values[name] || '';
  return (
    <label htmlFor={name}>
      {name}
      <br />
      <input
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  )
}

const ContextInputs = ({
  inputNames,
  values,
  setValues,
}: {
  inputNames: string[]
  values: Record<string, string | number>,
  setValues: (newValues: Record<string, string | number>) => void,
}) => {
  return (
    <div className={styles.contextInputs}>
      <h2>Inputs</h2>
      {inputNames.map(key => (
        <div key={key}>
          <ContextInput name={key} values={values} setValues={setValues} />
        </div>
      ))}
    </div>
  )
};

export default ContextInputs;
