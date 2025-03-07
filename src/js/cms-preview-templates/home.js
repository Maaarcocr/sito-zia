import React from "react";

import Jumbotron from "./components/jumbotron";

export default class HomePreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    const image = getAsset(entry.getIn(["data", "image"]));

    return <div>
      <Jumbotron image={image} title={entry.getIn(["data", "title"])} subtitle={entry.getIn(["data", "subtitle"])}/>

      <div className="bg-off-white pv5">
        <div className="ph3 mw7 center">
          <div className="measure-wide center tc">
            <h2 className="f2 b lh-title mb4">{entry.getIn(["data", "intro", "heading"])}</h2>
            <p className="mb4">{entry.getIn(["data", "intro", "text"])}</p>
            <div className="tc">
              <a href="/properties" className="btn btn-lg raise">View All Properties</a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-grey-1 pv5">
        <div className="ph3 mw8 center">
          <h2 className="f2 b lh-title mb4 tc">Featured Properties</h2>
          <div className="flex-ns flex-wrap mhn2-ns">
            ...
          </div>
        </div>
      </div>
    </div>;
  }
}
