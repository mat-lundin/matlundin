import Card from 'react-bootstrap/Card';

const home = () => {
    return (
        // card border and maybe a shadow
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', background: 'radial-gradient(circle, #808080 0%, #FFFFFF 100%)'}}>
        <Card style={{ width: '28rem', margin: '2%', borderStyle:'solid', borderColor:'black', borderWidth: '3px', borderRadius: '10px' }}>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "images/headshot.jpeg"} style={{borderRadius: '7px'}}/>
        <Card.Body>
          <Card.Title>Mat Lundin</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Developer</Card.Subtitle>
          {/* remove card border and have card text background accept background of page */}
          <Card.Text>
          Full stack web developer with 10 years of experience in the tech industry seeking an opportunity to develop impactful software and continually learn on a positive, forward-thinking team. In my spare time I love bike riding, making <a href='/music'>music</a>, and of course coding!
          </Card.Text>
          <Card.Link href="https://www.linkedin.com/in/mathew-lundin/">LinkedIn</Card.Link>
          <Card.Link href="https://github.com/mat-lundin">Github</Card.Link>
        </Card.Body>
      </Card>
      </div>
    )
}

export default home