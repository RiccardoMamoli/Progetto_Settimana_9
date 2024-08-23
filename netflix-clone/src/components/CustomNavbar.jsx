import { Nav, Button, ListGroup, ListGroupItem, Container, Dropdown } from 'react-bootstrap';





function CustomNavBar() {
    return (
        <>
            <Nav className="navbar navbar-expand-lg" data-bs-theme="dark" style={{ backgroundColor: '#221f1f' }}>
                <Container fluid>
                    <a className="navbar-brand" href="#void">
                        <img src="/logo_netflix.png" alt="cover" style={{ width: "100px", height: "55px" }} />
                    </a>
                    <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </Button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ListGroup className="navbar-nav me-auto mb-2 mb-lg-0" >
                            <ListGroup.Item className="nav-item border-0 px-0" style={{ backgroundColor: '#221f1f' }}>
                                <a className="nav-link active fw-bold" href="#void">Home</a>
                            </ListGroup.Item>
                            <ListGroupItem className="nav-item border-0 px-0" style={{ backgroundColor: '#221f1f' }}>
                                <a className="nav-link fw-bold" href="#void">TV Shows</a>
                            </ListGroupItem>
                            <ListGroupItem className="nav-item border-0 px-0" style={{ backgroundColor: '#221f1f' }}>
                                <a className="nav-link fw-bold" href="#void">Movies</a>
                            </ListGroupItem>
                            <ListGroup.Item className="nav-item border-0 px-0" style={{ backgroundColor: '#221f1f' }}>
                                <a className="nav-link fw-bold" href="#void">Recently Added</a>
                            </ListGroup.Item>
                            <ListGroup.Item className="nav-item border-0 px-0" style={{ backgroundColor: '#221f1f' }}>
                                <a className="nav-link fw-bold" href="#void">My List</a>
                            </ListGroup.Item>
                        </ListGroup>
                        <div className="d-flex align-items-center">
                            <i className="bi bi-search icons"></i>
                            <div id="kids" className="fw-bold">KIDS</div>
                            <i className="bi bi-bell icons"></i>
                            <i className="bi bi-person-circle icons"></i>
                        </div>
                    </div>
                </Container>
            </Nav>

            <Container fluid className='px-4'>

                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <h2 className="mb-4">TV Shows</h2>
                        <div className="btn-group" role="group">
                            <Dropdown className="ms-4 mt-1">
                                <Dropdown.Toggle type="button" className="btn btn-secondary btn-sm dropdown-toggle rounded-0" data-bs-toggle="dropdown"
                                    aria-expanded="false" style={{ backgroundColor: "#221f1f" }}>
                                    Genres
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu border-0">
                                    <Dropdown.Item className='border-bottom-0'><a className="dropdown-item border-0" href="#void">Comedy</a></Dropdown.Item>
                                    <Dropdown.Item className='border-bottom-0'><a className="dropdown-item border-0" href="#void">Drama</a></Dropdown.Item>
                                    <Dropdown.Item><a className="dropdown-item" href="#void">Thriller</a></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div>
                        <i className="bi bi-grid icons"></i>
                        <i className="bi bi-grid-3x3 icons"></i>
                    </div>
                </div>

            </Container>


        </>
    )
}

export default CustomNavBar;