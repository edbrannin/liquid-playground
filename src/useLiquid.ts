import { useState, useEffect } from "react";
import { Liquid, Template, TokenKind } from 'liquidjs';
import { OutputToken } from 'liquidjs/dist/src/tokens';
import { RenderOptions } from "liquidjs/dist/src/liquid-options";

export type TemplateContext = Record<string, string | number>;

const liquid = new Liquid();

const DEFAULT_RENDER_OPTIONS = {};

const useLiquid = (initialTemplate = '', initialValues = {}, renderOptions: RenderOptions = DEFAULT_RENDER_OPTIONS) => {
  const [template, setTemplate] = useState(initialTemplate);
  const [inputNames, setInputNames] = useState<string[]>([]);
  const [values, setValues] = useState<TemplateContext>(initialValues);
  const [result, setResult] = useState<string>('');
  const [error, setError] = useState(null as null | string);
  const [parsedTemplate, setParsedTemplate] = useState([] as Template[]);

  useEffect(() => {
    const effect = async () => {
      try {
        const parsed = liquid.parse(template);
        setParsedTemplate(parsed);

        const inputNames = parsed.filter(
          item => item.token.kind === TokenKind.Output
        ).map(
          item => (item.token as OutputToken).content
        );
        setInputNames([...new Set(inputNames)])

        const result = await liquid.render(parsed, values, renderOptions);
        setResult(result);
      } catch (e) {
        console.warn("Error parsing template:", e, template)
        if (e instanceof Error) {
          setError(e.message);
        } else if (typeof e === 'string') {
          setError(e);
        } else {
          setError(`Something went wrong, look at the console: ${e}`);
        }
      }
    }
    effect();
  }, [template, values, renderOptions]);

  return {
    template, setTemplate,
    parsedTemplate,
    inputNames,
    values, setValues,
    result,
    error,
  };
}

export default useLiquid;
