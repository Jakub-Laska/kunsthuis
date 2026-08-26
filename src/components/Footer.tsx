import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <a
            href="https://www.facebook.com/pages/Kunsthuis%20Amsterdam/1050494525061831/#"
            target="_blank"
            className="footer-social-link hover-animation"
          >
            facebook
          </a>
          <a
            href="https://www.instagram.com/kunsthuizen/"
            target="_blank"
            className="footer-social-link hover-animation"
          >
            instagram
          </a>
          <a
            href="https://kmska.be/en/homepage?gad_source=1&gad_campaignid=21824782930&gbraid=0AAAAACvhCAwXZmqBhIGg4hFmC6FYUhhh4&gclid=Cj0KCQjwnbrUBhDOARIsAKKhPpcwRg2QusCpT3ebHbB20CIk0Y2zxgI0yhKJYwBqRhTwYNY0zer2yn0aAlmxEALw_wcB"
            target="_blank"
            className="footer-social-link hover-animation"
          >
            kmska
          </a>
          <a
            href="https://www.boijmans.nl/"
            target="_blank"
            className="footer-social-link hover-animation"
          >
            boijmans
          </a>
          <a
            href="https://kunst.nl"
            target="_blank"
            className="footer-social-link hover-animation"
          >
            kunst
          </a>
        </div>
        <div className="footer-row small">
          <a href="mailto:kunsthuis.info@gmail.com" target="_blank">
            kunsthuis.info@gmail.com
          </a>
          <a href="tel:+31 6 38 55 66 96" target="_blank">
            +31 6 38 55 66 96
          </a>
        </div>
        <div className="footer-row small">
          <a
            href="https://www.google.com/maps/place/Kunsthuis.be/@51.2911235,3.2739258,9z/data=!4m10!1m2!2m1!1skunsthuis!3m6!1s0x47c3ff7f7b126bf5:0x362119c0a7f7fb5a!8m2!3d51.2908818!4d4.4920542!15sCglrdW5zdGh1aXMiA4gBAZIBCmFydF9kZWFsZXLgAQA!16s%2Fg%2F11gj0w2w5t?entry=ttu&g_ep=EgoyMDI2MDgyMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
          >
            De Zwaan 19, 2930 Brasschaat, België
          </a>
        </div>
        <div className="footer-row design ">
          <a
            className="hover-animation"
            href="https://github.com/Jakub-Laska"
            target="_blank"
          >
            design: jakub laska
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
