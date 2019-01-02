// Create a Module
var app = angular.module('InvoiceApp',[]);

// Create a Controller
app.controller('InvoiceAppCtrl',function($scope) {
    $scope.editInvoice = true;
    $scope.invoice = {
        customer_data : {
            name : 'Mr. Rajan Jain',
            company : 'Jain Industries Inc.',
            address1 : 'Plot No: 112',
            address2 : 'Hitech City , Hyderabad',
            pincode : 90210
        },
        company_data : {
            name : 'UiBrains Techno Labs',
            company : 'UiBrains.com',
            address1 : 'Plot No: 1471 , Road No: 12',
            address2 : 'Jubilee Hills , Hyderabad',
            pincode : 5001002
        },
        invoiceItems : [

        ],
        gst : 13
    };
    $scope.addInvoiceItem = function() {
        var newItem = {
            description : null,
            quantity : null,
            cost : null
        };
        $scope.invoice.invoiceItems.push(newItem);
    };
    $scope.deleteInvoiceItem = function(index) {
      $scope.invoice.invoiceItems.splice(index,1);
    };
    $scope.subTotal = function() {
        var tempTotal = 0;
        $scope.invoice.invoiceItems.forEach(function (item) {
             tempTotal += (item.quantity * item.cost);
        });
        return tempTotal;
    };
    $scope.addGST = function() {
        return $scope.subTotal() * $scope.invoice.gst / 100;
    };
    $scope.grandTotal = function() {
      return $scope.subTotal() + $scope.addGST();
    };
    $scope.ONEditInvoice = function() {
        $scope.editInvoice = true;
    };
    $scope.OFFEditInvoice = function() {
        $scope.editInvoice = false;
    };
    $scope.printDoc = function() {
        window.print();
    };
});