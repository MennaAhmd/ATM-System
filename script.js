// script.js
// Counter to track wrong PIN attempts
let counter = 0;

// Variable to store chosen language
let lang = "EN"; // Default English

// User object with attributes and methods
let user = {
    name: "Menna Ahmed",
    PIN: 8080,
    balance: 5000,
    acountnum: 20305060,
    // Show current balance
    checkBalance: function() {
        return this.balance;
    },

    // Deposit money into the account
    deposit: function(amount) {
        if (amount > 0) {
            this.balance += amount;
            return true;
        } else {
            return false;
        }
    },

    // Transfer money to another account
    transfer: function(amount, account) {
        if (amount > 0 && amount <= this.balance && account) {
            this.balance -= amount;
            return true;
        } else {
            return false;
        }
    },

    // Withdraw money from the account
    withdraw: function(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            return true;
        } else {
            return false;
        }
    },

    // Change PIN
    changePin: function(oldPin, newPin) {
        if (oldPin === this.PIN) {
            this.PIN = newPin;
            return true;
        } else {
            return false;
        }
    }
};

// DOM Elements
const languageScreen = document.getElementById('language-screen');
const pinScreen = document.getElementById('pin-screen');
const menuScreen = document.getElementById('menu-screen');
const balanceScreen = document.getElementById('balance-screen');
const depositScreen = document.getElementById('deposit-screen');
const withdrawScreen = document.getElementById('withdraw-screen');
const transferScreen = document.getElementById('transfer-screen');
const changePinScreen = document.getElementById('change-pin-screen');
const exitScreen = document.getElementById('exit-screen');

// Buttons
const langEnBtn = document.getElementById('lang-en');
const langArBtn = document.getElementById('lang-ar');
const proceedBtn = document.getElementById('proceed-btn');
const loginBtn = document.getElementById('login-btn');
const balanceBtn = document.getElementById('balance-btn');
const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');
const transferBtn = document.getElementById('transfer-btn');
const changePinBtn = document.getElementById('change-pin-btn');
const exitBtn = document.getElementById('exit-btn');
const backFromBalanceBtn = document.getElementById('back-from-balance');
const confirmDepositBtn = document.getElementById('confirm-deposit');
const backFromDepositBtn = document.getElementById('back-from-deposit');
const confirmWithdrawBtn = document.getElementById('confirm-withdraw');
const backFromWithdrawBtn = document.getElementById('back-from-withdraw');
const confirmTransferBtn = document.getElementById('confirm-transfer');
const backFromTransferBtn = document.getElementById('back-from-transfer');
const confirmPinChangeBtn = document.getElementById('confirm-pin-change');
const backFromPinChangeBtn = document.getElementById('back-from-pin-change');
const restartAtmBtn = document.getElementById('restart-atm');

// Inputs
const pinInput = document.getElementById('pin-input');
const depositAmountInput = document.getElementById('deposit-amount');
const withdrawAmountInput = document.getElementById('withdraw-amount');
const transferAmountInput = document.getElementById('transfer-amount');
const accountNumberInput = document.getElementById('account-number');
const oldPinInput = document.getElementById('old-pin');
const newPinInput = document.getElementById('new-pin');
const confirmNewPinInput = document.getElementById('confirm-new-pin');

// Display Elements
const bankNameElement = document.getElementById('bank-name');
const welcomeMessageElement = document.getElementById('welcome-message');
const pinMessageElement = document.getElementById('pin-message');
const pinLabelElement = document.getElementById('pin-label');
const attemptsWarningElement = document.getElementById('attempts-warning');
const greetingMessageElement = document.getElementById('greeting-message');
const balanceAmountElement = document.getElementById('balance-amount');

// Function to show a specific screen
function showScreen(screen) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen-content');
    screens.forEach(screen => screen.classList.remove('active'));
    
    // Show the requested screen
    screen.classList.add('active');
}

