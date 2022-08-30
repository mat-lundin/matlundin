// try accordion and if it looks bad use cards again
import Accordion from 'react-bootstrap/Accordion';
import projects from '../projects.json';

const dev = () => {
    return (

        <Accordion defaultActiveKey="0">
        {    projects.map((project)=>{
            return(
        <Accordion.Item eventKey={project.name} key={project.name}>
          <Accordion.Header>{project.name}</Accordion.Header>
          <Accordion.Body>
            {project.description}
          </Accordion.Body>
        </Accordion.Item>)
            })}
        </Accordion>

    //     <Accordion>
    //     <Accordion.Item eventKey="0">
    //       <Accordion.Header>Accordion Item #1</Accordion.Header>
    //       <Accordion.Body>
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //         minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //         aliquip ex ea commodo consequat. Duis aute irure dolor in
    //         reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    //         pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //         culpa qui officia deserunt mollit anim id est laborum.
    //       </Accordion.Body>
    //     </Accordion.Item>
    //     <Accordion.Item eventKey="1">
    //       <Accordion.Header>Accordion Item #2</Accordion.Header>
    //       <Accordion.Body>
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //         minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //         aliquip ex ea commodo consequat. Duis aute irure dolor in
    //         reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    //         pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //         culpa qui officia deserunt mollit anim id est laborum.
    //       </Accordion.Body>
    //     </Accordion.Item>
    //   </Accordion>
        
    )
}

export default dev