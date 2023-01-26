import { Card } from "react-bootstrap";

export function DuckItem({id, name, scientificName, lifespan, conservationStatus, diet, imgUrl}) {
    return (
        <Card className="h-100">
            <Card.Img 
                varoant="top"
                src={imgUrl}
                height="200px"
                style={{objectFit: "cover"}}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">{name}</span>
                </Card.Title>
                <div className="mt-auto">
                    <span className="fs-2">{scientificName}</span>
                    <br />
                    {/* <span className="fs-2">{imgUrl}</span> */}
                    <span className="fs-2">{lifespan}</span>
                    <br />
                    <span className="fs-2">{conservationStatus}</span>
                    <br />
                    <span className="fs-2">{diet}</span>
                    <br />
                    {/* <hr /> */}
                </div>
            </Card.Body>
        </Card>
    )
} 