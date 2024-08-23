import { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class CustomGallery extends Component {

    state = {
        films: {
            Search: []
        }
        
    }

    fetchMovie = () => {
        const url = `http://www.omdbapi.com/?apikey=6be9af59&s=${this.props.saga}`
        fetch(url)
            .then((response) => {
                if (response.ok) {
                    console.log('sei qui')
                    return response.json()
                } else {
                    throw new Error('Errore')
                }
            })
            .then((arrayOfFilms) => {
                this.setState({
                    films: arrayOfFilms
                })

            })
            .catch((err) => {
                console.log('non ci siamo', err)
            })
    }

    componentDidMount = () => {
        this.fetchMovie()
    }


    render() {
        return (
            <>
                {/* <div className="d-flex justify-content-between">
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
                </div> */}

                <h4> {this.props.saga}</h4>
                <Row className="mb-4" xs={1} sm={2} lg={4} xl={6}>

                    {this.state.films.Search.map((film) => (
                        <Col className="mb-2 text-center px-1">
                            <img className="img-fluid" src={film.Poster} alt="cover" />
                            <p className='text-light'> {film.Title}</p>
                        </Col>
                    ))}
                </Row>

            </>
        )
    }
}

export default CustomGallery
