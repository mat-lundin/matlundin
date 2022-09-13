import Card from 'react-bootstrap/Card';

const home = () => {
    return (
        // move card using margins, etc. or get rid of card in favor of straight divs
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <Card style={{ width: '18rem', margin: '2%' }}>
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
      </div>
    )
}

export default home