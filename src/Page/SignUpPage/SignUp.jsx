import React, {useRef} from 'react';
import {Col, Form, Input, Row} from "antd";
import {useForm} from 'react-hook-form';
import Header from "../../component/Header/Header";
import RadioGroup from "../../component/RadioGroup/RadioGroup";
import Email from "../../component/Email/Email";
import CreatePassword from "../../component/Password/CreatePswrd";
import ConfirmPassword from "../../component/Password/ConfirmPswrd";
import SubmitBtn from "../../component/SubmitBtn/SubmitBtn";
import FooterLink from "../../component/FooterLink/FooterLink";
import './SignUp.scss';


const SignUp = () => {
        const {
            handleSubmit,
            formState: {errors},
            control,
            watch,
            setValue
        } = useForm({});

        const password = useRef({});
        password.current = watch("password", "");

        const onSubmit = (data) => {
            alert(JSON.stringify(data, null, 2));
        };

        const EmailInput = (
            <Form.Item>
                <Input
                    type="email"
                    placeholder="Email"
                    onChange={e => setValue('email', e.target.value, true)}
                />
            </Form.Item>
        );

        const PasswordInput = (
            <Form.Item>
                <Input.Password
                    placeholder="Create Password"
                    onChange={e => setValue('password', e.target.value, true)}
                />
            </Form.Item>
        );

        const PasswordRepeatInput = (
            <Form.Item>
                <Input.Password
                    placeholder="Confirm Password"
                    onChange={e => setValue('password_repeat', e.target.value, true)}
                />
            </Form.Item>
        );


        return (
            <div className="sign-in">
                <Row justify="center">
                    <Col className="form-block" xs={23} sm={18} md={12} lg={8} xl={8} xxl={6}>
                        <Col span={22} className="center-block">

                            <Header />

                            <Form onFinish={handleSubmit(onSubmit)} className='form'>
                               <RadioGroup control={control}/>

                               <Email control={control} errors={errors} component={EmailInput}/>

                                <CreatePassword control={control} errors={errors} component={PasswordInput}/>

                                <ConfirmPassword control={control} errors={errors} component={PasswordRepeatInput} currentPswd={password}/>

                                <SubmitBtn />

                            </Form>

                            <FooterLink />

                        </Col>
                    </Col>
                </Row>
            </div>
        );
    }
;

export default SignUp;