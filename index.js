/**
 * Esercitazione:

 * Dobbiamo creare una pagina dove abbiamo un paragrafo, un input email, un input password e un bottone. L'utente dovrà inserire i valori di email e password e al click il sistema deve controllare che i valori siano corretti.

 * Se email le password corrispondono allora all'interno del paragrafo appare la scritta "Benvenuto, Utente" altrimenti la scritta "Credenziali errate".

 * Le credenziali corrette sono:
 * const state = {
    // Altre chavi...
    auth: {
      email: "user@example.com",
      password: "1234",
    }
 * }

 * Se email o password non vengono inserite, al click del bottone nel paragrafo appare la scritta "Tutti i campi sono obbligatori"; 
 * 
 */


// 1. Selezione degli elementi HTML

const $emailInput = document.querySelector("#email");
const $passwordInput = document.querySelector("#password");
const $loginBtn = document.querySelector("#login");
const $messageP = document.querySelector("#message");

// 2. lo state con le Chiave

const state = {
    userInput: {
        email: "",
        password: "",
    },
    auth: {
        email: "user@example.com",
        password: "1234",
    },
    message: ""
};

// 3. Funzioni

const authenticate = () => {
    const { email, password } = state.userInput;
    
// 4. Verifica delle credenziali

    if (email === state.auth.email && password === state.auth.password) {
        state.message = "Benvenuto, Utente";
    } else {
        state.message = "Credenziali errate";
    }

    if (!email || !password) {
        state.message = "Tutti i campi sono obbligatori";
        return;
    }

};

// 5. Funzione di rendering
const render = () => {
    $messageP.innerHTML = state.message;
};

// 6. Event listeners
const manageListeners = () => {
    $emailInput.addEventListener("input", (event) => {
        state.userInput.email = event.target.value();
    });

    $passwordInput.addEventListener("input", (event) => {
        state.userInput.password = event.target.value;
    });

    $loginBtn.addEventListener("click", () => {
        authenticate();
        render();
    });
};

// 7. Mount
const init = () => {
    render();
    manageListeners();
};

// 8. Inizializzazione
init();