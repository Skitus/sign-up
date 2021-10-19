import React from "react";
import {Controller} from "react-hook-form";
import FormErrorMessage from "../FromErrorMessage/FromErrorMessage";
import {EMAIL_PATTERN} from "../utils/formValidation";
import {Typography} from "antd";
import "./Email.scss";

const {Title} = Typography;

const Email = ({errors, control, component}) => {
    return (
        <div className="input-block">
            <Title level={5}>Email</Title>
            <Controller
                render={({field}) =>
                    <>
                        {component}
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
        </div>
    );
}

export default Email;