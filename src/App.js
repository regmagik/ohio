import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { Button, Collapse, Container, Jumbotron, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import './App.css';

function Home() {
	return (
		<>
		<Container>
		<Jumbotron>
			<h1>Physician Support Services</h1>
			<p>We are in medical billing consulting and auditing business since 2014.
			We provide professional services for medical practices. Our staff has many years of medical billing experience.</p>
			<Button href="/contact">Free Consultation</Button>
		</Jumbotron>
		<p>As a medical billing consulting and auditing company, we have one mission: to increase your income
		while lowering your overhead.
		</p><p>We will check your medical billing reports and answer the question: “Do we need to
		improve the billing process for better reimbursement?”
		We provide first consultation for free and you don’t have to pay for professional information about your
		practice financial status.
		</p><p>If during audit we find weak area in your billing process, we can suggest and implement steps to improve
		reimbursement.</p>
		</Container>
		<Audit/>
		<Consulting/>
		<Contact/>
		</>
	);
}  

function Audit() {
	const weLookFor = ["Claims submission, correction and/or re-submission.", 
		"Weekly/monthly customized reports.", 
		"Patients’ statements.", "Payments posting/adjustment.", 
		"Denial management.", "Tracking claims management.", 
		"Managing collection accounts.", 
		"Patient inquires.", "A/R recovery.", "Aging report."];
	return (
		<div className="audit pt-4 pb-4">
			<Container>

			<h1>Medical practice audit</h1>
		<h2>What it does:</h2>
		<ol>
		<li>Reducing claim denials caused by inappropriate coding or insufficient documentation.</li>
		<li>Ensuring proper documentation that support reported services and procedures.</li>
		<li>Discovering overpayments and protecting against false claims liability.</li>
		<li>Identifying reimbursement deficiencies.</li>
		</ol>
		<h2>What we will look for:</h2>
		<ol>{weLookFor.map((s, i) => <li key={i}>{s}</li>)}</ol>
		</Container>
		</div>
	);
}
function Consulting() {
	return (
		<div className="consulting py-4">
		<Container>
		<h1>Medical practice consulting</h1>
		<h2>Topics include:</h2>
		<ol><li>Charge capture.</li>
		<li>Fee schedule.</li>
		<li>A/R review.</li>
		<li>Financial review.</li>
		<li>Credentialing.</li>
		<li>Appeal underpayments and erroneous denials.</li></ol>
		<p>Our goal is to help medical practice providers to get maximum reimbursement for provided medical
services without any delays.</p>
<h2>Credentialing services</h2>
<ol>
		<li>NPI Creation.</li>
		<li>Commercial contracting.</li>
		<li>Government contracting.</li>
		<li>Out of Network contracting.</li>
		<li>Single case agreement.</li>
		<li>Additional provider(s) for existing contract(s).</li>
	</ol>
</Container>
		</div>
	);
}
	
function Contact() {
	return (
		<div className="contact py-4">
		<Container>
		<h1>Contact</h1>
		<div>Call: 614-940-3230</div>
		<div>Email: viktoriyapss@att.net</div>
		<div>Web: www.ohiophysiciansupport.com</div>
		</Container>
		</div>
	);
}
	
function App() {
  return (
	<Layout>
		<Route exact path='/' component={Home} />
		<Route path='/medical-billing-audit' component={Audit} />
		<Route path='/medical-billing-consulting' component={Consulting} />
		<Route path='/contact' component={Contact} />
	</Layout>
  );
}

export default App;

function Layout(props) {
return (
	<div>
		<NavMenu />
		{/* <Container> */}
		{props.children}
		{/* </Container> */}
		<hr/>
		<section className="App footer py-4">
		Copyright &copy; {new Date().getFullYear()} by Boris Guzner.
		</section>
	</div>
	);
}
  export function NavMenu(props) {
  
	const [state, setState] = useState({
		collapsed: true
	});

	function toggleNavbar () {
	  setState(s => ({...s,
		collapsed: !s.collapsed
	  }));
	}
  
	  return (
		<header>
		  <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
			<Container>
			  <NavbarBrand href="/">Physician Support</NavbarBrand>
			  <NavbarToggler onClick={toggleNavbar} className="mr-2" />
			  <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!state.collapsed} navbar>
				<Nav>
				  <NavItem>
					<NavLink className="text-dark" href="/">Home</NavLink>
				  </NavItem>
				  <NavItem>
					<NavLink className="text-dark" href="/medical-billing-audit">Audit</NavLink>
				  </NavItem>
				  <NavItem>
					<NavLink className="text-dark" href="/medical-billing-consulting">Consulting</NavLink>
				  </NavItem>
				  <NavItem>
					<NavLink className="text-dark" href="/contact">Contact</NavLink>
				  </NavItem>
				</Nav>
			  </Collapse>
			</Container>
		  </Navbar>
		</header>
	  );
}
  