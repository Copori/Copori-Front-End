import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from './useForm';
import validate from './validate';
import '../style/signUp/style.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Signup() {
    let [id, setId] = useState('');
    let [password, setPassword] = useState('');
    let [email, setEmail] = useState('');
    let [message, setMessage] = useState('');
    let [success, setSuccess] = useState(true);

    const { values, errors, submitting, handleChange, handleSubmit } = useForm({
        initialValues: {
            Vid: '',
            Vemail: '',
            Vpassword: '',
            Vpasswordcheck: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
        validate,
    });

    const navigate = useNavigate();

    return (
        <div className="signup">
            <div className="signup__box">
                <div className="signup__header">
                    <span className="signup__header--logo">
                        Read&amp;Review
                    </span>
                </div>
                <form
                    onSubmit={
                        (handleSubmit,
                        e => {
                            e.preventDefault();
                            axios
                                .post('http://localhost:8080/api/signup', {
                                    username: id,
                                    email: email,
                                    password: password,
                                })
                                .then(function (response) {
                                    console.log('reseponse ' + response);
                                    // setSuccess(response.data.isSuccess);
                                    // setMessage(response.data.message);
                                    navigate('/login');
                                })
                                .catch(error => {
                                    console.log('error' + error.response);
                                });
                        })
                    }
                >
                    <div className="signup__body">
                        <div className="signup__body--input">
                            <span className="signup__body--id-title">
                                아이디
                            </span>
                            <input
                                type="text"
                                name="id"
                                className="signup__body--input-id"
                                placeholder="아이디를 입력하세요."
                                onChange={e => {
                                    console.log(e.target.value);
                                    setId(e.target.value);
                                }}
                            />
                            {errors.Vid && (
                                <span className="signup__body--id-error">
                                    {errors.Vid}
                                </span>
                            )}

                            <span className="signup__body--email-title">
                                이메일
                            </span>
                            <input
                                type="email"
                                name="email"
                                className="signup__body--input-email"
                                placeholder="이메일을 입력하세요."
                                onChange={e => {
                                    setEmail(e.target.value);
                                }}
                            />
                            {errors.Vemail && (
                                <span className="signup__body--email-error">
                                    {errors.Vemail}
                                </span>
                            )}

                            <span className="signup__body--pw-title">
                                비밀번호
                            </span>
                            <input
                                type="password"
                                name="password"
                                className="signup__body--input-pw"
                                placeholder="비밀번호를 입력하세요."
                                onChange={e => {
                                    setPassword(e.target.value);
                                }}
                            />
                            {errors.Vpassword && (
                                <span className="signup__body--pw-error">
                                    {errors.Vpassword}
                                </span>
                            )}

                            <span className="signup__body--pwcheck-title">
                                비밀번호 확인
                            </span>
                            <input
                                type="password"
                                name="passwordcheck"
                                className="signup__body--input-pwcheck"
                                placeholder="비밀번호를 다시 입력해주세요."
                                onChange={handleChange}
                            />
                            {errors.Vpasswordcheck && (
                                <span className="signup__body--pwck-error">
                                    {errors.Vpasswordcheck}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="signup__btn">
                        <button type="submit" className="signup__btn--join">
                            가입하기
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
