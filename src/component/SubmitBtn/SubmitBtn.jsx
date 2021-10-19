import React from "react";
import {Button, Form} from "antd";
import "./SubmitBtn.scss";

const SubmitBtn = () => {
    return (
        <Form.Item>
            <Button block size="large" className="button" type="primary" htmlType="submit">
                Login
            </Button>
        </Form.Item>
    );
}

export default SubmitBtn;