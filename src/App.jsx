import './App.css'
import qrCode from './assets/image-qr-code.png'

function App() {

  return (
    <div className="container">
      <div className="qr_code_card">
        <div className="qr_code_img_container">
          <img src={qrCode} alt="QR code to frontendmentor.io" className="qr_code" />
        </div>
        <div className="qr_code_card_text">
          <h1 className="qr_code_h1 outfit-700">Improve your front-end skills by building projects</h1>
          <p className="qr_code_p outfit-400">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </div>
  )
}

export default App
