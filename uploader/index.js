import express from "express";
import multer from "multer";

const upload = multer({ dest: "/tmp" });
const app = express();

app.post("/upload", upload.single("file"), async (req, res) => {
  const platform = req.body.platform;
  const caption = req.body.caption || "";
  const filePath = req.file.path;

  try {
    if (platform === "tiktok") {
      return res.json({ status: "ok", message: "TikTok upload placeholder" });
    } else if (platform === "instagram") {
      return res.json({ status: "ok", message: "Instagram upload placeholder" });
    } else {
      return res.status(400).json({ error: "Platform not supported" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
});

app.listen(3001, () => console.log("Uploader running on port 3001"));
