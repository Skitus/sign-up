import React from "react";
import {Image, Typography} from "antd";
import logo from "../../img/icon.svg";
import "./Header.scss";

const {Title} = Typography;

const Header = () => {
    return (
        <div className="header">
            <Image width={100} height={100} src={logo} preview={false}/>
            <Title level={4}>
                Sign Up with email
            </Title>
        </div>
    );
}

export default Header;