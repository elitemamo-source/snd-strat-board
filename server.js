// Minimal zero-dependency static server for the SnD Strat Board. Railway sets PORT.
const http=require("http"),fs=require("fs"),path=require("path");
const PORT=process.env.PORT||3000, ROOT=__dirname;
const TYPES={".html":"text/html; charset=utf-8",".js":"application/javascript; charset=utf-8",".css":"text/css",".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg",".svg":"image/svg+xml",".json":"application/json",".ico":"image/x-icon"};
http.createServer((req,res)=>{
  let u=decodeURIComponent(req.url.split("?")[0]); if(u==="/"||u==="")u="/index.html";
  const fp=path.normalize(path.join(ROOT,u));
  if(!fp.startsWith(ROOT)){res.writeHead(403);res.end("Forbidden");return;}
  fs.readFile(fp,(err,data)=>{
    if(err){fs.readFile(path.join(ROOT,"index.html"),(e2,d2)=>{if(e2){res.writeHead(404);res.end("Not found");return;}res.writeHead(200,{"Content-Type":TYPES[".html"]});res.end(d2);});return;}
    const ext=path.extname(fp).toLowerCase();
    res.writeHead(200,{"Content-Type":TYPES[ext]||"application/octet-stream"});res.end(data);
  });
}).listen(PORT,()=>console.log("SnD Strat Board on port "+PORT));
