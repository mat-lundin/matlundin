import React from "react";
import {Container, Row} from 'react-bootstrap'
import musicData from '../music.json'
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

export default function Music(){
    // different background image, or give whole site a background color?
   return( 
    <div style={{background: 'radial-gradient(circle, #A9A9A9 0%, #FFFFFF 100%)'}}>
      {/* make this not a heading, maybe add a Music heading if needed, then make sure footer is either totally off the screen or on */}
      <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop:"2%" }}>Stream my music free right from this page!</h2>
    <h5 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding:"0%" }}>In my free time I use Digital Audio Workstations (Reason, Ableton, Audacity) to create and record music.</h5>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin:"25%", marginTop:"1%", marginBottom:"5%", paddingTop:'3%', maxHeight: '90vh', minheight:'50vh' }}>
   <Container flex="true" style = {{color:"black",  margin: '2%', borderStyle:"solid", borderColor: 'gray', borderRadius:"3%"}}>
         <RBCarousel           
            animation={true}
            autoplay={false}
              slideshowSpeed={2000}
              defaultActiveIndex={0}
              version={4}
            >

        {musicData.map((album)=>{
           return (
            <div key = {album.title} style={{textAlign: 'center'}}>
              <h4 style={{textAlign: 'center', marginTop: '2%'}}>{album.artist}</h4>
              <h3 style={{textAlign: 'center'}}>{album.title}</h3>
              {/* don't display link if not on bandcamp */}
              {album.bandcampUrl === "" ? null : <h3 style={{marginBottom: '1%'}}><a href={album.bandcampUrl} target="_blank" rel="noreferrer"><img src="/images/bandcamp-logo-svgrepo-com.svg" alt="bandcamp"></img></a></h3>}
              <img src={album.image} width='30%' alt={album.title}></img>
              <Row>
              <iframe title={album.title} style={{textAlign: 'center', fontFamily: "Work Sans", margin: '5% 15%', width: '70%', padding: '0%'}} src={album.spotEmbed} height="80" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
               </Row>
            </div>
           )
        })}

      </RBCarousel>
    </Container>
    </div>
    </div>
   )
}