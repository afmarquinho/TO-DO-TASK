import { Outlet, Link } from "react-router-dom";
import styled from "@emotion/styled";

const Contenedor = styled.div`

  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    height: 100vh;
    
  }
`;
const Aside = styled.aside`
  grid-column: 1;
  background-color: #0089ac;
`;
const Main = styled.main`
  grid-column: 2/7;
  margin: 2rem;
`;
const H1 = styled.h1`
  background-color: rgb(15, 159, 193);
  color: #ffff08;
  text-align: center;
  padding: 1rem;
  font-size: 6rem;
  font-weight: bold;
`;
const Nav = styled.nav`

@media (min-width: 679px) {
  margin-top: 4rem;
}
`;

const Layout = () => {
    return (
      <Contenedor>
        <Aside>
          <H1>Tasky</H1>
          <Nav>
            <Link to="/mis-tareas" className="link__tareas">
              Mis Tareas
            </Link>
            <Link to="/calendario" className="link__calendario">
              Caledario
            </Link>
            <Link to="/blog" className="link__blog">
              Blog
            </Link>
          </Nav>
        </Aside>
        <Main>
          <Outlet></Outlet>
        </Main>
      </Contenedor>
    );
  };
  

export default Layout
