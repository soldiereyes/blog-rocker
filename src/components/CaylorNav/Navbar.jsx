
import { Container, Row, Col } from "reactstrap"
import Modal from "../CaylorModal/Modal"
import style from "./Navbar.module.css"
import { useState } from "react"

function Navbar() {
    const [showModal, setShowModal] = useState(true)

    return (
        <Container fluid={true} className={style.Navbar}>
            <Row className="h-100">
                <Col className={style.Navbar__container}>
                    <Col >LOGO</Col>
                    <ul>
                        <li onClick={() => setShowModal(true)}>ll</li>
                        <li>lolo</li>
                        <li>lolo</li>
                    </ul>
                </Col>
            </Row>
            {showModal && <Modal closeModalHandler={() =>setShowModal(false)} title="header" />}
        </Container >
    )
}


export default Navbar