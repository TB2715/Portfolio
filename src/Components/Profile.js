import React from 'react';
import {Card, Col, Row} from "react-bootstrap";
import profile_img from '../Images/Profile.png'
import '../index.css'
import {MdEmail} from "react-icons/md";
import {FaLinkedin, FaGithub} from "react-icons/fa";

const profile_img_style = {
    width: '10rem',
};

const github_link = "https://github.com/TB2715";
const linkedIn_link = "https://www.linkedin.com/in/hyunji-kim-78563a18b/";
const emailAddress = "hjkim2714@gmail.com";


class Profile extends React.Component {

    handleCopyToClipboard = (value) => {
        console.log(value);

    }

    render() {
        return (
            <Card className="col-12 mx-auto" >
                    <Card.Img
                        roundedCircle={true}
                        src={profile_img}
                        id="profile_img"
                        className="mx-auto"
                        style={profile_img_style}
                    />
                <Card.Body className="p-0 py-2">
                    <Card.Title className="text-center mb-4">Hyunji Kim 김현지</Card.Title>
                    <Card.Text>
                        <Row className="mb-1">
                            <Col className="mx-auto"><MdEmail className="mb-1 mr-2"/> <span onClick={this.handleCopyToClipboard(emailAddress)}>{emailAddress}</span></Col>
                        </Row>
                        <Row className="mb-1">
                            <Col className="mx-auto"><FaLinkedin className="mb-1 mr-2"/> <a onClick={this.handleCopyToClipboard(linkedIn_link)} href={linkedIn_link}>Linked In</a></Col>
                        </Row><
                        Row className="mb-1">
                            <Col className="mx-auto"><FaGithub className="mb-1 mr-2"/> <a className="my-auto" onClick={this.handleCopyToClipboard(github_link)} href={github_link}>Github</a></Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default Profile;