const addItemBtn = document.querySelector(".addItemBtn__budgCnt");
const selectTypeItemBtn = document.querySelector(".selectionOfItemsTypeBtn__budgCnt");

export class AddItems {
   constructor() {
      this.typeItem = false;


      this.listenerFunc()
   };

   listenerFunc() {
      selectTypeItemBtn.addEventListener('click', (e) => {  this.changeSelectTypeClass(e) });
      addItemBtn.addEventListener('click', (e) => { this.checkingClass(e) });
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

   changeSelectTypeClass(e) {
      e.preventDefault();
      selectTypeItemBtn.classList.toggle("selectionOfItemsTypeBtn__budgCnt--incomes");
   }
};
