
document.addEventListener("DOMContentLoaded", function ()//(event,callback)
 {
    document.getElementById("billAmount").addEventListener("input", function () {
        this.value = this.value < 0 ? 0 : this.value;
    });
});

function calculateBill() {
    let billNo = document.getElementById('billNo').value.trim();
    let billAmount = parseFloat(document.getElementById('billAmount').value);
    let billDate = new Date(document.getElementById('billDate').value);
    
    if (!billNo) {
        alert("Please enter a valid Bill No.");
        return;
    }
    if (isNaN(billAmount) || billAmount <= 0) {
        alert("Please enter a valid Bill Amount.");
        return;
    }
    if (isNaN(billDate.getTime())) {
        alert("Please enter a valid Bill Date.");
        return;
    }
    
    let day = billDate.getDay();
    let discountRate = (day === 1 || day === 2) ? 0.10 : 
                       (day === 3 || day === 4) ? 0.15 : 0.05;
    let discount = billAmount * discountRate;
    let tax = billAmount * 0.05;
    let netPayment = (billAmount - discount) + tax;
    
    document.getElementById('discount').textContent = discount.toFixed(2);
    document.getElementById('tax').textContent = tax.toFixed(2);
    document.getElementById('netPayment').textContent = netPayment.toFixed(2);
}
