import "./testimonials.scss";

export default function Testimonials() {
  const dummy = [
    {
      id: 1,
      name: "Stein Mwode",
      title: "Senior Developer",
      img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Lex Malinsink",
      title: "CEO Oncomed",
      img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Placeat magnam dolorem.",
      featured: true
    },
    {
      id: 3,
      name: "Benjamin Net",
      title: "CEO of ALABI",
      img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum dolo sit amet consectetur adipsisicing elit. Placeat magnam dolorem",
    //   featured: true
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {dummy.map((p) => (
          <div className={p.featured ? 'card featured' : 'card'}>
            <div className="top">
              <img src="assets/right arrow.png" className="left" alt="" />
              <img className="user" src={p.img} alt="" />
              <img className="right" src={p.icon} alt="" />
            </div>
            <div className="center">{p.desc}</div>
            <div className="bottom">
              <h3>{p.name}</h3>
              <h4>{p.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
