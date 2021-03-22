import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
  CLink,
  CImg,
  CCardTitle
} from '@coreui/react'
import '@coreui/icons'
import CIcon from '@coreui/icons-react'


const HomeTask = () => {
  const styles = {
    padding: 0,
    textAlign: "inherit",
    height: "13rem"
  }
  const headerStyles = {
    textAlign: "center",
  }
  const imageStyles = {
    marginBottom: "-14%",
    borderStyle: "groove",
  }
  const textStyles = {
    fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
    color: "white",
    fontWeight: 350
  }
  return (
    <>
      <CCardTitle style={{ textAlign: "center" }}>
        The most anticipated EdTech companies
    </CCardTitle>
      <CImg
        src="https://builtin.com/sites/default/files/styles/og/public/2019-06/edtech-companies.png"
        width="97.5%"
        height="80%"
        block="true"
        fluid="true"
        align='center'
        placeholderColor="warning"
        style={{ ...imageStyles }}
      />
      <CRow>
        <CCol xs="12" sm="6" md="4">
          <CCard color="primary" className="text-white">
            <CCardHeader style={{ ...headerStyles }}>
              <CIcon name="cil-lightbulb" /> Ludus
            </CCardHeader>
            <CLink
              to="/ludus"
            >
              <CButton color="primary" style={{ ...styles }}>
                <CCardBody style={{...textStyles}}>
                  Ludus is an EdTech startup from Tel Aviv, providing interactive practice and assessment solutions. We help teachers, educational organizations, and businesses to improve learning outcomes, assess student progress, and digitize learning content at the click of a button.
            </CCardBody>
              </CButton>
            </CLink>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="4">
          <CCard color="success" className="text-white">
          <CCardHeader style={{ ...headerStyles }}>
              <CIcon name="cib-github" /> Github
            </CCardHeader>
            <CLink
              to="/github"
            >
              <CButton color="success" style={{ ...styles }}>
                <CCardBody style={{...textStyles}}>
                GitHub, Inc. is a provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management functionality of Git, plus its own features. It was founded in 2008 by Tom Preston-Werner, Chris Wanstrath, Scott Chacon and P. J. Hyett
            </CCardBody>
              </CButton>
            </CLink>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="4">
          <CCard color="warning" className="text-white">
            <CCardHeader style={{ ...headerStyles }}>
              <CIcon name="cib-reddit" /> Reddit
            </CCardHeader>
            <CLink
              to="/reddit"
            >
              <CButton color="warning" style={{ ...styles }}>
                <CCardBody style={{...textStyles}}>
                  Reddit is a social news aggregation, web content rating, and discussion website, recently including livestream content through Reddit Public Access Network. Registered members submit content to the site such as links, text posts, and images.
            </CCardBody>
              </CButton>
            </CLink>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="4">
          <CCard color="success" className="text-white">
            <CCardHeader style={{ ...headerStyles }}>
              <CIcon name="cib-pinterest" /> Pinterest
            </CCardHeader>
            <CLink
              to="/pinterest"
            >
              <CButton color="success" style={{ ...styles }}>
                <CCardBody style={{...textStyles}}>
                Pinterest is an American image sharing and social media service designed to enable saving and discovery of information on the internet using images and, on a smaller scale, animated GIFs and videos, in the form of pinboards. It was launched on January 2010
            </CCardBody>
              </CButton>
            </CLink>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="4">
          <CCard color="info" className="text-white">
            <CCardHeader style={{ ...headerStyles }}>
              <CIcon name="cib-stackoverflow" /> Stackoverflow
            </CCardHeader>
            <CLink
              to="/stackoverflow"
            >
              <CButton color="info" style={{ ...styles }}>
                <CCardBody style={{...textStyles}}>
                Stack Overflow is a question and answer site for professional and enthusiast programmers. It is a privately held website, the flagship site of the Stack Exchange Network, created in 2008 by Jeff Atwood and Joel Spolsky. It features questions and answers on a wide range of topics in computer programming.
            </CCardBody>
              </CButton>
            </CLink>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="4">
          <CCard color="danger" className="text-white">
            <CCardHeader style={{ ...headerStyles }}>
              <CIcon name="cib-xing" /> Xing
            </CCardHeader>
            <CLink
              to="/xing"
            >
              <CButton color="danger" style={{ ...styles }}>
                <CCardBody style={{...textStyles}}>
                XING is a Hamburg-based career-oriented social networking site, operated by New Work SE The site is primarily focused on the German-speaking market, alongside XING Spain, and competes with the American platform LinkedIn. It was founded in 2003</CCardBody>
              </CButton>
            </CLink>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="4">
          <CCard color="danger" className="text-white">
            <CCardHeader style={{ ...headerStyles }}>
              <CIcon name="cib-linkedin" /> Linkedin
            </CCardHeader>
            <CLink
              to="/linkedin"
            >
              <CButton color="danger" style={{ ...styles }}>
                <CCardBody style={{...textStyles}}>
                LinkedIn is an American business and employment-oriented online service that operates via websites and mobile apps. Launched on May 5, 2003, the platform is mainly used for professional networking, and allows job seekers to post their CVs and employers to post jobs.
            </CCardBody>
              </CButton>
            </CLink>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="4">
          <CCard color="primary" className="text-white">
            <CCardHeader style={{ ...headerStyles }}>
              <CIcon name="cib-flickr" /> Flickr
            </CCardHeader>
            <CLink
              to="/flickr"
            >
              <CButton color="primary" style={{ ...styles }}>
                <CCardBody style={{...textStyles}}>
                Flickr is an American image hosting and video hosting service, as well as an online community. It was created by Ludicorp in 2004 and is a popular way for amateur and professional photographers to host high-resolution photos. It has changed ownership several times</CCardBody>
              </CButton>
            </CLink>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="4">
          <CCard color="warning" className="text-white">
          <CCardHeader style={{ ...headerStyles }}>
              <CIcon size="sm" name="cib-vimeo" /> Vimeo
            </CCardHeader>
            <CLink
              to="/vimeo"
            >
              <CButton color="warning" style={{ ...styles }}>
                <CCardBody style={{...textStyles}}>
                  Vimeo is an American video hosting, sharing, and services platform headquartered in New York City. Vimeo focuses on the delivery of high-definition video across a range of devices. Vimeo's business model is through software as a service. It is based in New York.
            </CCardBody>
              </CButton>
            </CLink>
          </CCard>
        </CCol>

      </CRow>
    </>
  )
}

export default HomeTask

