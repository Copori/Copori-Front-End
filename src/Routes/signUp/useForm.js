import { useEffect, useState } from 'react';

function useForm({ initialValues, onSubmit, validate }) {
    // 상태 관리 : useState()
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    // 변경 이벤트 처리
    const handleChange = event => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    // 제출 이벤트 처리 : 업무 로직
    const handleSubmit = async event => {
        setSubmitting(true);
        event.preventDefault();
        await new Promise(r => setTimeout(r, 1000));
        setErrors(validate(values));
    };

    // 제출 이벤트 처리 : useEffect()
    useEffect(() => {
        if (submitting) {
            if (Object.keys(errors).length === 0) {
                onSubmit(values);
            }
            setSubmitting(false);
        }
    }, [errors]);

    return {
        values,
        errors,
        submitting,
        handleChange,
        handleSubmit,
    };
}

export default useForm;
