import React from "react";
import "./listitem.scss";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../redux/actions";


const CollectionItem = ({title, thumbnailUrl}) => {
    const dispatch = useDispatch();
    return (
    <div className="collection-item">
        <div 
            className="image"
            style={{
                backgroundImage : `url(${thumbnailUrl})`
            }}
        />
        <div className="collection-footer">
            <span className="name">{title}</span>
            <span className="price">
                <button onClick={dispatch(increment())}> + </button>
            </span>
            <span className="price">
                <button onClick={dispatch(decrement())}> - </button>
            </span>
        </div>
    </div>
)
}

export default CollectionItem;