import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
app = express()
app.use(express.static('reactFolderName/build'));
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'reactFolderName', 'build', 'index.html')));
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
