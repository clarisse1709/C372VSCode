# Feature: Prepare payment details

## 1. User goal
Pet owners want to review the selected pet service and its payment amount before making payment.

## 2. Scope
- Allow pet owners to prepare payment details.
- Support Vaccination, Pet Grooming and Boarding.
- This classroom mock endpoint does not require login.
- No actual payment processing.
- No payment gateway, new database tables or EJS pages.

## 3. Request
- HTTP Method: GET
- URL: `/payments/prepare/:serviceId`
- Input: Service ID.
- The server retrieves the price from the mock catalogue.
- Client-supplied payment amounts must not be used. The server always uses the price from its mock catalogue.

## 4. Service catalogue

| ID | Service name | Price |
|---|---|---:|
| 1 | Vaccination | 35 |
| 2 | Pet Grooming | 50 |
| 3 | Boarding | 80 |

## 5. Successful response
HTTP Status: 200

```json
{
  "serviceId": 1,
  "serviceName": "Vaccination",
  "amount": 35,
  "currency": "sgd",
  "status": "READY_FOR_PAYMENT"
}
```

Exactly five fields are required.
- serviceId and amount are numbers.
- Other fields are strings.
- amount represents the service price in SGD.

## 6. Unsuccessful response
HTTP Status: 404

```json
{
  "error": "Service not found"
}
```

The failure response must contain exactly one field: `error`, with the string value `Service not found`.
Any service ID not found in the mock catalogue returns this response.

## 7. Acceptance criteria
- AC1: Service ID 1 returns Vaccination with amount 35.
- AC2: Service ID 2 returns Pet Grooming with amount 50.
- AC3: Service ID 3 returns Boarding with amount 80.
- AC4: Any service ID not found in the mock catalogue returns HTTP 404 with exactly one field, `error`, whose string value is `Service not found`.
- AC5: Successful responses contain exactly five fields with correct data types and values.

## 8. Open questions
- What should happen when `serviceId` is non-numeric?
- Can catalogue prices contain decimal values, or are they whole numbers only?