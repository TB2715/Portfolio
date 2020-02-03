import React from "react";
import Profile from "./Profile";
import {Col, Row} from "react-bootstrap";
import AboutMe from "./AboutMe";
import Project from "./Project";
import Paper from "./Paper";

class Main extends React.Component {
    state = {
        isLoading: true,
    };

    componentDidMount() {
        this.setState(() => ({
            isLoading: false,
        }))
    }

    render() {
        const {isLoading, project_list, paper_list} = this.state
        return (
            <section className="container-fluid my-2">
                {
                    isLoading ? (
                        <span>Loading... </span>
                    ) : (
                        <Row>
                            <Col className="col-sm-12 col-md-4 col-lg-2 ml-auto">
                                <Profile className="mt-5"/>
                            </Col>
                            <Col style={{overflow: 'auto'}}>
                                <AboutMe />
                                <hr className="my-4"></hr>
                                <Project/>
                                <hr className="my-4"></hr>
                                <Paper/>
                            </Col>
                        </Row>

                    )
                }
            </section>
        );
    }
}


export default Main;