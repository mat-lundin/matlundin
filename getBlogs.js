const fs = require('fs')

  // create array of filenames
  const blogFiles = fs.readdir('./src/blogs',(err, data)=>{
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

blogFiles
