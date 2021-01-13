describe('calculateMonthlyPayment tests', function() {
  it('should calculate the monthly rate correctly', function () {
    expect(calculateMonthlyPayment({amount: 10, years: 1, rate: 0.2})).toBe('0.93');
    expect(calculateMonthlyPayment({amount: 100, years: 1, rate: 0.2})).toBe('9.26');
    expect(calculateMonthlyPayment({amount: 1000, years: 1, rate: 0.2})).toBe('92.63');
  });

  it("should return a result with 2 decimal places", function() {
      expect(calculateMonthlyPayment({amount: 0, years: 1, rate: 0.2})).toBe('0.00');
  });
});