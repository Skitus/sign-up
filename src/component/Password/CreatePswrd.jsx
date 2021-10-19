import React from "react";
import {Controller} from "react-hook-form";
import FormErrorMessage from "../FromErrorMessage/FromErrorMessage";
import {Typography} from "antd";
import "./Password.scss";

const {Title} = Typography;

const CreatePassword = ({errors, control, component}) => {
    return (
        <div className="input-block">
            <Title level={5}>Create password</Title>
            <Controller
                render={({field}) =>
                    <>
                        {component}
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
        </div>
    );
}

export default CreatePassword;