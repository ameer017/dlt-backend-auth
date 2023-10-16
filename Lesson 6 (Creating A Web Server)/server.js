const express = require("express");
const { METHODS } = require("http");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3100;

// app.get("/", (req, res) => {
//   res.sendFile("/views/index.html", { root: __dirname });
// });

          // The OTHER METHOD WE CAN USE TO GET ROUTE

// app.get("/",(req,res) =>{
//   res.sendFile(path.join(__dirname, "views","index.html"))
// })

          //ALTERNATIVE METHOD TO CREATE A ROUTE
app.get("^/$|/index.html", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

        // ANOTHER WAY IT CAN BE DONE IF YOU THINK TO USE THE .HTML BUT IT WOULD ONLY BE SEEN BY THE SERVER SIDE NOT ON THE CLIENT SIDE 
// app.get("^/$|/index(.html)?", (req, res) => {
//   res.sendFile(path.join(__dirname, "views", "index.html"));
// });

app.get("/new-page(.html)?", (req, res) => {
  res.sendFile("/views/new-page.html", { root: __dirname });
});

// app.get("/testing(.html)?", (req, res) => {
//   res.sendFile("/views/testing.html", { root: __dirname });
// });


        // TO REDIRECT
app.get("/testing(.html)?", (req,res) =>{
  res.redirect(301, "new-page.html")
})

    // ALTERNATIVE METHOD
// app.get("/testing(.html)?" , (req,res) =>{
//   res.redirect(301, "new-page.html")})


            //ROUTE HANDLER
app.get("/hello(.html)?", (req,res,next) =>{
  console.log("Hmm we are kuku moving");
  next() //NEXT METHOD PASS CONTROL TO THE NEXT HANDLER
}, (req,res) =>{
    res.send("hey wats up")
})

      // CHAINING ROUTE HANDLER
      const cohort1 = (req,res,next) =>{
        console.log("kanas Qodri");
        next()
      }
      const cohort2 = (req,res,next) =>{
        console.log("Muhamed Rocco");
        next()
      }
      const cohort3 = (req,res,next) =>{
        console.log("Muhammed Kennymax");
        next()
      }
      const cohort4 = (req,res,next) =>{
        console.log("supreme AliyahFateher");
    
        res.send("Dem be guru in tech")
      }
      
app.get("/big-devs(.html)?", [cohort1, cohort2, cohort3, cohort4])




// TO GET 404 PAGE USING * AS EMPTY FILE PATH WHICH IS NULL
app.get("/*", (req,res) =>{
  res.sendFile(path.join(__dirname, "views", "404.html"))
})

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
