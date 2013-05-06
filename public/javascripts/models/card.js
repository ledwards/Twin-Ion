(function() {
  var namespace = this;

  namespace.Card = Backbone.Model.extend({
    defaults: {
      position: { top: 0, left: 0 }
    },

    initialize: function(){
      this.uuid = uuid.v4();
      TwinIon.game.objectRegister[this.uuid] = this;
    },

    asJSON: function() {
      return $.extend({}, this.toJSON(), {
        cid: this.cid
      });
    }
  });
}).apply(TwinIon);
