import { Col, Row } from "react-bootstrap";
import { DuckItem } from "./DuckItem";
import duckItems from "../data/ducks.json"

export function About() {
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