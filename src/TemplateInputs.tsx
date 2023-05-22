const TemplateInput = ({
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

const TemplateInputs = ({
  inputs,
  values,
  setValues,
}: {
  inputs: string[]
  values: Record<string, string | number>,
  setValues: (newValues: Record<string, string | number>) => void,
}) => {
  return (
    <div>
      <h2>Inputs</h2>
      {inputs.map(key => (
        <div key={key}>
          <TemplateInput name={key} values={values} setValues={setValues} />
        </div>
      ))}
    </div>
  )
};

export default TemplateInputs;
