// try accordion with react-markdown https://blog.logrocket.com/how-to-safely-render-markdown-using-react-markdown/
// turn github gists into blog posts to start
import Accordion from 'react-bootstrap/Accordion';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';


const blog = () => {
    return (
        <></>

        // <Accordion defaultActiveKey="0">
        //     {projects.map((project) => {
        //         return (
        //             <Accordion.Item eventKey={project.name} key={project.name}>
        //                 <Accordion.Header>{project.name} - {project.description}</Accordion.Header>
        //                 <Accordion.Body>
        //                     <Image src={project.image} fluid="1" thumbnail="1" style={{ height: "20%", width: "20%" }}></Image>
        //                     <p><Button>Visit</Button>
        //                     <Button>Github</Button></p>
        //                 </Accordion.Body>
        //             </Accordion.Item>)
        //     })}
        // </Accordion>
    )
}

export default blog