function airCraft() {
this._status = "Landed";
}

airCraft.prototype.status = function(){
  return this._status
}

airCraft.prototype.land = function() {
  return true
};
