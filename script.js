/*


XXXatmSystem()
XXXlogin()
XXXoptions()
XXXredirection()
XXXclass user 
=>methods of system 
XXXdeposit,
XXXwithdraw,
XXXtransfer,
XXXcheck balance,
XXXexit
=>attributes 
XXXname,
XXXbalance,
XXXPIN  

Work flow:
    check pin
    if false => login and check (count number of fails if 3 message wait for 10 minutes) 
    ifcorrec
    welcome
    choose opions
    do option
    return to options
    exit

additional :
choose lang 


*/

// Counter to track wrong PIN attempts
let counter = 0;

// Variable to store chosen language
let lang = "EN"; // Default English

// User object with attributes and methods
let user = {
    name: "Menna Ahmed",
    PIN: 8080,
    balance: 5000,

    // Show current balance
    checkBalance: function() {
        alert(lang === "EN" ? `Your Balance Is: ${this.balance}` : `رصيدك هو: ${this.balance}`);
    },

    // Deposit money into the account
    deposit: function() {
        let amount = Number(prompt(lang === "EN" ? "Enter The Amount: " : "ادخل المبلغ: "));
        if (amount > 0) {
            this.balance += amount;
            alert(lang === "EN" ? "Deposit Done Successfully!!" : "تم الإيداع بنجاح!");
        } else {
            alert(lang === "EN" ? "Error, Please Enter Valid Value!!" : "خطأ، من فضلك أدخل قيمة صحيحة!");
        }
    },

    // Transfer money to another account
    transfer: function() {
        let amount = Number(prompt(lang === "EN" ? "Enter The Amount: " : "ادخل المبلغ: "));
        let account = prompt(lang === "EN" ? "Enter The Account Number: " : "ادخل رقم الحساب: ");
        if (amount > 0 && amount <= this.balance && account) {
            this.balance -= amount;
            alert(lang === "EN"
                ? `Transfer of $${amount} to account ${account} Done Successfully!!`
                : `تم تحويل ${amount}$ إلى الحساب ${account} بنجاح!`);
        } else {
            alert(lang === "EN"
                ? "Error, Please Enter Valid Value or Check Balance!!"
                : "خطأ، من فضلك أدخل قيمة صحيحة أو تحقق من الرصيد!");
        }
    },

    // Withdraw money from the account
    withdraw: function() {
        let amount = Number(prompt(lang === "EN" ? "Enter The Amount: " : "ادخل المبلغ: "));
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            alert(lang === "EN" ? "Withdraw Done Successfully!!" : "تم السحب بنجاح!");
        } else {
            alert(lang === "EN"
                ? "Error, Please Enter Valid Value or Check Balance!!"
                : "خطأ، من فضلك أدخل قيمة صحيحة أو تحقق من الرصيد!");
        }
    },

    // Exit the ATM system
    exit: function() {
        alert(lang === "EN" ? "Thanks For Using Our Service!!" : "شكراً لاستخدامك خدمتنا!");
    }
};

// Function to display the ATM menu and handle choices
function displayOptions() {
    let choice = prompt(
        lang === "EN"
            ? "Choose Your Operation:\n1. Check Balance\n2. Deposit\n3. Transfer\n4. Withdraw\n5. Exit"
            : "اختر العملية:\n1. كشف الرصيد\n2. إيداع\n3. تحويل\n4. سحب\n5. خروج"
    );

    switch (choice) {
        case "1":
            user.checkBalance();
            break;
        case "2":
            user.deposit();
            break;
        case "3":
            user.transfer();
            break;
        case "4":
            user.withdraw();
            break;
        case "5":
            user.exit();
            return false; // Stop ATM loop
        default:
            alert(lang === "EN" ? "Invalid choice!" : "اختيار غير صحيح!");
    }
    return true; // Continue ATM loop
}

// Function to handle login and PIN validation
function login() {
    let pin = Number(prompt(lang === "EN" ? "Enter Your PIN:" : "أدخل الرقم السري:"));
    if (pin === user.PIN) {
        counter = 0; // Reset failed attempts
        alert(lang === "EN" ? `Welcome ${user.name}!!` : `أهلاً ${user.name}!!`);
        return true;
    } else {
        counter++;
        if (counter >= 3) {
            alert(lang === "EN"
                ? "You Have Reached Number of tries, Try again later!"
                : "لقد وصلت لعدد المحاولات المسموح به، حاول لاحقاً!");
            return false; // Stop ATM
        }
        alert(lang === "EN"
            ? `Wrong PIN! You have ${3 - counter} tries left.`
            : `الرقم السري خاطئ! لديك ${3 - counter} محاولات متبقية.`);
        return login(); // Try again
    }
}

// Function to choose language
function chooseLanguage() {
    let choice = prompt("Choose Language / اختر اللغة:\n1. English\n2. عربي");
    if (choice === "2") {
        lang = "AR";
    } else {
        lang = "EN";
    }
}

// Main ATM system function
function ATM_System() {
    chooseLanguage();
    alert(lang === "EN" ? "Welcome!!" : "مرحباً!!");
    if (login()) {
        let runATM = true;
        while (runATM) {
            runATM = displayOptions(); // Keep showing menu until user exits
        }
    }
}

// Start the ATM
ATM_System();
