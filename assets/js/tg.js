let tg = window.Telegram.WebApp;

tg.expand(); // Убедитесь, что это допустимо в вашем случае

document.addEventListener("DOMContentLoaded", function() {
    if (tg && tg.initDataUnsafe) {
        let user_name = document.getElementById("first_name");
        let userAvatar = document.getElementById("userAvatar");

        if (tg.initDataUnsafe.user) {
            // Установка имени пользователя
            let p = document.createElement("p");
            p.innerText = tg.initDataUnsafe.user.first_name; // Исправлена опечатка
            user_name.appendChild(p);

            // Установка аватара пользователя, если он есть
            if (tg.initDataUnsafe.user.photo_url) {
                userAvatar.src = tg.initDataUnsafe.user.photo_url;
            }
        }
    }
});
