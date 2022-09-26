import Accordion from 'react-bootstrap/Accordion';
import Markdown from 'markdown-to-jsx';
import React, { useState, useEffect } from 'react';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
const fs = require('fs')

// concept from https://dev.to/anobjectisa/how-to-dynamically-load-markdown-files-in-react-markdown-to-jsx-53fl
// render blog post .md files for the accordion items
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

  // create array of filenames
const blogFiles = fs.readdir('../blogs/',(err, data)=>{
  if (err) {
    console.log(err)
  }
  else {
    console.log(data)
    blogPostArr(data)
  }
});

const blogPostArr = function(files){
  files.map((file)=>{
      import(file)
        .then(res => {
          fetch(res.default)
            .then(res => res.text())
            .then(res => {return res})
            .catch(err => console.log(err))
        })
    })
  }


  return (
    <div style={{ background: 'linear-gradient(to bottom, #808080 0%, #FFFFFF 100%)' }}>
      <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: "2%" }}>My Thoughts About Tech and Development</h2>
      <Accordion style={{ margin: '20%', marginTop: '1%', marginBottom: '1%', minHeight: '58vh' }}>
        <Accordion.Item eventKey="0">
          {/* new font for headers */}
          <Accordion.Header style={{fontWeight: "bold"}}>How Does The Regular Expression To Find an HTML Tag Work?</Accordion.Header>
          <Accordion.Body>
            <Markdown>
              {post0}
            </Markdown>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header style={{fontWeight: "bold"}}>QR Codes</Accordion.Header>
          <Accordion.Body>
            <Markdown>
              {post1}
            </Markdown>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion style={{ margin: '20%', marginTop: '1%', marginBottom: '1%', minHeight: '58vh' }}>
      {blogPostArr.map((post)=>{
        <AccordionItem eventKey={post}>
          <AccordionHeader>posties</AccordionHeader>
          <Accordion.Body>
            <Markdown>{post}</Markdown>
          </Accordion.Body>
        </AccordionItem>
      })}
      </Accordion>
    </div>
  )
    }
export default Blog