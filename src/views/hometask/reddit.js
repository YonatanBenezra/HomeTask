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

const Reddit = () => {

  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader style={{ backgroundColor: "#B0A2FA" }}>
            </CCardHeader>
            <CCardBody>
              <CEmbed>
                <CEmbedItem src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freddit%2Fvideos%2F148820973632375%2F&show_text=false&width=560" type="video" />
              </CEmbed>
            </CCardBody>
            <CCardHeader style={{ backgroundColor: "var(--info)" }} />
            <CCardBody style={{ padding: "2rem 10rem" }}>
              <h1 style={{ textAlign: "center" }}>What is Reddit</h1>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla, purus hendrerit ornare maximus, sapien ante mattis elit, venenatis aliquet odio felis at nulla<br /><br />
              Vestibulum interdum vestibulum diam, sed blandit metus pretium non. In vel nulla efficitur, mattis felis id, tempor lacus. Etiam efficitur, est in ornare fringilla, sapien est scelerisque sapien, vel tristique ante augue eget quam.<br /><br />
              Analyzing a student’s strengths and weaknesses, our system automatically recommends content that is tailored to individual needs.<br /><br />
              maximus lacus vel ultricies rhoncus. Suspendisse non pretium mauris, vitae dapibus metus. Praesent in placerat nunc, et auctor nisi. Sed at eleifend lectus.
                </p>
              <hr></hr>
              Reddit is an Edtech company founded by Lorem Ipsum
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

export default Reddit
