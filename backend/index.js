const express = require("express");
const ytdl = require("ytdl-core");


const app = express();
var cors = require("cors");
app.use(cors());

app.get("/download", async (req, res) => {
    try{
        const url = req.query.url
        const videoId = await ytdl.getURLVideoID(url)
        const metaInfo = await ytdl.getInfo(url)
        let data = {
            url: "https://www.youtube.co/embed/" + videoId,
            info: metaInfo.formats
        }
        return res.send(data)
    } catch(error) {
        return res.status(500)
    }
})

app.listen(8050, () => {
    console.log(`Server is running on PORT: 8050`)
})
