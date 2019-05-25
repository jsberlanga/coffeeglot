import React, { Component } from "react";
import Carousel from "@brainhubeu/react-carousel";
import { StyledHeader } from "./styles/Header";

import { locations } from "../lib/data";

export default class Example extends Component {
  render() {
    return (
      <>
        <StyledHeader>
          <h2>Find a place of your liking</h2>
        </StyledHeader>
        <Carousel arrows>
          {locations.map(location => {
            return (
              <div key={location.id}>
                <h2>{location.name}</h2>
                <img
                  src={location.pictures}
                  width="1098px"
                  height="500px"
                  style={{ objectFit: "cover" }}
                />
                {location.address && <h5>Find it on: {location.address}</h5>}
                {location.seats && (
                  <h5>
                    Remember you can only book for a maximum of {location.seats}{" "}
                    people
                  </h5>
                )}
              </div>
            );
          })}
        </Carousel>
      </>
    );
  }
}
