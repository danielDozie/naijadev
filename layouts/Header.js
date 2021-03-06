import Head from 'next/head'
import {Navbar, Nav, NavDropdown, Container, Button} from 'react-bootstrap'
import styles from '../styles/Layout.module.css'

export default function Header() {
    return (<><Head>
                <title>Naira Dev Avenue</title>
            </Head>
        <div>
<Container>            
<Navbar collapseOnSelect expand="lg" bg="light" variant="dark" fixed="top" className={styles.headerShadow}>
  <Navbar.Brand href="/" className={styles.logoText}>Naira Dev Avenue</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto header">
      <Nav.Link href="/about" >About</Nav.Link>
      <Nav.Link href="/how-it-works" >How it works</Nav.Link>
    </Nav>
    <Nav className="justify-content-end" >
      <NavDropdown title="Useful Links" id="collasible-nav-dropdown" >
        <NavDropdown.Item href="/#">Strapi Doc</NavDropdown.Item>
        <NavDropdown.Item href="/">Nextjs Docs</NavDropdown.Item>
        <NavDropdown.Item href="/">Github repo</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/">Headless CMS</NavDropdown.Item>
      </NavDropdown>
      <Button className={styles.mybtn}>Recommend a Dev</Button>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</Container>

        </div>
    </>)
}