// Function to update UI text based on language
function updateLanguage() {
    if (lang === "EN") {
        bankNameElement.textContent = "Global Bank ATM";
        welcomeMessageElement.textContent = "Welcome to ATM Service";
        pinMessageElement.textContent = "Please enter your PIN";
        pinLabelElement.textContent = "PIN Number";
        pinInput.placeholder = "Enter 4-digit PIN";
        loginBtn.textContent = "Login";
        greetingMessageElement.textContent = `Hello, ${user.name}`;
        balanceBtn.textContent = "Check Balance";
        depositBtn.textContent = "Deposit";
        withdrawBtn.textContent = "Withdraw";
        transferBtn.textContent = "Transfer";
        changePinBtn.textContent = "Change PIN";
        exitBtn.textContent = "Exit";
        
        // Update button texts for English
        document.querySelectorAll('.btn').forEach(btn => {
            if (btn.textContent === "إيداع") btn.textContent = "Deposit";
            if (btn.textContent === "سحب") btn.textContent = "Withdraw";
            if (btn.textContent === "تحويل") btn.textContent = "Transfer";
            if (btn.textContent === "الرجوع") btn.textContent = "Back";
            if (btn.textContent === "إلغاء") btn.textContent = "Cancel";
        });
    } else {
        bankNameElement.textContent = "ماكينة الصراف الآلي";
        welcomeMessageElement.textContent = "مرحباً بك في خدمة الصراف الآلي";
        pinMessageElement.textContent = "الرجاء إدخال رقم PIN الخاص بك";
        pinLabelElement.textContent = "رقم PIN";
        pinInput.placeholder = "أدخل رقم PIN المكون من 4 أرقام";
        loginBtn.textContent = "دخول";
        greetingMessageElement.textContent = `مرحباً، ${user.name}`;
        balanceBtn.textContent = "كشف الرصيد";
        depositBtn.textContent = "إيداع";
        withdrawBtn.textContent = "سحب";
        transferBtn.textContent = "تحويل";
        changePinBtn.textContent = "تغيير الرقم السري";
        exitBtn.textContent = "خروج";
        
        // Update button texts for Arabic
        document.querySelectorAll('.btn').forEach(btn => {
            if (btn.textContent === "Deposit") btn.textContent = "إيداع";
            if (btn.textContent === "Withdraw") btn.textContent = "سحب";
            if (btn.textContent === "Transfer") btn.textContent = "تحويل";
            if (btn.textContent === "Back") btn.textContent = "الرجوع";
            if (btn.textContent === "Cancel") btn.textContent = "إلغاء";
        });
    }
    
    // Update attempts warning
    updateAttemptsWarning();
}

// Function to update attempts warning message
function updateAttemptsWarning() {
    if (counter > 0) {
        if (lang === "EN") {
            attemptsWarningElement.textContent = `Wrong PIN! You have ${3 - counter} tries left.`;
        } else {
            attemptsWarningElement.textContent = `الرقم السري خاطئ! لديك ${3 - counter} محاولات متبقية.`;
        }
    } else {
        attemptsWarningElement.textContent = "";
    }
}

// Event Listeners
langEnBtn.addEventListener('click', () => {
    lang = "EN";
    langEnBtn.classList.add('active');
    langArBtn.classList.remove('active');
    updateLanguage();
});

langArBtn.addEventListener('click', () => {
    lang = "AR";
    langArBtn.classList.add('active');
    langEnBtn.classList.remove('active');
    updateLanguage();
});

proceedBtn.addEventListener('click', () => {
    showScreen(pinScreen);
});

loginBtn.addEventListener('click', () => {
    const pin = Number(pinInput.value);
    
    if (pin === user.PIN) {
        counter = 0; // Reset failed attempts
        showScreen(menuScreen);
        if (lang === "EN") {
            greetingMessageElement.textContent = `Hello, ${user.name}`;
        } else {
            greetingMessageElement.textContent = `مرحباً، ${user.name}`;
        }
    } else {
        counter++;
        if (counter >= 3) {
            if (lang === "EN") {
                attemptsWarningElement.textContent = "You Have Reached Number of tries, Try again later!";
            } else {
                attemptsWarningElement.textContent = "لقد وصلت لعدد المحاولات المسموح به، حاول لاحقاً!";
            }
            loginBtn.disabled = true;
        } else {
            updateAttemptsWarning();
        }
    }
    
    pinInput.value = "";
});

