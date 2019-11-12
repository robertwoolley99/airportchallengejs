'use strict';

describe ("Aircraft", function(){
  var a320
  beforeEach(function(){
    a320 = new airCraft();
  });
  it("lands when asked to do so", function(){
    expect(a320.land()).toBeTruthy();
  })
  it("returns status as landed when initialised", function(){
    expect(a320.status()).toEqual("Landed");
  })
});
