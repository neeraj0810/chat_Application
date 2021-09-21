import { Navbar, Nav, Container , Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({userName}) => {
    const onButtonClick = () =>{
        localStorage.clear();
        window.location.reload();
    }
    return(
        <Navbar bg="dark"  variant="dark">
            <Container>
                <Container>
                    <h3 className = "text-center text-light"> Welcome {userName}</h3>
                </Container>
            <Button variant="outline-success" onClick ={onButtonClick}>Logout</Button>
            </Container>
        </Navbar>
    );
}
export default Header