import React from 'react';
import {Accordion, Card, Button} from "react-bootstrap";

class AboutMe extends React.Component {
    state = {
        isAccordionOpen: false,
    };

    render(){
        const { isAccordionOpen } = this.state;
        return(
            <section>
                <Accordion>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            About Me ▼
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <div className="my-2"><b>2020.03 ~ 현재</b>      충남대학교 컴퓨터공학과 석사(지능 소프트웨어 연구실)</div>
                            <div className="my-2"><b>2019.06 ~ 2019.08</b>   UC Irvine, Visiting Researcher</div>
                            <div className="my-2"><b>2015.03 ~ 2020.02</b>   충남대학교 컴퓨터공학과 학사</div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>
            </section>
        );
    }
}

export default AboutMe;