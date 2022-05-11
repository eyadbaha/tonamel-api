import puppeteer from 'puppeteer'
import express from 'express'

const app = express();

app.get("/:id",(req,res)=>{
    const id = req.params.id;
    (async () => {
        const noReturn = JSON.stringify({"title":null,"date":null,"details":null});
        const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome-stable',
        headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox','--disable-gpu']});
        const page = await browser.newPage();
        await page.setDefaultNavigationTimeout(0); 
        await page.goto(`https://tonamel.com/competition/${id}`);
        await page.waitForSelector(".title").then(() => {
          }).catch(e => {
            res.end(noReturn);
          });;
        const html = await page.content();
        let date = html.match(/\w{3} \d{1,2} \d{4} \d{1,2}:\d{2} \w{2}/);
        date ? date = Date.parse(date[0])/1000 : (res.end(noReturn));
        let title = /<title>\n(.*) \| Tonamel/.exec(html);
        title ? title = title[1] : (res.end(noReturn));
        let details = /Tournament Details<\/span>[^]*class=\"linkify-text\">([^]*)<\/div><\/span>/.exec(html);
        details ? details = details[1] : (res.end(noReturn));
        const data = JSON.stringify({title,date,details});
        res.send(data);
        await browser.close();
      })();
})
app.get("/",(req,res)=>{
    res.send("v0")    
})
const port = 8080;

app.listen(port,()=>{
    console.log(`http://localhost:${port}/dJGtL`)
})