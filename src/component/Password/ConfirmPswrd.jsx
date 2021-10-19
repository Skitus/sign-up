import React from "react";
import {Controller} from "react-hook-form";
import FormErrorMessage from "../FromErrorMessage/FromErrorMessage";
import {Typography} from "antd";
import "./Password.scss";

const {Title} = Typography;

const ConfirmPassword = ({errors, control, component, currentPswd}) => {
    return (
        <div className="input-block">
            <Title level={5}>Confirm password</Title>
            <Controller
                render={({field}) =>
                    <>
                        {component}
                        <FormErrorMessage message={errors?.password_repeat?.message}/>
                    </>
                }
                name="password_repeat"
                control={control}
                defaultValue=""
                rules={{
                    required: "This input is required",
                    validate: value =>
                        value === currentPswd.current || "The passwords do not match"
                }}
            />
        </div>
    );
}

export default ConfirmPassword;