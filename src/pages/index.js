import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <div>
      <h1>First year campus coach project</h1>
    </div> */}
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: 400,
      minWidth: 400,
      background:"#ebebeb"
    }}>
      <section className="row">
        <div style={{ position: "relative"}}>
            <button 
            type="button" 
            style={{
              border: "2px solid #ffc325",
              color: "white",
              backgroundColor: "#003e7e",
              padding: "8px 20px",
              borderRadius: "8px",
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: 20,
              minWidth: 300
            }}
            >Upload student csv</button>
            <input type="file" name="file" 
            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            style={{
              position: "absolute",
              left: 0,
              opacity: 0
            }}/>
        </div>
        <div style={{ position: "relative"}}>
            <button type="button" style={{
              border: "2px solid #ffc325",
              color: "white",
              backgroundColor: "#003e7e",
              padding: "8px 20px",
              borderRadius: "8px",
              fontSize: "20px",
              fontWeight: "bold",
              minWidth: 300,
              marginBottom: 40
            }}>Upload coach csv</button>
            <input type="file" name="file" 
            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            style={{
              position: "absolute",
              left: 0,
              opacity: 0
            }}/>
        </div>
        <div style={{ position: "relative"}}>
            <button type="button" style={{
              border: "2px solid #ffffff",
              color: "#003e7e",
              backgroundColor: "#ffc325",
              padding: "8px 20px",
              borderRadius: "8px",
              fontSize: "20px",
              fontWeight: "bold",
              minWidth: 300
            }}>Find match</button>
        </div>
      </section>
    </div>
  </Layout>
)

export default IndexPage
