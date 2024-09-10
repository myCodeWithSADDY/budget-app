let budget = document.getElementById("budget-input");
let amount = document.getElementById("budget-amount");
let expense = document.getElementById("expense-input");
let Eamount = document.getElementById("expenses-amount");
let des = document.getElementById("expense-description");
let List = document.getElementById("expenses-list");
let nextitem = document.querySelector(".child-amount");
let deleted = document.querySelector(".deleted");
let balance= document.getElementById('balance-amount')





function balanced(){
    let expenseValue = parseInt(expense.value) || 0; // Get expense value as an integer, default to 0 if empty

    // Get the currently displayed budget (since budget input is cleared after setting it)
    let currentBudget = parseInt(amount.innerText) || 0;
  
    // Update the balance based on the current budget and the new expense
    balance.innerText = currentBudget - expenseValue;
}
balance()




function Bcal() {
  if (isNaN(budget.value)) {
    alert("please Enter Valid Entry");
    amount.value = 0;
    budget.value = "";
  } else {
    amount.innerText = budget.value;
  }
}

function Ecal() {
  if (isNaN(expense.value)) {
    alert("please Enter Valid Entry");
    Eamount.value = 0;
    expense.value = "";
    des.value = "";
  } else {
    List.innerHTML = `<ul class="items-list">
              <li>${des.value}</li>
              <li class="child-amount">${expense.value}</li>
              <li>
                <img src="delete.svg" class="deleted" alt="">
              </li>
            </ul>`;
    Eamount.innerText = expense.value;
    balance.innerText = parseInt(budget.value) - parseInt(expense.value) ;
    budget.value=""
    expense.value=""
    des.value=""
    
  }
}
List.addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("deleted")) {
    let parentUl = e.target.closest("ul");
    parentUl.remove();
    amount.innerText=0;
    Eamount.innerText=0;
    balance.innerText=0;
  }
});
