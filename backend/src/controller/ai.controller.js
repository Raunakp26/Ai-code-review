const aiService = require("../service/ai.service")
module.exports.getReview = async (req, res) => {
  console.log("👉 FULL REQUEST BODY:", req.body); 
    const code = req.body.code;

    if (!code) {
        return res.status(400).send("Prompt is required");
    }

    const response = await aiService(code);


    res.send(response);

}