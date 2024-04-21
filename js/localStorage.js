const selectTypeItemBtn = document.querySelector(".selectionOfItemsTypeBtn__budgCnt");
const addItemBtn = document.querySelector(".addItemBtn__budgCnt");
const itemIncomesCnt = document.querySelector(".titleOfItemsGroupIncomes");

export class LocalStorage {
   constructor(){
   
      this.incomeItems = [];
      this.expenseItems = [];

      this.listenerFunc();
   }

   listenerFunc() {
      this.getFromLocalStorage();
      addItemBtn.addEventListener('click', (e) => { this.setToLocalStorage(e) });
   }

   setToLocalStorage(e) {
      e.preventDefault();
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

   getFromLocalStorage() {
     const itemsArray = JSON.parse(localStorage.getItem('incomeItems'));
     
      for (let i = 0; i < itemsArray.length; i++){

         let el = itemsArray[i];
         this.incomeItems.push(el);

         const templateIncomes = document.querySelector("#incomesTemplateCnt__budgCnt");
         const clone = templateIncomes.content.cloneNode(true);

         const nameItemIncomes = clone.querySelector(".itemIncomes__budgCnt");
         const amountItemIncomes = clone.querySelector(".itemAmount__budgCnt");

         nameItemIncomes.innerText = el.nameItem;
         amountItemIncomes.innerText = el.amountItem;

         itemIncomesCnt.classList.add("titleOfItemsGroupIncome");
         itemIncomesCnt.append(clone);
      }
   }

}