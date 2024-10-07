// عرض تأثير التحميل عند دخول الصفحة === effect loading on log of page
window.onload = function () {
    setTimeout(() => {
        document.querySelector('.loading').style.display = 'none';
        document.querySelector('.login-container').style.display = 'block';
    }, 3000);
};

function switchContainer(hideClass, showClass) {
    const hideContainer = document.querySelector(`.${hideClass}`);
    const showContainer = document.querySelector(`.${showClass}`);
    hideContainer.style.opacity = 0;
    hideContainer.style.transform = "scale(0.8)";

    setTimeout(() => {
        hideContainer.style.display = 'none';
        showContainer.style.display = 'block';
        setTimeout(() => {
            showContainer.style.opacity = 1;
            showContainer.style.transform = "scale(1)";
        }, 50);
    }, 500);
}

document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const notification = document.getElementById("notification");

    if (email === "" || password === "") {
        notification.textContent = "يرجى ملء جميع الحقول.";
        notification.classList.add("error");
        notification.style.display = "block";
        return;
    }

    notification.textContent = "تم تسجيل الدخول بنجاح!";
    notification.classList.remove("error");
    notification.style.display = "block";

    setTimeout(() => {
        notification.style.display = "none";
    }, 3000);
});

document.getElementById("forgot-password-link").addEventListener("click", function (e) {
    e.preventDefault();
    switchContainer('login-container', 'forgot-password-container');
});

document.getElementById("back-to-login-from-forgot").addEventListener("click", function (e) {
    e.preventDefault();
    switchContainer('forgot-password-container', 'login-container');
});

document.getElementById("register-link").addEventListener("click", function (e) {
    e.preventDefault();
    switchContainer('login-container', 'register-container');
});

document.getElementById("back-to-login-from-register").addEventListener("click", function (e) {
    e.preventDefault();
    switchContainer('register-container', 'login-container');
});

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const themeIcon = document.getElementById('theme-icon');
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeIcon.classList.toggle('fa-sun', !isDarkMode);
    themeIcon.classList.toggle('fa-moon', isDarkMode);
    document.querySelectorAll('.container').forEach(container => {
        container.style.backgroundColor = isDarkMode ? '#444' : 'var(--light-color)';
    });
}

document.getElementById('theme-toggle').addEventListener('click', toggleDarkMode);

document.getElementById('settings-toggle').addEventListener('click', function () {
    const menu = document.getElementById('settings-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

document.querySelectorAll(".toggle-password").forEach(button => {
    button.addEventListener("click", function () {
        const input = this.previousElementSibling;
        const icon = this.querySelector("i");
        const type = input.type === "password" ? "text" : "password";
        input.type = type;
        icon.classList.toggle("fa-eye-slash");
    });
});

document.getElementById('change-language').addEventListener('click', function (e) {
    e.preventDefault();
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    document.documentElement.lang = newLang;

    const translations = {
        ar: {
            // title:"تسجيل الدخول ",
            logotext: "مؤسسة ",
            language: "اختيار اللغه",
            loginTitle: "تسجيل الدخول",
            emailLabel: "البريد الإلكتروني",
            passwordLabel: "كلمة المرور",
            loginButton: "تسجيل الدخول",
            forgotPassword: "نسيت كلمة المرور؟",
            registerText: "ليس لديك حساب؟ سجل الآن",
            resetTitle: "نسيت كلمة المرور",
            backToLoginFromRegister:"العودة لتسجيل الدخول ",
            resetEmailLabel: "البريد الإلكتروني",
            resetButton: "إرسال للتحقق",
            backToLogin: "العودة لتسجيل الدخول",
            registerTitle: "تسجيل جديد",
            institutionLabel: "اسم المؤسسة",
            ownerLabel: "اسم مالك المؤسسة",
            newEmailLabel: "البريد الإلكتروني",
            newPasswordLabel: "كلمة المرور",
            confirmPasswordLabel: "تأكيد كلمة المرور",
            registerSubmitButton: "سجل الآن",
            chooseTheme: "اختيار الثيم:"
        },
        en: {
            // title:"Login UI",
            logotext:"Institution",
            language:"SelectLanguage",
            loginTitle: "Login",
            emailLabel: "Email",
            passwordLabel: "Password",
            loginButton: "Login",
            forgotPassword: "Forgot Password?",
            registerText: "Don't have an account? Register Now",
            resetTitle: "Forgot Password",
            backToLoginFromRegister:"back To Login From Register?",
            resetEmailLabel: "Email",
            resetButton: "Send Verification",
            backToLogin: "Back to Login",
            registerTitle: "Register",
            institutionLabel: "Institution Name",
            ownerLabel: "Owner Name",
            newEmailLabel: "Email",
            newPasswordLabel: "Password",
            confirmPasswordLabel: "Confirm Password",
            registerSubmitButton: "Register Now",
            chooseTheme: "Choose Theme:"
        }
    };

    const langData = translations[newLang];
    document.querySelector('.logo span').textContent = langData.logotext;
    document.querySelector('#change-language .language').textContent = langData.language;

    document.querySelector('h2').textContent = langData.loginTitle;
    document.querySelector('label[for="email"]').textContent = langData.emailLabel;
    document.querySelector('label[for="password"]').textContent = langData.passwordLabel;
    document.querySelector('button[type="submit"]').textContent = langData.loginButton;
    document.getElementById("forgot-password-link").textContent = langData.forgotPassword;
    document.getElementById("register-link").textContent = langData.registerText;

    document.querySelector('.forgot-password-container h2').textContent = langData.resetTitle;
    document.querySelector('.backlogregist').textContent = langData.backToLoginFromRegister;
   
    document.querySelector('.forgot-password-container label[for="email-reset"]').textContent = langData.resetEmailLabel;
    document.querySelector('.forgot-password-container button[type="submit"]').textContent = langData.resetButton;
    document.querySelector('.forgot-password-container a').textContent = langData.backToLogin;

    document.querySelector('.register-container h2').textContent = langData.registerTitle;
    document.querySelector('.register-container label[for="institution-name"]').textContent = langData.institutionLabel;
    document.querySelector('.register-container label[for="owner-name"]').textContent = langData.ownerLabel;
    document.querySelector('.register-container label[for="new-email"]').textContent = langData.newEmailLabel;
    document.querySelector('.register-container label[for="new-password"]').textContent = langData.newPasswordLabel;
    document.querySelector('.register-container label[for="confirm-password"]').textContent = langData.confirmPasswordLabel;
    document.querySelector('.register-container button[type="submit"]').textContent = langData.registerSubmitButton;

    document.querySelector('.settings-menu div span').textContent = langData.chooseTheme;
});


document.querySelectorAll('.color-option').forEach(option => {
      option.addEventListener('click', function() {
        const color = this.getAttribute('data-color');
        document.documentElement.style.setProperty('--primary-color', color);
      });
    });
    