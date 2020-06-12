import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";

function Book ({ title, subtitle, authors, link, description, image, Button }) 
{
    return (
        <ListItem>
            <Row className="flex-wrap">
                <Col size="md-8">
                    <h1 className="font-italic">{title}</h1>
                </Col>
                <Col size="md-4">
                    <div className="btn-container">
                        <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={link}>
                            Check it out
                        </a>
                        <Button />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col size="12 sm-4 md-2">
                    <img className="img-thumbnail img-fluid w-100" src= {image} alt = {title} />
                </Col>
                <Col size="12 sm-8 md-10">
                    <p>{description}</p>
                </Col>
            </Row>
        </ListItem>
    );
}

export default Book;