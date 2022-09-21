// table for projects instead of cards or accordion
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import projectData from '../projects.json';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import {Background} from './Styles';


// have a modal or a drawer with the screenshot and links
// once you open the project the pop up will have an X to quit, link buttons, and you can use the arrow keys to go between projects in the carousel
const dev = () => {

    return (
        <div style={{background: 'linear-gradient(to bottom, #808080 0%, #FFFFFF 100%)'}}>
        <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding:"2%" }}>Coding Projects I've Worked On</h2>
        <div style={{ margin: '20%', marginTop:"1%", marginBottom:"1%" }}>
            <Table striped responsive>
                <tbody>
                    {projectData.map((project) => {
                        const renderTooltip = (props) => (
                            <Tooltip id="button-tooltip" {...props}>
                                <Button variant="dark" width="10%"><Image src={project.image} href={project.url} target="_blank" fluid style={{ margin: 0 }} alt={project.name}></Image></Button>
                                {project.name}
                            </Tooltip>)
                        return (
                            <tr key={project.name}>
                                <td width="11%">    <OverlayTrigger
                                    placement="left"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip}
                                >
                                    <Button variant="light" href={project.url}><Image src={project.image} target="_blank" fluid style={{ margin: 0 }} alt={project.name}></Image></Button>
                                </OverlayTrigger></td>
                                <td width="11%" style={{ fontWeight: 'bold' }}>{project.name}</td>
                                <td width="30%">{project.description}</td>
                                <td width="13%"><Button style={{ marginLeft: "6%", marginTop:"10%" }} href={project.repoUrl} target="_blank">Github</Button><Button style={{ marginLeft: "6%", marginTop:"10%" }} href={project.url} target="_blank">Visit</Button></td>
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
        </div>
    )
}

export default dev