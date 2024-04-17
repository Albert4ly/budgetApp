const addItemBtn = document.querySelector(".addItemBtn__budgCnt");
const selectTypeItemBtn = document.querySelector(".selectionOfItemsTypeBtn__budgCnt");
const itemsListCnt = document.querySelector(".itemsListCnt__budgCnt");
const itemIncomesCnt = document.querySelector(".titleOfItemsGroupIncomes");
const itemExpensesCnt = document.querySelector(".titleOfItemsGroupExpenses");

export class AddItems {
   constructor() {
      this.typeItem = false;


      this.listenerFunc()
   };

   listenerFunc() {
      selectTypeItemBtn.addEventListener('click', (e) => {  this.changeSelectTypeClass(e) });
      addItemBtn.addEventListener('click', (e) => { this.fillTemplateOfData(e) });
   }

   fillTemplateOfData(e) {
      e.preventDefault();
      const itemInput = document.querySelector(".itemInput__budgCnt");
      const amountInput = document.querySelector(".valueInput__budgCnt");

      if (!selectTypeItemBtn.classList.contains("selectionOfItemsTypeBtn__budgCnt--incomes")) {
         const templateExpenses = document.querySelector("#expensesTemplateCnt__budgCnt");
         const clone2 = templateExpenses.content.cloneNode(true);

         const nameItemExpenses = clone2.querySelector(".itemExpenses__budgCnt");
         const amountItemExpenses = clone2.querySelector(".itemAmount__budgCnt");
         nameItemExpenses.innerText = itemInput.value;
         amountItemExpenses.innerText = amountInput.value;

         itemExpensesCnt.classList.add("titleOfItemsGroupExpense");
         itemExpensesCnt.append(clone2);
      }

      if (selectTypeItemBtn.classList.contains("selectionOfItemsTypeBtn__budgCnt--incomes")) {
         const templateIncomes = document.querySelector("#incomesTemplateCnt__budgCnt");
         const clone = templateIncomes.content.cloneNode(true);

         const nameItemIncomes = clone.querySelector(".itemIncomes__budgCnt");
         const amountItemIncomes = clone.querySelector(".itemAmount__budgCnt");
         nameItemIncomes.innerText = itemInput.value;
         amountItemIncomes.innerText = amountInput.value;

         itemIncomesCnt.classList.add("titleOfItemsGroupIncome");
         itemIncomesCnt.append(clone);
      }
   }
  

   changeSelectTypeClass(e) {
      e.preventDefault();
      selectTypeItemBtn.classList.toggle("selectionOfItemsTypeBtn__budgCnt--incomes");
   }
};
