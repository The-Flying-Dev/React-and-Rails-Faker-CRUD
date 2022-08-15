var StockTable = React.createClass({
  render: function() {
    return(
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col-md-3">Name</th>
            <th className="col-md-2">Description</th>
            <th className="col-md-3">Quantity</th>
            <th className="col-md-4">Unit Price</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    )
  }
});