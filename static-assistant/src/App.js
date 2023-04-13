import { ProfileCard } from "./components/ProfileCard";
import alexaImg from "./images/alexa.png";
import siriImg from "./images/siri.png";
import cortanaImg from "./images/cortana.png";
import "bulma/css/bulma.css";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard
                title="Alexa"
                handle="@Alexa99"
                image={alexaImg}
                description="Alexa was made by amazon and helps you buy things."
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Siri"
                handle="@siri01"
                image={siriImg}
                description="Not many people use Siri anymore"
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={cortanaImg}
                description="Cortana is a personal assistant that helps you with your computer."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