balanceBtn.addEventListener('click', () => {
    const balance = user.checkBalance();
    balanceAmountElement.textContent = lang === "EN" ? `$${balance.toLocaleString()}` : `${balance.toLocaleString()} $`;
    showScreen(balanceScreen);
});

depositBtn.addEventListener('click', () => {
    showScreen(depositScreen);
});

withdrawBtn.addEventListener('click', () => {
    showScreen(withdrawScreen);
});

transferBtn.addEventListener('click', () => {
    showScreen(transferScreen);
});

changePinBtn.addEventListener('click', () => {
    showScreen(changePinScreen);
});

exitBtn.addEventListener('click', () => {
    showScreen(exitScreen);
});

backFromBalanceBtn.addEventListener('click', () => {
    showScreen(menuScreen);
});

confirmDepositBtn.addEventListener('click', () => {
    const amount = Number(depositAmountInput.value);
    if (user.deposit(amount)) {
        alert(lang === "EN" ? "Deposit Done Successfully!!" : "تم الإيداع بنجاح!");
        showScreen(menuScreen);
    } else {
        alert(lang === "EN" ? "Error, Please Enter Valid Value!!" : "خطأ، من فضلك أدخل قيمة صحيحة!");
    }
    depositAmountInput.value = "";
});

backFromDepositBtn.addEventListener('click', () => {
    showScreen(menuScreen);
    depositAmountInput.value = "";
});

confirmWithdrawBtn.addEventListener('click', () => {
    const amount = Number(withdrawAmountInput.value);
    if (user.withdraw(amount)) {
        alert(lang === "EN" ? "Withdraw Done Successfully!!" : "تم السحب بنجاح!");
        showScreen(menuScreen);
    } else {
        alert(lang === "EN" 
            ? "Error, Please Enter Valid Value or Check Balance!!" 
            : "خطأ، من فضلك أدخل قيمة صحيحة أو تحقق من الرصيد!");
    }
    withdrawAmountInput.value = "";
});

backFromWithdrawBtn.addEventListener('click', () => {
    showScreen(menuScreen);
    withdrawAmountInput.value = "";
});

confirmTransferBtn.addEventListener('click', () => {
    const amount = Number(transferAmountInput.value);
    const account = accountNumberInput.value;
    if (user.transfer(amount, account)) {
        alert(lang === "EN" 
            ? `Transfer of $${amount} to account ${account} Done Successfully!!` 
            : `تم تحويل ${amount}$ إلى الحساب ${account} بنجاح!`);
        showScreen(menuScreen);
    } else {
        alert(lang === "EN" 
            ? "Error, Please Enter Valid Value or Check Balance!!" 
            : "خطأ، من فضلك أدخل قيمة صحيحة أو تحقق من الرصيد!");
    }
    transferAmountInput.value = "";
    accountNumberInput.value = "";
});

backFromTransferBtn.addEventListener('click', () => {
    showScreen(menuScreen);
    transferAmountInput.value = "";
    accountNumberInput.value = "";
});

confirmPinChangeBtn.addEventListener('click', () => {
    const oldPin = Number(oldPinInput.value);
    const newPin = Number(newPinInput.value);
    const confirmNewPin = Number(confirmNewPinInput.value);
    
    if (newPin !== confirmNewPin) {
        alert(lang === "EN" 
            ? "New PIN and confirmation do not match!" 
            : "الرقم السري الجديد وتأكيده غير متطابقين!");
        return;
    }
    
    if (user.changePin(oldPin, newPin)) {
        alert(lang === "EN" ? "PIN Changed Successfully!!" : "تم تغيير الرقم السري بنجاح!");
        showScreen(menuScreen);
    } else {
        alert(lang === "EN" 
            ? "Error, Current PIN is incorrect!" 
            : "خطأ، الرقم السري الحالي غير صحيح!");
    }
    
    oldPinInput.value = "";
    newPinInput.value = "";
    confirmNewPinInput.value = "";
});

backFromPinChangeBtn.addEventListener('click', () => {
    showScreen(menuScreen);
    oldPinInput.value = "";
    newPinInput.value = "";
    confirmNewPinInput.value = "";
});

restartAtmBtn.addEventListener('click', () => {
    counter = 0;
    loginBtn.disabled = false;
    showScreen(languageScreen);
});

// Initialize the UI
updateLanguage();