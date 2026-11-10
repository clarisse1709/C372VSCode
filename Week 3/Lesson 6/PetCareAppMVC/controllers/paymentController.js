const mockServices = require('../data/mockServices');
const mockPaymentProvider = require('../services/mockPaymentProvider');

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

async function createMockPayment(req, res) {
  const service = mockServices.find(
    item => item.serviceId.toString() === req.params.serviceId
  );

  if (!service) {
    return res.status(404).json({ error: 'Service not found' });
  }

  const merchantReference = `SERVICE-${service.serviceId}`;
  const payment = await mockPaymentProvider.createPayment({
    amount: service.amount,
    serviceName: service.serviceName,
    currency: 'sgd',
    merchantReference,
    testStatus: req.body?.testStatus
  });
  const bookingStatuses = {
    APPROVED: 'CONFIRMED',
    PENDING: 'AWAITING_PAYMENT',
    DECLINED: 'PAYMENT_FAILED'
  };

  res.status(200).json({
    serviceId: service.serviceId,
    providerPaymentId: payment.providerPaymentId,
    merchantReference: payment.merchantReference,
    paymentStatus: payment.status,
    bookingStatus: bookingStatuses[payment.status]
  });
}

module.exports = { preparePayment, createMockPayment };
