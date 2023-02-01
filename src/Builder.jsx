import { PDFViewer, Canvas } from "@react-pdf/renderer";
import React, { useRef } from "react";
import { useState } from "react";

import Resume from "./components/Resume";
import "./Builder.css";

function Builder() {
  const form = useRef();
  const [nameText, setName] = useState("");

  return (
    <div className="builder">
      <div className="left">
        <form ref={form}>
          <input
            type="text"
            name="uname"
            value={nameText}
            onChange={(e) => setName(e.target.value)}
          />
          <input type="submit" />
        </form>
      </div>
      <PDFViewer className="pdf">
        <Resume />
      </PDFViewer>
    </div>
  );
}

export default Builder;
