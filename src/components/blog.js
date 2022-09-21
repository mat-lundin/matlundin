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
  return (
    <>
        <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin:"2%" }}>As I grow and learn as a developer, I'll write my thoughts here</h2>
    <div style={{ margin: '20%', marginTop:"1%", marginBottom:"1%" }}>
      {/* to add an already open item, do <Accordion defaultActiveKey="0"> */}
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
    </>
  )
}

export default Blog