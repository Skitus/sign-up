import React from 'react';
import {Controller} from "react-hook-form";
import {Radio, Space, Typography} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMars, faTransgenderAlt, faVenus} from "@fortawesome/free-solid-svg-icons";
import "./RadioGrpuo.scss";

const {Title} = Typography;

const RadioGroup = ({control}) => {
    return (
        <>
            <Title level={5}>Gender</Title>
            <Controller
                control={control}
                name="gender"
                defaultValue={"male"}
                render={({field: {onChange, value}}) => (
                    <Radio.Group onChange={onChange} value={value}>
                        <Radio.Button value={"male"}>
                            <div className="radio-text">
                                <Space direction="vertical">
                                    <FontAwesomeIcon icon={faMars} className="icon"></FontAwesomeIcon>
                                    Male
                                </Space>
                            </div>
                        </Radio.Button>
                        <Radio.Button value={"female"}>
                            <div className="radio-text">
                                <Space direction="vertical">
                                    <FontAwesomeIcon icon={faVenus} className="icon"/>
                                    Female
                                </Space>
                            </div>
                        </Radio.Button>
                        <Radio.Button value={"other"}>
                            <div className="radio-text">
                                <Space direction="vertical">
                                    <FontAwesomeIcon icon={faTransgenderAlt} className="icon"/>
                                    Other
                                </Space>
                            </div>
                        </Radio.Button>
                    </Radio.Group>
                )}
            />
        </>
    );
};

export default RadioGroup;