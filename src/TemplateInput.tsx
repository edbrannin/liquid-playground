const TemplateInput = ({
  template,
  setTemplate,
}: {
  template: string,
  setTemplate: (newValue: string) => void,
}) => {
  const lines = template.split('\n');
  const rows = lines.length + 2;
  const cols = lines.map(l => l.length).reduce((result, length) => Math.max(result, length), 0);
  return (
    <div>
      <h2>Template</h2>
      <textarea placeholder="Paste your LiquidJS template here..." rows={rows} cols={cols} value={template} onChange={(e) => setTemplate(e.target.value)} />
    </div>
  );
};

export default TemplateInput;
