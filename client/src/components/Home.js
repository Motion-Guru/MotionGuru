import React from 'react';
import '../css/Home.css';
import emoji_1 from '../res/emoji_1.png';
import star from '../res/star.png';
import leaf_1 from '../res/leaf_1.png';
import leaf_2 from '../res/leaf_2.png';
import heart from '../res/heart.png';
import brush from '../res/brush.png';
import editor from '../res/editor.png';
import box from '../res/boris-fx-sapphire.png'
import continuum from '../res/Continuum.png'

import motion from '../res/MotionGuru.jpeg'

const Home = () => {
  return (
    <div className="container">
      <div className="home-container">
        {/* Background Amoebas */}
        <div className="background-amoebas">
          <div className="amoeba one"></div>
          <div className="amoeba two"></div>
          <div className="amoeba three"></div>
        </div>

        

        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="left-side">
            <div className="emoji-ui">
              <img src={emoji_1} alt="emoji" className="emoji-img" />
            </div>
            <h1>
              <span className="greeting">Hey! We Are</span><br />
              <span className="name">Motion Mavericks</span>
            </h1>
            <p>
              Visual storyteller crafting viral-worthy content through captivating edits, thumb-stopping thumbnails, and mesmerizing motion graphics. 2 years of turning raw ideas into unforgettable digital experiences.
            </p>
            <button className="btn">Hire Me</button>
          </div>

          <div className="right-side">
            <div className="photo-container">
              <img
                src={motion}
                alt="Motion Mavericks"
                className="profile-photo"
              />
              <div className="hanging-decor">
                <div className="decor decor1">
                  <img src={star} alt="star" className="emoji-img" />
                </div>
                <div className="decor decor2">
                  <img src={leaf_1} alt="leaf_1" className="emoji-img" />
                </div>
                <div className="decor decor3">
                  <img src={leaf_2} alt="leaf_2" className="emoji-img" />
                </div>
                <div className="decor decor4">
                  <img src={heart} alt="heart" className="emoji-img" />
                </div>
                <div className="decor decor5">
                  <img src={brush} alt="brush" className="emoji-img" />
                </div>
                <div className="circle-container">
                  <div className="circle circle1"></div>
                  <div className="circle circle2"></div>
                  <div className="circle circle3"></div>
                  <div className="circle circle4"></div>
                </div>
              </div>

              <div className="video-editor">
                <div className="title-container">
                  <div className="icon-wrapper">
                    <img src={editor} alt="Video Icon" className="icon" />
                  </div>
                  <div className="text-content">
                    <h3>Video Editor</h3>
                    <p>We specialize in editing high-quality videos with a creative touch.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="mywork">
        <div className="left-side">
          <h3>Tools I Use:</h3>
          <div className="icon-container">
            <img
              src={box}
              alt="Boris FX Sapphire"
            />
            <img
              src={continuum}
              alt="Boris FX Continuum"
            />
            <img
              src="https://banner2.cleanpng.com/20180504/vqe/kisspng-cinema-4d-3d-computer-graphics-autodesk-maya-3d-mo-cinema-material-5aec322103afe0.3078863615254287690151.jpg"
              alt="Cinema 4D"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg"
              alt="Adobe Photoshop"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg"
              alt="Adobe Premiere Pro"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg"
              alt="Adobe After Effects"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg"
              alt="Adobe Illustrator"
            />
          </div>
        </div>
        <div className="right-side">
        </div>
      </div>
    </div>
  );
};

export default Home;