const react = require("react");

function Footer() {
  const currYear = new Date().getFullYear();
  return (
    <footer>
      <p1>copyright @ {currYear}</p1>
    </footer>
  );
}

export default Footer;