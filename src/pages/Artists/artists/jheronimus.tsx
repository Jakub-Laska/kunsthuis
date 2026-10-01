import { ArtistsGrid } from "../ArtistsGrid";

function jheronimus() {
  return (
    <div className="jheronimus artist-page">
      <div className="artist-grid-container">
        <div className="grid-element-artist-page artist-title">
          <h1>Jheronimus Bosch</h1>
        </div>
        <div className="grid-element-artist-page grunge-effect artist-img">
          <img
            src="/artists/profile/jheronimus.jpg"
            alt=""
            className="distorted distorted-small"
          />
        </div>

        <div className="grid-element-artist-page artist-story">
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

        <div className="grid-element-artist-page artist-cards">
          <a
            href="https://artsandculture.google.com/entity/hieronim-bosch/m0cdn_"
            target="_blank"
            rel="noopener noreferrer"
            className="artist-button"
          >
            google arts
          </a>
          <a
            href="https://commons.wikimedia.org/wiki/Jheronimus_Bosch"
            target="_blank"
            rel="noopener noreferrer"
            className="artist-button"
          >
            wikimedia
          </a>
          <a
            href="https://nl.wikipedia.org/wiki/Jheronimus_Bosch"
            target="_blank"
            rel="noopener noreferrer"
            className="artist-button"
          >
            Wikipedia
          </a>

          <a
            href="https://www.wikiart.org/en/hieronymus-bosch"
            target="_blank"
            rel="noopener noreferrer"
            className="artist-button"
          >
            wikiart
          </a>
        </div>
        <div className="grid-element-artist-page diagonal"></div>

        <div className="grid-element-artist-page artist-gallery">
          <div className="artist-gallery-container">
            <div className="artist-gallery-img-container buffer"></div>
            <div className="artist-gallery-img-container grunge-effect">
              <img
                src="/artists/carousel/jheronimus/one.jpg"
                alt="De Tuin der Lusten, Jheronimus Bosch, linker deel"
              />
            </div>
            <div className="artist-gallery-img-container grunge-effect">
              <img
                src="/artists/carousel/jheronimus/two.jpg"
                alt="De Tuin der Lusten, Jheronimus Bosch, middenpaneel"
              />
            </div>
            <div className="artist-gallery-img-container grunge-effect">
              <img
                src="/artists/carousel/jheronimus/three.jpg"
                alt="De Tuin der Lusten, Jheronimus Bosch, rechter deel"
              />
            </div>
            <div className="artist-gallery-img-container grunge-effect">
              <img
                src="/artists/carousel/jheronimus/four.jpg"
                alt="Visioen van Tondalus navolger van Jheronimus Bosch"
              />
            </div>

            <div className="artist-gallery-img-container grunge-effect">
              <img
                src="/artists/carousel/jheronimus/five.jpg"
                alt="Christus draagt het kruis, schilderij van Jheronimus Bosch"
              />
            </div>
            <div className="artist-gallery-img-container grunge-effect">
              <img
                src="/artists/carousel/jheronimus/six.jpg"
                alt="De Nederdaling ter helle, Jheronimus Bosch"
              />
            </div>
            <div className="artist-gallery-img-container grunge-effect">
              <img
                src="/artists/carousel/jheronimus/seven.jpg"
                alt="De Tuin van Eden, Jheronimus Bosch"
              />
            </div>
            <div className="artist-gallery-img-container grunge-effect">
              <img
                src="/artists/carousel/jheronimus/eight.jpg"
                alt="Visioen van Tondalus navolger van Jheronimus Bosch"
              />
            </div>
            <div className="artist-gallery-img-container grunge-effect">
              <img
                src="/artists/carousel/jheronimus/nine.jpg"
                alt="Rechterpaneel van De Verleiding van de Heilige Antonius, Jheronimus Bosch"
              />
            </div>
            <div className="artist-gallery-img-container buffer"></div>
          </div>
        </div>
        <div className="grid-element-artist-page diagonal-two"></div>
      </div>

      <ArtistsGrid currentSlug="jheronimus" small />
    </div>
  );
}

export default jheronimus;
