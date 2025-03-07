import React from "react";

import Jumbotron from "./components/jumbotron";

export default class PropertiesPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    const image = getAsset(entry.getIn(["data", "image"]));

    return <div>
      <Jumbotron image={image} title={entry.getIn(["data", "title"])} />

      <section className="bg-off-white pv5">
        <div className="ph3 mw7 center">
          <div className="measure-wide center tc mb5">
            <h2 className="f3 b lh-title mb3">{entry.getIn(["data", "intro", "heading"])}</h2>
            <p>{entry.getIn(["data", "intro", "description"])}</p>
          </div>
        </div>
      </section>
    </div>;
  }
} 