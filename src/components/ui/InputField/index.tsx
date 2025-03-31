'use client';

import { useState, InputHTMLAttributes } from 'react';
import styles from './InputField.module.scss';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const InputField = ({ label, ...props }: InputFieldProps) => {
    const [focused, setFocused] = useState(false);

    return (
        <div className={`${styles.inputWrapper} ${focused ? styles.focused : ''}`}>
            <label className={styles.label}>{label}</label>
            <input
                {...props}
                className={styles.input}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
            />
        </div>
    );
};

export default InputField;
