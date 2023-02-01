import { PDFViewer, Canvas } from "@react-pdf/renderer";
import React, { useRef } from "react";
import { useState } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  ReactPDF,
} from "@react-pdf/renderer";

import "./Builder.css";

function Builder() {
  const form = useRef();
  const [nameText, setName] = useState("");
  const Resume = () => (
    <Document>
      <Page size="A4" style={styles.body}>
        <Text style={styles.name}>{nameText}</Text>
        <Text style={styles.details}>
          aakashsuresh62@gmail.com | +91 893-982-4828 | LinkedIn
        </Text>
        <Text style={styles.subtitle}>Education</Text>
        <Text style={styles.text}>
          Sri Ramachandra Faculty of Engineering and Technology
        </Text>
        <Text style={styles.text}>
          B. Tech Computer Science Engineering (Artificial Intelligence and
          Machine Learning)
        </Text>
        <Text style={styles.text}>
          Courses: OOP in Java, Python, Algorithms, Operating Systems, Data
          Structures, IoT, Web Dev, Mobile Programming.
        </Text>
        <Text style={styles.text}>
          Roles: University’s Student Council Representative for Engineering
          Department.
        </Text>
        <Text style={styles.subtitle}>Skills</Text>
        <Text style={styles.text}>
          Languages: Python, JavaScript, HTML/CSS, Dart
        </Text>
        <Text style={styles.text}>
          Technologies: Firebase, Bash, Git, Docker, FlaskAPI, Jupyter Notebook,
          MongoDB, Flutter, ReactJS
        </Text>
        <Text style={styles.subtitle}>Professional Experience</Text>
        <Text style={styles.subtitle2}>Augray</Text>
        <Text style={styles.text}>Software Intern -Machine Learning Team </Text>
        <Text style={styles.text}>
          • Created and implemented various chat-bots developed with the RASA
          framework.
        </Text>
        <Text style={styles.text}>
          • Implemented a working QA bot using NLP features and deployed in web
          using flask and ngrok.
        </Text>
        <Text style={styles.text}>
          • Completed researching about various question answering techniques to
          return a sentence answer for a question asked.
        </Text>
        <Text style={styles.text}>
          • Developed pixel perfect front-end using Flutter SDK.
        </Text>
        <Text style={styles.subtitle2}>Brainvibe</Text>
        <Text style={styles.text}>
          Software Developer Intern – Flutter Team
        </Text>
        <Text style={styles.text}>
          • Developed pixel perfect and responsive front-end using Flutter SDK
        </Text>
        <Text style={styles.text}>
          • Assisted in Back-end services using Firebase with various tools like
          Authentication and Cloud storage.
        </Text>
        <Text style={styles.text}>
          • Completed researching about various question answering techniques to
          return a sentence answer for a question asked.
        </Text>
        <Text style={styles.text}>
          • Developed pixel perfect front-end using Flutter SDK.
        </Text>
        <Text style={styles.subtitle2}>Freelance</Text>
        <Text style={styles.text}>Web Developer</Text>
        <Text style={styles.text}>
          • Developed pixel perfect and responsive front-end using Flutter SDK
        </Text>
        <Text style={styles.text}>
          • Developed pixel perfect and responsive front-end using Flutter SDK
        </Text>
        <Text style={styles.subtitle}>Projects</Text>
        <Text style={styles.cert}>MeDo</Text>
        <Text style={styles.text}>To-do and Note taking Application</Text>
        <Text style={styles.cert}>ARQE</Text>
        <Text style={styles.text}>
          AR for Quality Education at SRET Hackathon ‘22{" "}
        </Text>
        <Text style={styles.cert}>Google Clone(Search Engine)</Text>
        <Text style={styles.text}>
          Search Functionality implemented with Google API
        </Text>
        <Text style={styles.cert}>Twitter Clone</Text>
        <Text style={styles.text}>
          Tweet functionality implemented using firebase CRUD operations
        </Text>
        <Text style={styles.cert}>Portfolio Website</Text>
        <Text style={styles.text}>Personal Portfolio website</Text>
        <Text style={styles.subtitle}>Certifications</Text>
        <Text style={styles.cert}>
          Complete Flutter Development Bootcamp with Dart 🔗
        </Text>
        <Text style={styles.cert}>
          Foundations of User Experience (UX) Design 🔗
        </Text>
        <Text style={styles.cert}>Blockchain Basics 🔗</Text>
        <Text style={styles.cert}>Programming with JavaScript 🔗</Text>
      </Page>
    </Document>
  );

  const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 35,
      paddingHorizontal: 20,
    },
    name: {
      fontSize: 20,
      textAlign: "center",
      fontFamily: "Times-Roman",
    },
    details: {
      fontSize: 11,
      textAlign: "center",
      marginBottom: 10,
      color: "grey",
    },
    subtitle: {
      fontSize: 14,
      marginHorizontal: 1,
      marginTop: 10,
      fontFamily: "Times-Roman",
      color: "grey",
      fontWeight: 700,
    },
    subtitle2: {
      fontSize: 14,
      marginHorizontal: 1,
      marginTop: 3,
      fontFamily: "Times-Roman",
      color: "black",
      fontWeight: 700,
    },
    text: {
      margin: 1,
      fontSize: 11,
      textAlign: "justify",
      fontFamily: "Times-Roman",
    },

    cert: {
      fontFamily: "Times-Roman",
      fontWeight: "bold",
      fontSize: 12,
      margin: 1,
      marginTop: 5,
    },
  });

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
