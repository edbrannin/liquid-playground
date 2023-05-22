import { Liquid, Template, TokenKind } from 'liquidjs';
import { useEffect, useMemo } from 'react';
import styles from './TemplateParser.module.css';
import { OutputToken } from 'liquidjs/dist/src/tokens';

const liquid = new Liquid();

const TemplateItem = ({
  item,
}: {
  item: Template
}) => {
  const { token } = item;
  if (token.kind == TokenKind.HTML) {
    return <></>;
  }
  if (token.kind == TokenKind.Output) {
    const outputToken = token as OutputToken;
    return (
      <div className={styles.templateItem}>
        Variable:
        {' '}
        <span className={styles.tokenName}>
          {outputToken.content}
        </span>
      </div>
    );
  }
  return (
    <div className={styles.templateItem}>
      {JSON.stringify(item, null, 2)}
    </div>
  );
}

const TemplateParser = ({
  template,
  setInputs,
}: {
  template: string
  setInputs: (values: string[]) => void
}) => {
  const parsed = useMemo(
    () => {
      try {
        return liquid.parse(template);
      } catch (e) {
        console.warn("Error parsing template:", e, template)
        return [];
      }
    },
    [template],
  );
  useEffect(() => setInputs([...new Set(
    parsed.filter(item => item.token.kind === TokenKind.Output).map(item => (item.token as OutputToken).content)
  )]), [parsed, setInputs]);
  return (
    <div>
      <h2>Template</h2>
      {parsed.map((t, i) => (
        <TemplateItem key={i} item={t} />
      ))}
    </div>
  )
}

export default TemplateParser;
