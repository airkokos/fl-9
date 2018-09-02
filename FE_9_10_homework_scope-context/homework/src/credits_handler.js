function userCard(index) {
    const userCardInfo = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: index
    };
    function getCardOptions() {
        return userCardInfo;
    }
    function putCredits(amount) {
        userCardInfo.balance = userCardInfo.balance + amount;
        updateHistory('Received credits', amount);
    }
    function takeCredits(amount) {
        if (userCardInfo.balance >= amount && userCardInfo.transactionLimit >= amount) {
            userCardInfo.balance = userCardInfo.balance - amount;
            updateHistory('Withdrawal of credits', amount);
        } else if (userCardInfo.balance < amount) {
            console.log('Your money end');
        } else {
            console.log('Out of limit');
        }
    }
    function setTransactionLimit(amount) {
        userCardInfo.transactionLimit = amount;
        updateHistory('Transaction limit change', amount);
    }
    function transferCredits(amount, card) {
        const zeroFive = 0.5;
        const oneHundred = 100;
        let tax = amount * zeroFive / oneHundred;
        let balance = userCardInfo.balance;
        takeCredits(amount);
        if (balance < userCardInfo.balance) {
            card.putCredits(amount - tax);
        }
    }
    function updateHistory(operationType, credits) {
        let entry = {
            operationType,
            credits,
            operationTime: new Date().toLocaleString('en-GB')
        };
        userCardInfo.historyLogs.push(entry);
    }
    return {
        getCardOptions,
        putCredits,
        takeCredits,
        setTransactionLimit,
        transferCredits
    };
}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.maxCards = 3;
    }
    addCard() {
        if (this.cards.length > this.maxCards) {
            return;
        } else {
            this.cards.push(userCard(this.cards.length + 1));
        }
    }
    getCardByKey(index) {
        return this.cards[index - 1];
    }
}