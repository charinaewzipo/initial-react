import './app.scss'
import pic1 from './image/1.png'
import pic2 from './image/2.png'
function App() {
  return (
    <div className="container">
      <div className='score-container '>
        <div className='wrapper'>
          <div className='cards'>
            <div className='card'>
              <div className='square'></div>
              <div className='icon'>
                <img src={pic2} alt='logo' />
                <h3>SCG</h3>
              </div>
              <div className='score'>2</div>
            </div>
            <div className='card'>
              <div className='square'></div>
              <div className='icon'>
                <img src={pic1} alt='logo' />
                <h3>JPG</h3>
              </div>
              <div className='score'>2</div>
            </div>
            <div className='card'>
              <div className='square'></div>
              <div className='icon'>
                <img src={pic2} alt='logo' />
                <h3>TOP1-5123</h3>
              </div>
              <div className='score'>34</div>
            </div>
            <div className='card'>
              <div className='square'></div>
              <div className='icon'>
                <img src={pic1} alt='logo' />
                <h3>HEHE</h3>
              </div>
              <div className='score'>211</div>
            </div>
          </div>
        </div>
      </div>

      <div class="background"><div class="blur"></div></div>



    </div>);
}

export default App;
