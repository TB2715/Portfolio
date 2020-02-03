import React from 'react';
import {Card, Col, Image, Row} from "react-bootstrap";
import walwaltalk from '../Images/WalWalTalk_facebookMsg.png';
import knocap from '../Images/Knocap_web.png'

class Project extends React.Component {
    render() {
        return (
            <section className="project-part my-2">
                <h3>Project</h3>
                <Row className="my-4">
                    <Col xs={12} md={6} lg={3} className="mr-auto">
                        <Image src={knocap} className="shadow-sm mx-auto" rounded={true} style={{width: '20rem'}}/>
                    </Col>
                    <Col xs={12} md={6} lg={9}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <h5>Knocap 2019</h5>
                                </Card.Title>
                                <Card.Text>
                                    UC Irvine, Software Design and Collaboration Lab과 함께 진행한 프로젝트입니다. <br />
                                    This is the project, "Lightweight, Voice-based knowledge capture and delivery in software design meeting" from the Software Design and Collaboration Lab in UC Irvine.
                                    I developed the "Knocap board" which is the assistant for the software design meeting.
                                    It helps to capture the important knowledge during the meeting which is just delivered by a voice not captured at all.
                                </Card.Text>
                                <Card.Link href="https://github.com/ameza13/knocap-client">Github_client</Card.Link>
                                <Card.Link href="https://github.com/ameza13/knocap-server">Github_server</Card.Link>
                                <Card.Link href="http://knocap.ml/">Project Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="my-4">
                    <Col xs={12} md={6} lg={3} className="mr-auto">
                        <Image src={walwaltalk} className="shadow-sm mx-auto" rounded={true} style={{width: '20rem'}}/>
                    </Col>
                    <Col xs={12} md={6} lg={9}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    <h5>넥슨 아이디어 챌린지 2017</h5>
                                </Card.Title>
                                <Card.Text>
                                    수의학과와 함께 협업하여 진행한 프로젝트. 반려동물과 주인을 연결하기 위한
                                    페이스북의 메신저 챗봇 서비스입니다. 기존의 반려동물 관련 어플과 달리, 반려동물이 원할 때 주인과의 소통을 할 수 있도록 하여,
                                    반려동물과 주인의 양방향 소통을 목표로 하였습니다.
                                </Card.Text>
                                <Card.Link href="https://github.com/TB2715/WalWalTalk">Github</Card.Link>
                                <Card.Link href="https://www.facebook.com/WalWalTalk/">Facebook Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
    );
    }
    }

    export default Project;