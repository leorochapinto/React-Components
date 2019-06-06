import React, { Component } from "react";
import "./App.css";
import ButtonBarComponent from "./components/ButtonBarComponent";
import AlertComponent from "./components/AlertComponent";
import BadgeComponent from "./components/BadgeComponent";
import CardComponent from "./components/CardComponent";
import CardHeaderComponent from "./components/CardHeaderComponent";
import CardBodyComponent from "./components/CardBodyComponent";
import CardFooter from "./components/CardFooter";
import BodyTitleComponent from "./components/BodyTitleComponent";
import CardTextComponent from "./components/CardTextComponent";
import CarouselComponent from "./components/CarouselComponent";
import CarouselItemComponent from "./components/CarouselItemComponent";
import ModalComponent from "./components/ModalComponent";
import ModalHeaderComponent from "./components/ModalHeaderComponent";
import ModalBodyComponent from "./components/ModalBodyComponent";
import ModalFooterComponent from "./components/ModalFooterComponent";
import ButtonComponent from "./components/ButtonComponent";
import PaginationComponent from "./components/PaginationComponent";
import JumbotronComponent from "./components/JumbotronComponent";
import PopoverComponent from "./components/PopoverComponent";
import NavBarComponent from "./components/NavBarComponent";
import MineComponent from "./components/MineComponent";
import './style.scss';
import {Link} from 'react-router-dom'
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progressValue: 0
    };

    this.timer = this.timer.bind(this);

    this.refreshIntervalId = null;
  }

  componentDidMount() {
    //this.refreshIntervalId = setInterval(this.timer, 1000);
  }

  componentWillMount() {
    clearInterval(this.refreshIntervalId);
  }

  timer() {
    if (this.state.progressValue == 100) {
      this.setState({ progressValue: 0 });
    } else {
      this.setState({ progressValue: this.state.progressValue + 1 });
    }
  }

  render() {

    return (
      
      <div className="App">
        <ButtonBarComponent />
          <JumbotronComponent>
        <div>
        <h1 class="display-4">ludacris</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4"></hr>
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </div>
      </JumbotronComponent>

      <NavBarComponent></NavBarComponent>
   
          <CarouselComponent controls={true} indicators={true} crossfade={true}>
            <CarouselItemComponent src={"https://wallpaperbrowse.com/media/images/pokemon_christmas_by_littlemissantisocial-d4jxk9w.png"} active={false}></CarouselItemComponent>
            <CarouselItemComponent src={"https://wallpaperbrowse.com/media/images/303836.jpg"} active={false}></CarouselItemComponent>
            <CarouselItemComponent src={"http://personal.psu.edu/xqz5228/jpg.jpg"} active={true} title="Titulo" description="description"alt={"Imagem Navio Pirata"} ></CarouselItemComponent>
          </CarouselComponent>

        <CardComponent>
          <CardHeaderComponent> Future</CardHeaderComponent>
          <CardBodyComponent>
            <BodyTitleComponent>My Text</BodyTitleComponent>
            <CardTextComponent>Leo</CardTextComponent>
          </CardBodyComponent>
          <CardFooter>3 days ago</CardFooter>
        </CardComponent>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <PopoverComponent></PopoverComponent>
        <BadgeComponent className="badge-primary">Primary</BadgeComponent>
        <BadgeComponent className="badge-secondary">Secondary</BadgeComponent>
        <BadgeComponent className="badge-success">Sucess</BadgeComponent>
        <BadgeComponent className="badge-danger">Danger</BadgeComponent>
        <BadgeComponent className="badge-warning">Warning</BadgeComponent>
        <BadgeComponent className="badge-info">Info</BadgeComponent>
        <BadgeComponent className="badge-light">Light</BadgeComponent>

        <BadgeComponent className="badge-dark">Dark</BadgeComponent>
        <AlertComponent className="alert-primary">
          A simple primary alert—check it out!
        </AlertComponent>
        <AlertComponent className="alert-secondary">
          A simple secondary alert—check it out!
        </AlertComponent> 
        <ButtonComponent className="btn btn-primary" toggle="modal" abelha="#exampleModal">
       lala
        </ButtonComponent>
        <ModalComponent>
        <ModalHeaderComponent>Title</ModalHeaderComponent>
        <ModalBodyComponent>askhd</ModalBodyComponent>
        <ModalFooterComponent>
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
        </ModalFooterComponent>

        </ModalComponent>
        <PaginationComponent icons={false}></PaginationComponent>

        <MineComponent>
        </MineComponent>
        <Link to="/">Ir para Página sobre lol</Link>
      </div>
    );
  }
}

export default App;