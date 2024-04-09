const addItemBtn = document.querySelector(".addItemBtn__budgCnt");
const selectTypeItemBtn = document.querySelector(".selectionOfItemsTypeBtn__budgCnt");
const itemsListCnt = document.querySelector(".itemsListCnt__budgCnt");

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

      if (!selectTypeItemBtn.classList.contains("selectionOfItemsTypeBtn__budgCnt--incomes")) {
         const templateExpenses = document.querySelector("#expensesTemplateCnt__budgCnt");
         const clone2 = templateExpenses.content.cloneNode(true);

         const nameItemExpenses = clone2.querySelector(".itemExpenses__budgCnt");
         nameItemExpenses.innerText = itemInput.value;
         itemsListCnt.append(clone2);
      }

      if (selectTypeItemBtn.classList.contains("selectionOfItemsTypeBtn__budgCnt--incomes")) {
         const templateIncomes = document.querySelector("#incomesTemplateCnt__budgCnt");
         const clone = templateIncomes.content.cloneNode(true);

         const nameItemIncomes = clone.querySelector(".itemIncomes__budgCnt");
         nameItemIncomes.innerText = itemInput.value;
         itemsListCnt.append(clone);
      }
   }
  

   changeSelectTypeClass(e) {
      e.preventDefault();
      selectTypeItemBtn.classList.toggle("selectionOfItemsTypeBtn__budgCnt--incomes");
   }
};
