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
                        {/* align name and description like Pipe Dreams looks? */}
                        <Accordion.Header><p><h5>{project.name}</h5></p> <p>{project.description}</p> </Accordion.Header>
                        <Accordion.Body style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                            <Image src={project.image} fluid="1" thumbnail="1" style={{ height: "20%", width: "20%" }} alt={project.name}></Image>
                            <Button style={{margin: '.6%'}}>Visit</Button>
                            <Button>Github</Button>
                        </Accordion.Body>
                    </Accordion.Item>)
            })}
        </Accordion>
        </div>
    )
}

export default dev