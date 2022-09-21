import Accordion from 'react-bootstrap/Accordion';
import Markdown from 'markdown-to-jsx';
import React, { useState, useEffect } from 'react';

// concept from https://dev.to/anobjectisa/how-to-dynamically-load-markdown-files-in-react-markdown-to-jsx-53fl
const Blog = () => {
  const [post0, setPost0] = useState('')
  const [post1, setPost1] = useState('')

  useEffect(() => {
    import('../blogs/regex_tutorial.md')
      .then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(res => setPost0(res))
          .catch(err => console.log(err))
      })
  })
  useEffect(() => {
    import('../blogs/qr_codes.md')
      .then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(res => setPost1(res))
          .catch(err => console.log(err))
      })
  })
  // footer positioning based on https://kiranworkspace.com/how-to-stick-footer-to-bottom-of-page/
  return (
    <div style={{background: 'linear-gradient(to bottom, #808080 0%, #FFFFFF 100%)', flex:1}}>
        <h2 style={{ display: 'flex', flexDirection:'column', minHeight:'100vh', justifyContent: 'center', alignItems: 'center', padding:"2%" }}>As I grow and learn as a developer, I'll write my thoughts here</h2>
    <div style={{ margin: '20%', marginTop:"1%", marginBottom:0, flexDirection:'column' }}>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>How Does The Regular Expression To Find an HTML Tag Work?</Accordion.Header>
          <Accordion.Body>
            <Markdown>
              {post0}
            </Markdown>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>QR Codes</Accordion.Header>
          <Accordion.Body>
            <Markdown>
              {post1}
            </Markdown>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
    </div>
  )
}

export default Blog