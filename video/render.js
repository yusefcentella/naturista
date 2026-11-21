const {chromium}=require('playwright');const fs=require('fs');
(async()=>{const FPS=24,DUR=30,N=FPS*DUR;const dir=process.argv[2];fs.mkdirSync(dir,{recursive:true});
const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920},deviceScaleFactor:1});
await p.goto('file://'+process.argv[3]);await p.waitForTimeout(500);
const lim=process.argv[4]?+process.argv[4]:N;
for(let i=0;i<lim;i++){await p.evaluate(t=>setT(t),i/FPS);await p.screenshot({path:`${dir}/f${String(i).padStart(4,'0')}.jpg`,type:'jpeg',quality:92});}
await b.close();})();
