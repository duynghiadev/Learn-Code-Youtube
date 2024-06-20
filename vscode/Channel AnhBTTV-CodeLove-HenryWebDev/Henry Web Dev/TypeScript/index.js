"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classImplementsInterface_1 = require("./classImplementsInterface");
var documentOne = new classImplementsInterface_1.Invoice("Vinamilk", "drink milk", 5000000);
var documentTwo = new classImplementsInterface_1.Payment("Vietnam Airlines", "fly", 2500000);
var allDocuments = [];
allDocuments.push(documentOne);
allDocuments.push(documentTwo);
console.log("allDocuments:", allDocuments);
