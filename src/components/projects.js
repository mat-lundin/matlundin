// table for projects instead of cards or accordion
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import projectData from '../projects.json';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


// have a modal or a drawer with the screenshot and links instead of accordion
// once you open the project the pop up will have an X to quit, link buttons, and you can use the arrow keys to go between projects in the carousel
// replace accordion with table of name and image on left, description in middle, links on right
const dev = () => {

    return (
        <div style={{ margin: '6%' }}>
            <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Coding Projects I've Worked On</h2>
            <Table striped responsive>
                <thead>
                    <tr>
                        <th width="11%">img</th>
                        <th>name</th>
                        <th>desc</th>
                        <th width="11%">links</th>
                    </tr>
                </thead>
                <tbody>
                    {projectData.map((project) => {
                        const renderTooltip = (props) => (
                            <Tooltip id="button-tooltip" {...props}>
                                <Button variant="dark" width="10%"><Image src={project.image} href={project.url} target="_blank" fluid style={{ margin: 0 }} alt={project.name}></Image></Button>
                                {project.name}
                            </Tooltip>)
                        return (
                            <tr key={project.name}>
                                <td>    <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip}
                                >
                                    <Button variant="light" href={project.url}><Image src={project.image} target="_blank"  fluid style={{ margin: 0 }} alt={project.name}></Image></Button>
                                </OverlayTrigger></td>
                                <td>{project.name}</td>
                                <td>{project.description}</td>
                                <td><Button style={{ margin: "1%" }}>Visit</Button><Button>Github</Button></td>
                            </tr>
                        )
                    })}
                    {/* <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr> */}
                </tbody>
            </Table>
        </div>
    )
}

export default dev