var React = require('react')
,   AddItem = require('./AddItem')
,   List = require('./List');

Var ListContainer = React.createClass({
  getInitialState: function(){
    return (
      <div className="col-sm-6 col-md-offset-3">
        <div className="col-sm-12">
          <h3 className="text-center"> Todo List </h3>
          <AddItem add={this.handleAddItem}/>
          <List items={this.state.list} remove={this.handleRemoveItem}/>
        </div>
      </div>
    )
  }
});

module.exports = ListContainer;
