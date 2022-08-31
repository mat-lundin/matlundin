// try accordion with react-markdown https://blog.logrocket.com/how-to-safely-render-markdown-using-react-markdown/
// turn github gists into blog posts to start
import Accordion from 'react-bootstrap/Accordion';
// import Image from 'react-bootstrap/Image';
// import Button from 'react-bootstrap/Button';
import blogpost from '../blogs/regex_tutorial.md';
import Markdown from 'markdown-to-jsx';
import React, { useState, useEffect } from 'react';

// https://dev.to/anobjectisa/how-to-dynamically-load-markdown-files-in-react-markdown-to-jsx-53fl
// https://www.npmjs.com/package/markdown-to-jsx
const Blog = () => {
    const [post, setPost] = useState('')

    useEffect(()=>{
        import('../blogs/regex_tutorial.md')
        .then(res => {
            fetch(res.default)
            .then(res => res.text())
            .then(res => setPost(res))
            .catch(err => console.log(err))
        })
    })
    return (
        <>
        {/* <div>
            <Markdown>
                {post}
            </Markdown>
        </div> */}

        <h2>As I learn and grow as a developer, I'll write my thoughts here:</h2>
{/* to add an already open item, do <Accordion defaultActiveKey="0"> */}
        <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>How Does The Regular Expression To Find an HTML Tag Work?</Accordion.Header>
        <Accordion.Body>
        <Markdown>
                {post}
            </Markdown>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </>
    )
}

export default Blog