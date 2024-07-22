import "./App.css";
import Carousel from "./Carousel";
const slidesList = [
  {
    id: 1,
    title: "Dessert",
    img: "https://images.unsplash.com/photo-1682686580036-b5e25932ce9a?q=80&w=2875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 2,
    title: "SunSet",
    img: "https://images.unsplash.com/photo-1682685797365-41f45b562c0a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC. ",
  },
  {
    id: 3,
    title: "Hill",
    img: "https://images.unsplash.com/photo-1682687220211-c471118c9e92?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour. ",
  },
  {
    id: 4,
    title: "Ocean",
    img: "https://images.unsplash.com/photo-1702588325888-656ccaa735f2?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
  },
  {
    id: 5,
    title: "Mountain Range",
    img: "https://images.unsplash.com/photo-1702893575487-90a6423e67a6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  },
];
function App() {
  return (
    <div className="App">
      <Carousel slidesList={slidesList} />
    </div>
  );
}

export default App;
