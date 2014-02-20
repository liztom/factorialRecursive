describe('factorial', function(){
  it('multiples a number by all its smaller positive integers', function(){
    factorial(5, 5).should.equal(120);
  });
  it('returns "invalid input" if user inputs invalid input', function(){
    factorial(-1, -1).should.equal("invalid input.");
  });
});


