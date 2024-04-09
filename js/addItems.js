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
      addItemBtn.addEventListener('click', (e) => { this.checkingClass(e) });
      addItemBtn.addEventListener('click', (e) => { this.fillTemplateOfData(e) });
   }

   checkingClass(e) {
      e.preventDefault();

      if (selectTypeItemBtn.classList.contains("selectionOfItemsTypeBtn__budgCnt--incomes")) {
         this.typeItem = true;
      }
      if (selectTypeItemBtn.classList.contains("selectionOfItemsTypeBtn__budgCnt--exponses")) {
         this.typeItem = false;
      }
   }

   fillTemplateOfData(e) {
      e.preventDefault();
      const itemInput = document.querySelector(".itemInput__budgCnt");

      if (this.typeItem = false) {
         const templateExponses = document.querySelector(".expensesTemplateCnt__budgCnt");
         const clone2 = templateExponses.content.cloneNode(true);

         const nameItemExponses = clone2.querySelector(".itemExponses__budgCnt");
         nameItemExponses.innerText = itemInput.value;
         itemsListCnt.append(clone2);
      }

      if (this.typeItem = true) {
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
