import React, { Component } from "react";
import PropTypes from "prop-types";
import Item from "./Item";

class ItemFeed extends Component {
  render() {
    const { items, cart } = this.props;

    return (
      <>
        <div className="row">
          {items.map(item => (
            <Item key={item._id} item={item} cart={cart} />
          ))}
        </div>
      </>
    );
  }
}

ItemFeed.propTypes = {
  items: PropTypes.array.isRequired
};

export default ItemFeed;
