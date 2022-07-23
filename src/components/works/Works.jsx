import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/writing.png",
      title: "Web design",
      desc: "Lorem ipsum summing up thing that are around",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
    {
      id: "2",
      icon: "./assets/mobile3.png",
      title: "Mobile Application",
      desc: "Mobile Application",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc: "Branding your mobile application",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src="assets/one.jpg" alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrowa.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrowa.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
