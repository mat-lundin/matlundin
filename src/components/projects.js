// try accordion and if it looks bad use cards again
import Accordion from 'react-bootstrap/Accordion';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import projects from '../projects.json';

const dev = () => {
    return (
        <div style={{margin: '6%'}}>
        <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Coding Projects I've Worked On</h2>
        <Accordion defaultActiveKey="0">
            {projects.map((project) => {
                return (
                    <Accordion.Item eventKey={project.name} key={project.name}>
                        <Accordion.Header>{project.name} - {project.description}</Accordion.Header>
                        <Accordion.Body>
                            <Image src={project.image} fluid="1" thumbnail="1" style={{ height: "20%", width: "20%" }}></Image>
                            <p><Button style={{margin: '.6%'}}>Visit</Button>
                            <Button>Github</Button></p>
                        </Accordion.Body>
                    </Accordion.Item>)
            })}
        </Accordion>
        </div>
    )
}

export default dev