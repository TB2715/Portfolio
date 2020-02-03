import React from 'react';
import {Card, CardDeck, Col, Image, ListGroup, OverlayTrigger, Row} from "react-bootstrap";
import ksc2019 from '../Images/KSC2019.png';

class Paper extends React.Component {
    render() {
        return (
            <section className="project-part my-2">
                <h3>Paper</h3>
                <Row className="my-4">
                    <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>
                                        <h5>선학습 BERT를 활용한 의미벡터 학습 방법</h5>
                                        <h5>Semantic Vector Learning Using Pretrained BERT</h5>
                                    </Card.Title>
                                    <Card.Text>
                                        <div>김현지(Hyunji Kim), 정상근(Sangkeun Jung)</div>
                                        <div>December, 2019</div>
                                        <div>KSC 2019</div>
                                    </Card.Text>
                                    <Card.Link
                                        href="https://drive.google.com/file/d/1o_AYYG5SogkzhggC2dahOCXOymvdgLie/view?usp=sharing">Paper
                                        PDF Link</Card.Link>
                                </Card.Body>
                            </Card>
                    </Col>
                </Row>
            </section>
        );
    }
}

export default Paper;