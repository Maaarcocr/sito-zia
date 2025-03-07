import React from "react";

export default class PropertyPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    const image = getAsset(entry.getIn(["data", "image"]));
    const gallery = entry.getIn(["data", "gallery"]) || [];

    return <div className="bg-off-white pv5">
      <div className="ph3 mw8 center">
        <h1 className="f2 lh-title b mb4">{entry.getIn(["data", "title"])}</h1>
        
        <div className="flex flex-wrap mhn2-ns mb5">
          <div className="w-100 w-60-ns ph2-ns">
            <div className="relative">
              <img src={image} alt={entry.getIn(["data", "title"])} className="w-100 br2"/>
            </div>
            
            <div className="property-detail__gallery">
              {gallery.map((item, i) => (
                <div className="property-detail__gallery-item" key={i}>
                  <img src={getAsset(item.get("image"))} alt={item.get("alt")} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-100 w-40-ns ph2-ns">
            <div className="property-detail__sidebar">
              <p className="f3 b mb3 primary">{entry.getIn(["data", "price"])}</p>
              <p className="mb3"><strong>Location:</strong> {entry.getIn(["data", "location"])}</p>
              
              <div className="flex flex-wrap mb4">
                <div className="w-third mb3">
                  <span className="db f6 grey-3">Bedrooms</span>
                  <span className="f4 b">{entry.getIn(["data", "bedrooms"])}</span>
                </div>
                <div className="w-third mb3">
                  <span className="db f6 grey-3">Bathrooms</span>
                  <span className="f4 b">{entry.getIn(["data", "bathrooms"])}</span>
                </div>
                <div className="w-third mb3">
                  <span className="db f6 grey-3">Max Guests</span>
                  <span className="f4 b">{entry.getIn(["data", "max_guests"])}</span>
                </div>
              </div>
              
              <div className="mb4">
                <h4 className="f4 b mb3">Amenities</h4>
                <ul className="property-detail__amenities">
                  {(entry.getIn(["data", "amenities"]) || []).map((amenity, i) => (
                    <li className="property-detail__amenity" key={i}>{amenity}</li>
                  ))}
                </ul>
              </div>
              
              <div className="tc">
                <a href="/contact" className="btn btn-lg btn-block raise">Contact Us to Book</a>
              </div>
            </div>
          </div>
        </div>

        <div className="cms mw7 center ph3">
          {widgetFor("body")}
        </div>
      </div>
    </div>;
  }
} 