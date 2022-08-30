import Card from 'react-bootstrap/Card';

const home = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="images/headshot.jpeg" />
        <Card.Body>
          <Card.Title>Mat Lundin</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Developer</Card.Subtitle>
          <Card.Text>
          Full stack web developer with 10 years of experience in the tech industry seeking an opportunity to develop impactful software and continually learn on a positive, forward-thinking team.
          </Card.Text>
          <Card.Link href="https://www.linkedin.com/in/mathew-lundin/">LinkedIn</Card.Link>
          <Card.Link href="https://github.com/mat-lundin">Github</Card.Link>
        </Card.Body>
      </Card>
        
        
    )
}

export default home