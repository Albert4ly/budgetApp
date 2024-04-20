const selectTypeItemBtn = document.querySelector(".selectionOfItemsTypeBtn__budgCnt");
const addItemBtn = document.querySelector(".addItemBtn__budgCnt");

export class CountBudget {
	constructor() { 
		this.listenerFunc();
	}
	
	listenerFunc() {
		addItemBtn.addEventListener('click', (e) => { this.countAmount(e) });
	}

	countAmount(e) {
		e.preventDefault();
		if (!selectTypeItemBtn.classList.contains("selectionOfItemsTypeBtn__budgCnt--incomes")) {
			this.subtractionAmount();
		}
		if (selectTypeItemBtn.classList.contains("selectionOfItemsTypeBtn__budgCnt--incomes")) {
			this.addingAmount();
		}
	}

	addingAmount() {
		const statusOfWallet = document.querySelector("span");
		const amountValueInput = document.querySelector(".valueInput__budgCnt");

		let amount = Number(statusOfWallet.innerText) + Number(amountValueInput.value);
		statusOfWallet.innerText = amount;
	}

	subtractionAmount() {
		const statusOfWallet = document.querySelector("span");
		const amountValueInput = document.querySelector(".valueInput__budgCnt");

		let amount = Number(statusOfWallet.innerText) - Number(amountValueInput.value);
		statusOfWallet.innerText = amount;
	}

}
