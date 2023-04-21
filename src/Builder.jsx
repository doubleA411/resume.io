import React, { useRef } from "react";
import { useState } from "react";
import logo from "./assets/logo.png";
// import Header from "./components/Header/Header";
import {
  Page,
  Text,
  Link,
  Document,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
} from "@react-pdf/renderer";

import "./Builder.css";

function Builder() {
  const [counter1, setCounter1] = useState(1);
  const [counter2, setCounter2] = useState(1);
  const [counter3, setCounter3] = useState(1);

  const handleClick = () => {
    if (counter1 <= 2) {
      setCounter1(counter1 + 1);
      console.log(counter1);
    }
  };
  const handleClick2 = () => {
    if (counter2 <= 4) {
      setCounter2(counter2 + 1);
      console.log(counter2);
    }
  };
  const handleClick3 = () => {
    if (counter3 <= 3) {
      setCounter3(counter3 + 1);
      console.log(counter3);
    }
  };

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
  const [org1, setOrg1] = useState({});
  const [role1, setRole1] = useState({});
  const [desc1, setDesc1] = useState({});

  const [certificates, setCert] = useState({});

  // Certifications
  const handleOnChange = (e) => {
    const abc = {};
    abc[e.target.className] = e.target.value;
    setCert({ ...certificates, ...abc });
  };

  // Professional Experience
  const handleOrg = (e) => {
    const abc = {};
    abc[e.target.className] = e.target.value;
    setOrg1({ ...org1, ...abc });
  };

  const handleRole = (e) => {
    const abc3 = {};
    abc3[e.target.className] = e.target.value;
    setRole1({ ...role1, ...abc3 });
  };

  const handleDesc = (e) => {
    const abc4 = {};
    abc4[e.target.className] = e.target.value;
    setDesc1({ ...desc1, ...abc4 });
  };

  // Projects
  const [pTitle, setTitle] = useState({});
  const [pDesc, setDesc] = useState({});

  const handleTitle = (e) => {
    const abc = {};
    abc[e.target.className] = e.target.value;
    setTitle({ ...pTitle, ...abc });
  };
  const handlePdesc = (e) => {
    const abc = {};
    abc[e.target.className] = e.target.value;
    setDesc({ ...pDesc, ...abc });
  };

  const Resume = () => (
    <Document className="doc">
      <Page size="A4" style={styles.body}>
        <Text style={styles.name}>{nameText}</Text>
        <Text style={styles.details}>
          {emailText} | +91 {phnText} |{" "}
          <a href={linkText}>
            <Text>LinkedIn</Text>
          </a>
        </Text>
        <Text style={styles.subtitle}>Education</Text>
        <Text style={styles.text}>{instText}</Text>
        <Text style={styles.text}>
          {courseText} {yearText}
        </Text>
        <Text style={styles.text}>{infoText}</Text>
        <Text style={styles.subtitle}>Skills</Text>
        <Text style={styles.text}>Languages: {langText}</Text>
        <Text style={styles.text}>Technologies: {techText}</Text>
        <Text style={styles.subtitle}>Professional Experience</Text>
        {Object.keys(org1, role1, desc1).map((c) => {
          return (
            <div className="org">
              <Text style={styles.subtitle2}>
                {">"} {org1[c]}
              </Text>
              <Text style={styles.text}>{role1[c]}</Text>
              <Text style={styles.text}>{desc1[c]}</Text>
            </div>
          );
        })}

        <Text style={styles.subtitle}>Projects</Text>
        {Object.keys(pTitle, pDesc).map((c) => {
          return (
            <div className="prj">
              <Text style={styles.cert}>
                {">"} {pTitle[c]}
              </Text>
              <Text style={styles.text}>{pDesc[c]}</Text>
            </div>
          );
        })}

        <Text style={styles.subtitle}>Certifications</Text>
        {Object.keys(certificates).map((c) => {
          return (
            <Text style={styles.cert}>
              {">"} {certificates[c]}
            </Text>
          );
        })}
      </Page>
    </Document>
  );

  const styles = StyleSheet.create({
    body: {
      paddingTop: 30,
      paddingHorizontal: 15,
      paddingBottom: 25,
      display: "flex",
      flexDirection: "column",
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
      marginTop: 5,
      fontFamily: "Times-Roman",
      color: "black",
      fontWeight: 700,
    },
    text: {
      margin: 1,
      fontSize: 11,
      textAlign: "justify",
      fontFamily: "Times-Roman",
      lineHeight: 1.4,
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
      <div className="header">
        <img className="logo" src={logo} alt="" />
        <div className="download-link">
          <PDFDownloadLink document={<Resume />} fileName="resumeio.pdf">
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Download now!"
            }
          </PDFDownloadLink>
        </div>
      </div>
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
            <h2>Professional Experience</h2>
            {Array.from(Array(counter1)).map((c, index) => {
              return (
                <div className="pe">
                  <div className="pe-1">
                    <input
                      onChange={handleOrg}
                      key={c}
                      placeholder="Organization"
                      className={index}
                      type="text"
                    ></input>
                    <input
                      onChange={handleRole}
                      key={c}
                      placeholder="Role"
                      className={index}
                      type="text"
                    ></input>
                  </div>
                  <div className="pe-desc-1">
                    <textarea
                      rows={7}
                      onChange={handleDesc}
                      key={c}
                      placeholder="Description"
                      className={index}
                      type="text"
                    ></textarea>
                  </div>
                </div>
              );
            })}

            <div className="btn" onClick={handleClick}>
              Add Experience
            </div>
            <h2>Projects</h2>
            {Array.from(Array(counter2)).map((c, index) => {
              return (
                <div className="pe-1">
                  <input
                    onChange={handleTitle}
                    key={c}
                    placeholder="Title"
                    className={index}
                    type="text"
                  ></input>
                  <input
                    onChange={handlePdesc}
                    key={c}
                    placeholder="Description"
                    className={index}
                    type="text"
                  ></input>
                </div>
              );
            })}
            <div className="btn" onClick={handleClick2}>
              Add Certificates
            </div>
            <h2>Certifications</h2>
            {Array.from(Array(counter3)).map((c, index) => {
              return (
                <input
                  onChange={handleOnChange}
                  key={c}
                  placeholder="Title"
                  className={index}
                  type="text"
                ></input>
              );
            })}
            <div className="btn" onClick={handleClick3}>
              Add Certificates
            </div>
          </form>
        </div>
        <div className="div">
          <div className="resume">
            <Resume />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Builder;