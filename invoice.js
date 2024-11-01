document.addEventListener('DOMContentLoaded', function() {

    // add initital total calculation first 
        //here
    
    // these are selection helpers
    const invoiceTable = document.getElementById('invoiceTable').getElementsByTagName('tbody')[0];
    const invoiceTotal = document.getElementById('invoiceTotal');
    const quantityclss = document.getElementsByClassName('quantity');
    const unitPrice = document.getElementsByClassName('unitPrice');

  
    const quantity = this.getElementById('quantity');
    const price = this.getElementById('price');
    const total = this.getElementById('total');
    console.log(unitPrice.namedItem(''))
   
    
    const quantitytHandler = function(e) {
     total.innerText = e.target.value * price.value;
    }

    const pricetHandler = function(e) {
        total.innerText = e.target.value * quantity.value;
       }
    
    quantity.addEventListener('input', quantitytHandler);
    price.addEventListener('input',pricetHandler)

    function addNewItem() {
       
            var table = document.getElementById("myTable");
            var row = table.insertRow(0);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML = "NEW CELL1";
            cell2.innerHTML = "NEW CELL2";
          
         

    }




  







 
});
