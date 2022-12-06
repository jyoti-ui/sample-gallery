import React, {useState, useEffect} from "react";
import "./directory.scss";
import CollectionItem from "./listitem";

const Directory = () => {
const [sections, setSection] = useState([])

useEffect( () => {
   ( async() => {
    const data = await fetch("https://jsonplaceholder.typicode.com/photos")
    const res = await data.json();
    setSection(res)
    })()
}, [])

return (
  <div className="directory-menu">
    {sections
    .map(({ id, ...otherSectionProps }) => (
      <CollectionItem key={id} {...otherSectionProps} />
    ))}
  </div>
);
}

export default Directory;
