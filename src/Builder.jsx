import { PDFViewer, Canvas } from "@react-pdf/renderer";
import React, { useRef } from "react";
import { useState } from "react";
import Header from './components/Header/Header'
import {
  Page,
  Text,
  Link,
  Document,
  StyleSheet,
  ReactPDF,
} from "@react-pdf/renderer";

import "./Builder.css";

function Builder() {
  const form = useRef();
  const [nameText, setName] = useState("");
  const [emailText, setMail] = useState("");
  const [phnText, setPhn] = useState("");
  const [linkText, setLink] = useState("");
  const [instText, setInst] = useState("");
  const [courseText, setCourse] = useState("");
  const [yearText, setYear] = useState("");
  const [infoText, setInfo] = useState("");
  const [langText, setLang] = useState("");
  const [techText, setTech] = useState("");
  const Resume = () => (
    <Document>
      <Page size="A4" style={styles.body}>
        <Text style={styles.name}>{nameText}</Text>
        <Text style={styles.details}>
          {emailText} | +91 {phnText} | <Link src={linkText}>LinkedIn</Link>
        </Text>
        <Text style={styles.subtitle}>Education</Text>
        <Text style={styles.text}>
          {instText}
        </Text>
        <Text style={styles.text}>
          {courseText}  {yearText}
        </Text>
        <Text style={styles.text}>
         {infoText}
        </Text>
        <Text style={styles.subtitle}>Skills</Text>
        <Text style={styles.text}>
          Languages: {langText}
        </Text>
        <Text style={styles.text}>
          Technologies: {techText}
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
      <Header />
      <div className="builder-body">
        <div className="left">
          <form ref={form}>
            <h2>Personal Details</h2>
            <div className="pd-1">
              <input
                type="text"
                name="uname"
                value={nameText}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                name="mail"
                value={emailText}
                placeholder="Email"
                onChange={(e) => setMail(e.target.value)}
              />
            </div>
            <div className="pd-2">
              <input
                type="text"
                name="phn"
                value={phnText}
                placeholder="Phone no."
                onChange={(e) => setPhn(e.target.value)}
              />
              <input
                type="text"
                name="linkedin"
                value={linkText}
                placeholder="LinkedIn"
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
            <h2>Education</h2>
            <div className="ed-1">
              <input
                type="text"
                name="inst"
                placeholder="Institution"
                value={instText}
                onChange={(e) => setInst(e.target.value)}
              />
              <input
                type="text"
                name="course"
                placeholder="Course"
                value={courseText}
                onChange={(e) => setCourse(e.target.value)}
              />
            </div>
            <div className="ed-2">
              <input
                type="text"
                name="year"
                placeholder="Year"
                value={yearText}
                onChange={(e) => setYear(e.target.value)}
              />
              <input
                type="text"
                name="additional"
                placeholder="Additional Info."
                value={infoText}
                onChange={(e) => setInfo(e.target.value)}
              />
            </div>
            <h2>Skills</h2>
            <div className="skill">
              <input
                type="text"
                name="lang"
                placeholder="Languages"
                value={langText}
                onChange={(e) => setLang(e.target.value)}
              />
              <input
                type="text"
                name="tech"
                placeholder="Technologies"
                value={techText}
                onChange={(e) => setTech(e.target.value)}
              />
            </div>
          </form>
        </div>
        <PDFViewer className="pdf">
          <Resume />
        </PDFViewer>
      </div>
    </div>
  );
}

export default Builder;
