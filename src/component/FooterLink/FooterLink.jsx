import React from "react";
import {Typography} from "antd";

const {Link} = Typography;

const FooterLink = () => {
    return (
        <>
            <Typography.Text>Already have an account?
                <Link href="/log-in" style={{
                    color: '#3C9C41',
                    textDecoration: 'underline',
                    fontWeight: 'bold'
                }}> Log in</Link>
            </Typography.Text>
            <br/>
            <Typography.Text>Review privacy and disclosures
                <Link href="/log-in" style={{
                    color: '#3C9C41',
                    textDecoration: 'underline',
                    fontWeight: 'bold'
                }}> here</Link></Typography.Text>
        </>
    );
}

export default FooterLink;