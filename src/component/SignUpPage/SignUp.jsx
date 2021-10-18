import React, {useRef} from 'react';
import {Button, Col, Form, Image, Input, Radio, Row, Typography} from "antd";
import {useForm, Controller} from 'react-hook-form';
import FormErrorMessage from "../FromErrorMessage/FromErrorMessage";
import {EMAIL_PATTERN} from "../utils/formValidation";
import {EnvironmentOutlined} from "@ant-design/icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMars} from "@fortawesome/free-solid-svg-icons";
import logo from "../../img/icon.svg";
import './SignUp.scss';

const {Title, Link} = Typography;


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
                    <Col className="form-block" xs={20} sm={22} md={12} lg={8} xl={6} xxl={6}>
                        <Image width={100} height={100} src={logo}/>
                        <Title className="title-form" level={3}>
                            Sign Up with email
                        </Title>
                        <Form onFinish={handleSubmit(onSubmit)}>

                            <Title level={5}>Gender</Title>
                            <Controller
                                control={control}
                                name="gender"
                                defaultValue={"male"}
                                render={({field: {onChange, value}}) => (
                                    <Radio.Group onChange={onChange} value={value}>
                                        <Radio value={"male"}>
                                                <FontAwesomeIcon icon={faMars} className="icon"/>
                                                Male
                                        </Radio>
                                        <Radio value={"female"}>female</Radio>
                                        <Radio value={"other"}>other</Radio>
                                    </Radio.Group>
                                )}
                            />

                            <br/>
                            Email
                            <Controller
                                render={({field}) =>
                                    <>
                                        {EmailInput}
                                        <FormErrorMessage message={errors?.email?.message}/>
                                    </>
                                }
                                name="email"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: 'This input is required',
                                    maxLength: {value: 50, message: 'Maximum length is 50 symbols'},
                                    pattern: {
                                        value: EMAIL_PATTERN,
                                        message: 'This input has such template as: expample.exam@gmail.com',
                                    }
                                }}
                            />


                            Create Password
                            <Controller
                                render={({field}) =>
                                    <>
                                        {PasswordInput}
                                        <FormErrorMessage message={errors?.password?.message}/>
                                    </>
                                }
                                name="password"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: "This input is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must have at least 6 characters"
                                    }
                                }}
                            />

                            Confirm password
                            <Controller
                                render={({field}) =>
                                    <>
                                        {PasswordRepeatInput}
                                        <FormErrorMessage message={errors?.password_repeat?.message}/>
                                    </>
                                }
                                name="password_repeat"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: "This input is required",
                                    validate: value =>
                                        value === password.current || "The passwords do not match"
                                }}
                            />

                            <Form.Item>
                                <Button block className="button" type="primary" htmlType="submit" shape="round">
                                    Login
                                </Button>
                            </Form.Item>


                        </Form>
                        <Link href="/log-in">Already have an account?<span>Log in</span></Link>
                        <br/>
                        <Link href="/privacy">Review privacy and disclosures here <span>here</span></Link>
                    </Col>
                </Row>
            </div>
        );
    }
;

export default SignUp;