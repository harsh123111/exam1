var express =require("express");
var app = express();
app.get("/",(req,res)=>{
    res.send("</h1> Exam of SDM </h1>"
    +"<hr/>"
    +"<h3> Sylabus of SDM module</h3>"
    +"<br/>"
    +"<ol>"
    +"<li> SDLC </li>"
    +"<li>Plannig</li>"
    +"<li>analysis</li>"
    +"<li>Developing</li>"
    +"<li>Testing</li>"
    +"<li>Maintainace</li>"
    +"</ol>");
});
var server=app.listen(9000);
console.log("exam running on port 9000");
