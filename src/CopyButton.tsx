import styles from './CopyButton.module.css';

const CopyButton = ({
  label = 'Copy',
  textToCopy,
} : {
  label?: string,
  textToCopy: string,
}) => (
  <button
    className={styles.copyButton}
    onClick={() => navigator.clipboard.writeText(textToCopy)}
  >{label}</button>
)

export default CopyButton;