import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CJumbotron,
  CRow,
  CEmbed,
  CEmbedItem
} from '@coreui/react'

const Ludus = () => {
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader style={{ backgroundColor: "#B0A2FA" }}>
            </CCardHeader>
            <CCardBody>
              <CEmbed>
                <CEmbedItem src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fluduseducation%2Fvideos%2F339912417137640%2F&show_text=false&width=560" type="video" />
              </CEmbed>
            </CCardBody>
            <CCardHeader style={{ backgroundColor: "var(--info)" }} />
            <CCardBody style={{ padding: "2rem 10rem" }}>
              <h1 style={{ textAlign: "center" }}>What is Ludus</h1>
              <p className="lead">Ludus is an EdTech startup from Tel Aviv, providing interactive practice and assessment solutions.<br /><br />
                We help teachers, educational organizations, and businesses to improve learning outcomes, assess student progress, and digitize learning content at the click of a button.
              Ludus’ technology aims to make learning more personalized, engaging, and efficient.<br /><br />
              Analyzing a student’s strengths and weaknesses, our system automatically recommends content that is tailored to individual needs.<br /><br />
                Ludus empowers users to create and share interactive practices on mobile and desktop within minutes. Real-time assessment during the learning process helps to optimize student performance and enables data-based decision making.
                </p>
              <hr></hr>
              Ludus is an Edtech company founded by Daniel Kovler
            </CCardBody>
            <CCardHeader style={{ backgroundColor: "var(--success)" }} />
            <CCardBody style={{ padding: "2rem 10rem" }}>
              <h1 style={{ textAlign: "center" }}>How to use</h1>
            <p className="lead">
              <ul>
                <li>Step 1</li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non magna odio. Pellentesque at turpis at leo vehicula rhoncus semper euismod mi. Fusce convallis vitae magna vel ornare.
              <br /><br />
              <li>Step 2</li>
              Maecenas commodo sem vitae ante dignissim, quis condimentum magna tristique. Suspendisse vestibulum dolor ut metus gravida, a pharetra nunc rutrum.
              <br /><br />
              <li>Step 3</li>
              Donec vitae congue odio, et ultricies magna. Nam vel massa ultrices dolor interdum iaculis. Fusce eget felis eu nisl dignissim tempor id a ex. Fusce rutrum ex id enim cursus, ut tincidunt lacus vulputate. Nam vulputate vestibulum egestas.
              
              </ul>
                </p>
              <hr></hr>
              Ludus is an Easy to use platform
            </CCardBody>
            <CCardHeader style={{ backgroundColor: "var(--warning)" }} />
            <CCardBody style={{ padding: "2rem 10rem" }}>
              <h1 style={{ textAlign: "center" }}>Practices you can try</h1>
              <br></br>
            <p className="lead">
              <h3>Create your own lesson</h3>
              <img style={{verticalAlign: "bottom"}} type="picture" src="https://www.onoff.app/static/d20a3029c9d3cefd73e527897da3a390/01bc2/image-2.png" width="100px" height="100px"></img>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non magna odio. Pellentesque at turpis at leo vehicula rhoncus semper euismod mi. Fusce convallis vitae magna vel ornare. Maecenas commodo sem vitae ante dignissim, quis condimentum magna tristique. Suspendisse vestibulum dolor ut metus gravida, a pharetra nunc rutrum. Donec vitae congue odio, et ultricies magna. Nam vel massa ultrices dolor interdum iaculis.
              Maecenas commodo sem vitae ante dignissim, quis condimentum magna tristique. Suspendisse vestibulum dolor ut metus gravida, a pharetra nunc rutrum.<br /><br />
              Donec vitae congue odio, et ultricies magna. Nam vel massa ultrices dolor interdum iaculis. Fusce eget felis eu nisl dignissim tempor id a ex. Fusce rutrum ex id enim cursus, ut tincidunt lacus vulputate. Nam vulputate vestibulum egestas.<br /><br />
                Ludus empowers users to create and share interactive practices on mobile and desktop within minutes. Real-time assessment during the learning process helps to optimize student performance and enables data-based decision making.
                </p>
              <hr></hr>
              You can add your own practice to this website!
            </CCardBody>
      <CButton color="primary" size="lg" href="https://www.facebook.com/luduseducation" variant="outline">Use the platform here</CButton>
          </CCard>
        </CCol>
      </CRow>

    </>
  )
}

export default Ludus
