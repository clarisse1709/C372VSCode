async function createPayment(request) {
  return {
    providerPaymentId: 'mock_' + Date.now(),
    merchantReference: request.merchantReference,
    status: request.testStatus || 'PENDING'
  };
}

module.exports = { createPayment };
