import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
  
const Artwork = (props) => (

  <ul class="mdc-image-list my-image-list">
    <li class="mdc-image-list__item">
      <div class="mdc-image-list__image-aspect-container">
        <img class="mdc-image-list__image" src="..." />
      </div>
      <div class="mdc-image-list__supporting">
        <span class="mdc-image-list__label">Text label</span>
      </div>
    </li>
    ...
  </ul>

  // <div className="mdc-card" style={{width: '18rem'}}>
  //   <div class="card-header">
  //     {String(props.artwork.owner)}
  //   </div>
  //   <img className="mdc-card--media" src={props.artwork.url} alt="Card image cap" />
  //   <div className="card-body">
  //     <h5 className="card-title">{props.artwork.metadata.title}: {props.artwork.metadata.series}</h5>
  //     <p className="card-text">{props.artwork.metadata.caption}</p>
  //     {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  //   </div>
  //   <div class="card-footer text-muted">
  //     {props.artwork.tags.map((num) => {
  //       return "#" + num + " ";
  //       // TODO MAKE THESE HYPERLINKS
  //     })}
  //   </div>
  // </div>
  
);


export default function ArtView() {
  const [artworks, setArtworks] = useState([]);
  
  // This method fetches the records from the database.
  useEffect(() => {
      async function getArtworks() {
          const response = await fetch(`http://localhost:5005/api/artwork/`);
  
          if (!response.ok) {
              const message = `An error occurred: ${response.statusText}`;
              window.alert(message);
              return;
          }
  
          const artworks = await response.json();
          setArtworks(artworks);
      }
  
      getArtworks();
  
      return;
  }, [artworks.length]);
  
//   // This method will delete a record
//   async function deleteRecord(id) {
//       await fetch(`http://localhost:5005/${id}`, {
//           method: "DELETE"
//       });
  
//       const newRecords = records.filter((el) => el._id !== id);
//       setRecords(newRecords);
//   }
  
  // This method will map out the records on the table
  function artworkList() {
      return artworks.map((artwork) => {
          return (
              <Artwork
                  artwork={artwork}
                //   deleteRecord={() => deleteRecord(record._id)}
                  key={artwork._id}
              />
          );
      });
  }
  
  // This following section will display the table with the records of individuals.
  return (
      <div>
          <h3>Artwork List</h3>
          {/* <table className="table table-striped" style={{ marginTop: 20 }}> */}
              {/* <thead>
                  <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Level</th>
                      <th>Action</th>
                  </tr>
              </thead> */}
              <div>{artworkList()}</div>
          {/* </table> */}
      </div>
  );
}
