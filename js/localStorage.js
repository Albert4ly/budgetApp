const selectTypeItemBtn = document.querySelector(".selectionOfItemsTypeBtn__budgCnt");
const addItemBtn = document.querySelector(".addItemBtn__budgCnt");

export class LocalStorage {
   constructor(){
   
      this.incomeItems = [];
      this.expenseItems = [];

      this.listenerFunc();
   }

   listenerFunc() {
      addItemBtn.addEventListener('click', (e) => { this.setToLocalStorage(e) });
   }

   setToLocalStorage(e) {
      const nameItemInput = document.querySelector(".itemInput__budgCnt").value;
      const amountItemInput = document.querySelector(".valueInput__budgCnt").value;

      const item = {
         nameItem: nameItemInput,
         amountItem: amountItemInput,
      }

      if (!selectTypeItemBtn.classList.contains("selectionOfItemsTypeBtn__budgCnt--incomes")) {
         this.expenseItems.push(item);
         localStorage.setItem("expenseItems", JSON.stringify(this.expenseItems));
      }
      if (selectTypeItemBtn.classList.contains("selectionOfItemsTypeBtn__budgCnt--incomes")) {
         this.incomeItems.push(item);
         localStorage.setItem("incomeItems", JSON.stringify(this.incomeItems));
      }

   }
}