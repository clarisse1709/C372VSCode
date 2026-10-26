const paymentStatus = 'APPROVED';

// check the paymentstatus and display the appropriate message
if (paymentStatus === 'APPROVED') {
    console.log('Pet-Care service confirmed');
} else if (paymentStatus === "PENDING") {
    console.log("Payment is being processed");
} else if (paymentStatus === "DECLINED") {
    console.log("Payment unsuccessful");
}