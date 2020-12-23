import {Header} from 'antd/lib/layout/layout';
import React, {FC} from 'react';
import {Col, Row, Space, Switch, Typography} from "antd";
import Icon from '@ant-design/icons';
import darkSvg from "../../icons/dark-light/darkSvg";
import lightSvg from "../../icons/dark-light/lightSvg";
import {useTranslation} from "react-i18next";

const {Title} = Typography;


const Style = {
    background: 'rgba(239, 219, 255,0.2)',
    boxShadow: '0 0 15px rgba(0,0,0,0.5)',
    marginBottom: 10,
};

const MyHeader: FC<any> = React.memo(({isLight, toggleTheme, toggleLang, isRu}) => {
    const {t} = useTranslation();
    return (
        <Header style={{...Style}}>
            <Row justify="space-around" align="middle">
                <Col>
                    <Title level={2}>{t("name")}</Title>
                </Col>
                <Col>
                    <Space>
                        <Switch checkedChildren={<Icon component={lightSvg}/>}
                                unCheckedChildren={<Icon component={darkSvg}/>}
                                defaultChecked={isLight}
                                onChange={toggleTheme}
                        />
                        <Switch checkedChildren='РУС'
                                unCheckedChildren='ENG'
                                defaultChecked={isRu}
                                onChange={toggleLang}
                        />
                    </Space>
                </Col>

            </Row>
        </Header>
    );
});

export default MyHeader;
