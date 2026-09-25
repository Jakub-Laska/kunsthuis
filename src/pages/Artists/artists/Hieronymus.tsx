import { ArtistsGrid } from "../ArtistsGrid";

function Hieronymus() {
  return (
    <div className="hieronymus artist-page">
      <div className="artist-grid-container">
        <div className="grid-element artist artist-title">
          <h1>Jheronimus Bosch</h1>
        </div>
        <div className="grid-element artist grunge-effect artist-img">
          <img
            src="/artists/profile/hieronymus.jpg"
            alt="Kunsthuis"
            className="distorted distorted-small"
          />
        </div>

        <div className="grid-element artist">
          <p className="artist-para">
            Jheronimus Bosch (ca. 1450-1516) was een Nederlandse schilder uit de
            Noordelijke Renaissance. Hij werd geboren en groeide op in
            's-Hertogenbosch, de stad die zijn beroemde naam aan hem gaf. Zijn
            echte naam was Jheronimus van Aken. Bosch werd vooral bekend door
            zijn fantasierijke schilderijen vol vreemde wezens, demonen,
            groteske figuren en mysterieuze landschappen. Zijn werk gaat vaak
            over zonde, verleiding, moraliteit en menselijke dwaasheid. <br />{" "}
            De band tussen Bosch en zijn geboortestad is vandaag de dag nog
            overal te zien. Zijn voormalige familiehuis, bekend als het Huis van
            Bosch, staat aan de Markt. Hier bracht hij een deel van zijn jeugd
            door en leerde hij het schildersvak in de werkplaats van zijn
            familie. Op de Markt staat ook een bronzen beeld van Bosch dat
            uitkijkt over het historische centrum. <br /> De stad heeft de
            fantasiewereld van Bosch bovendien letterlijk tot leven gebracht.
            Figuren en vreemde wezens uit onder andere De Tuin der Lusten zijn
            op verschillende plekken in Den Bosch als beelden en sculpturen
            terug te vinden. Vooral tijdens het Bosch 500-jaar in 2016 werd zijn
            werk uitgebreid in de stad tot leven gebracht. Vijfhonderd jaar na
            zijn dood werd zijn nalatenschap gevierd met kunstwerken,
            evenementen en grote figuren die waren geïnspireerd op zijn
            schilderijen. <br /> Bosch is daardoor nog altijd sterk verbonden
            met Den Bosch. Zijn naam, zijn beelden en zijn vreemde
            fantasiewereld zijn een zichtbaar onderdeel geworden van de
            identiteit van de stad.
          </p>
        </div>

        <div className="grid-element artist artist-cards">cards</div>
        <div className="grid-element artist diagonal"></div>
        <div className="grid-element artist artist-gallery">gallery</div>
        <div className="grid-element artist diagonal-two"></div>
      </div>

      <ArtistsGrid currentSlug="hieronymus" small />
    </div>
  );
}

export default Hieronymus;
