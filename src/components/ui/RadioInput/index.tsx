import styles from './RadioInput.module.scss';

interface RadioInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const RadioInput = ({ label, id, name, value, className = '' }: RadioInputProps) => {
    return (
        <div className={`${styles.radioInputWrapper} ${className}`}>
            <input className={styles.radioInput} type='radio' id={id} name={name} value={value} />
            <label className={styles.radioInputLabel} htmlFor={id}>
                {label}
            </label>
        </div>
    );
};

export default RadioInput;
