import cors from "cors";
import express from "express";
import path from "path";
import axios from "axios";

const app = express();
const port = 3000;

app.use(cors({ origin: true, credentials: true }));
app.use(express.static(path.join(__dirname, "dist")));
app.get("*", async (_, res) => {
  const page = await axios.get<Blob>(
    "https://storage.googleapis.com/microfrontend-bucket-dev/host/index.html",
    {
      responseType: "blob", // important
    }
  );

  res.set("Content-Type", "text/html");
  res.send(page.data);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
