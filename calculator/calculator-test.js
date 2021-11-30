
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 10000,
    years: 10,
    rate: 10
  }
  expect(calculateMonthlyPayment(values)).toEqual('132.15')
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10043,
    years: 8,
    rate: 5.8
  }
  expect(calculateMonthlyPayment(values)).toEqual('131.00')
});

it("should handle really high interest rates", function() {
  const values = {
    amount: 1000,
    years: 40,
    rate: 99
  }
  expect(calculateMonthlyPayment(values)).toEqual('82.50')
});

it("should handle really low interest rates with decimals", function() {
  const values = {
    amount: 10000,
    years: 10,
    rate: .01
  }
  expect(calculateMonthlyPayment(values)).toEqual('83.38')
});
