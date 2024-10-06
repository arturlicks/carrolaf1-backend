import { app } from "./app.js";
import "dotenv/config";

const PORT = process.env.PORT || 3000;
// create server
app.listen(PORT, () => {
  console.log(`Server is connected at port ${PORT}`);
});