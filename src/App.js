import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <div className="visit">
        <div className="about__me">
          <div className="img__me">
            <img src="./img/me.png" alt="Matvey Fedkovich" title="Matvey Fedkovich"></img>
          </div>
          <div>
            <p>
              HI, I'M <span>MATVEY FEDKOVICH</span>
            </p>
            <p>web-developer & web-designer</p>
            <p>
              I'm a 2nd course student of Belarusian State University of Faculty
              of Mechanics and Mathematics for web-developer and mathematician.
              I have knowledge of such programming languages as C++, Transact
              SQL, JavaScript and its library React. Worked in applications like
              Figma, Adobe Photoshop. Studied Web Design, Operational Systems
              and Networks.
            </p>
          </div>
        </div>
        <div className="slinks">
          <p>Social links</p>
          <div>
            <a href="https://vk.com/f_e_d_k_o_v_i_c_h">
              <img src="./img/vk.png"></img>
            </a>
            <a href="https://telegram.me/f_e_d_k_o_v_i_c_h">
              <img src="./img/tg.png"></img>
            </a>
          </div>
        </div>
      </div>

      <div className="tworks">
        <p>MY WORKS</p>
      </div>

      <div className="work">
        <div className="work__gif">
          <img src="./img/flower.gif"></img>
        </div>
        <div className="descr">
          <p>Online store selling tulips</p>
          <p>Web-Application for selling tulips online</p>
        </div>
      </div>

      <div className="work">
        <div className="work__gif">
          <img src="./img/gallery.gif"></img>
        </div>
        <div className="descr">
          <p>Vincent Willem Van Gogh art gallery</p>
          <p>Art gallery</p>
        </div>
      </div>

      <div className="work">
        <div className="work__gif">
          <img src="./img/moon.png"></img>
        </div>
        <div className="descr">
          <p>Moon Website</p>
          <p>Web page with many css properties</p>
        </div>
      </div>

    </div>
  );
}

export default App;
