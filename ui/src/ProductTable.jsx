/* eslint linebreak-style: ["error","windows"] */

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  Button, Glyphicon, Tooltip, OverlayTrigger,
} from 'react-bootstrap';

const deleteTooltip = (
  <Tooltip id="delete-tooltip" placement="top">Delete Product</Tooltip>
);

const ProductRow = withRouter(({ product, deleteProduct, index }) => (
  <tr>
    <td>{product.Name}</td>
    <td>
      $
      {product.Price}
    </td>
    <td>{product.Category}</td>
    <td><Link to={`/img/${product.Image}`}>View</Link></td>
    <td><Link to={`/edit/${product.id}`}>Edit</Link></td>
    <td>
      <OverlayTrigger delayShow={1000} overlay={deleteTooltip}>
        <Button bsSize="xsmall" onClick={() => { deleteProduct(index); }}>
          <Glyphicon glyph="trash" />
        </Button>
      </OverlayTrigger>
    </td>
  </tr>
));

export default function ProductTable({ products, deleteProduct }) {
  const productRows = products.map(product => (
    <ProductRow
      key={product.id}
      product={product}
      deleteProduct={deleteProduct}
      index={product.id}
    />
  ));
  return (
    <table className="borderedTable">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Image</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {productRows}
      </tbody>
    </table>
  );
}
