'use strict';

describe ("Weather", function(){
   var metoffice;
   beforeEach(function(){
   metoffice = new Weather();
 });
  it("returns sunny", function(){
  spyOn(Math, 'random').and.returnValue(5);
  expect(metoffice.forecast()).toEqual("Sunny");
  })
  it("returns stormy", function(){
    spyOn(Math, 'random').and.returnValue(3);
    expect(metoffice.forecast()).toEqual("Stormy");
  })
});
