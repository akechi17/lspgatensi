import React, { Component } from "react";

export default class WaButton extends Component {
  render() {
    return (
      <a
        className="whatsapp-btn"
        href="https://api.whatsapp.com/send?phone=6281119082888"
        target="_blank"
      >
        <img
          className="waicon"
          src="/images/button-wa2.webp"
          alt="Kontak Whatsapp LSP Gatensi"
        />
      </a>
    );
  }
}
