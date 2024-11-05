"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = exports.Invoice = void 0;
var Invoice = /** @class */ (function () {
    function Invoice(client, work, amount) {
        this.client = client;
        this.work = work;
        this.amount = amount;
    }
    Invoice.prototype.print = function () {
        return "".concat(this.client, " owes ").concat(this.amount, " dollar(s) for this work: ").concat(this.work);
    };
    return Invoice;
}());
exports.Invoice = Invoice;
var Payment = /** @class */ (function () {
    function Payment(recipient, job, amt) {
        this.recipient = recipient;
        this.job = job;
        this.amt = amt;
    }
    Payment.prototype.print = function () {
        return "I owes ".concat(this.recipient, " ").concat(this.amt, " dollar(s) for this job: ").concat(this.job);
    };
    return Payment;
}());
exports.Payment = Payment;
