const mockServices = require('../data/mockServices');

function preparePayment(req, res) {
  const service = mockServices.find(
    item => item.serviceId.toString() === req.params.serviceId
  );

  if (!service) {
    return res.status(404).json({ error: 'Service not found' });
  }

  res.status(200).json({
    serviceId: service.serviceId,
    serviceName: service.serviceName,
    amount: service.amount,
    currency: 'sgd',
    status: 'READY_FOR_PAYMENT'
  });
}

module.exports = { preparePayment };
