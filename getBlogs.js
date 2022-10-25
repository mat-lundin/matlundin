// create JSON file of file names in /blogs
// should this be a class?
const fs = require('fs')
let blogs = {
    files:[]
}

  // create array of filenames
  const blogFiles = fs.readdir('./src/blogs',(err, data)=>{
    if (err) {
      console.log(err)
    }
    else {
      // console.log(data)
      blogs.files = data
      write(blogs)
    }
  });

  function write(blogs){
    const blogData = JSON.stringify(blogs);
    fs.writeFile('./src/blogs/blogData.json', blogData, (err) => {
      if (err)
        console.log(err);
      else {
        console.log("File written successfully\n");
        // console.log("The written has the following contents:");
        // console.log(fs.readFileSync('.src/blogs/blogData.json', "utf8"));
      }
    });
  }
  

blogFiles
