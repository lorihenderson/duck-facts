import { Col, Row } from "react-bootstrap";
import { DuckItem } from "./DuckItem";
import duckItems from "../data/ducks.json"

export function About() {
    // add a duck call functionality
    return (
        <>
            <h1> About </h1>
            <Row>
                {duckItems.map(item => (
                    <Col key={item.id}>
                        <DuckItem {...item} />
                    </Col>
                ))}
            </Row>
        </>
    )
}