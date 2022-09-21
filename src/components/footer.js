// linkedin, indeed, github, bandcamp?
export default function Footer(){
    return(
      <nav className="navbar navbar-expand-lg navbar-light justify-content-center" style={{left:0, right:0, bottom:0, marginTop:'1%'}}>    
    <div className="m-2">
        <a href="https://www.linkedin.com/in/mathew-lundin/"><img src="/images/LinkedIn_icon_circle.svg" alt="LinkedIn"></img></a>
      </div>
      <div className="m-2">
        <a href="https://github.com/mat-lundin"><img src="/images/Octicons-mark-github.svg.png" alt="Github"></img></a>
      </div>        
        </nav>
    )
}