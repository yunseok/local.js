window.onload = function () {
    function changeText() {
        const lang = [
            "Hello, I'm",
            "Bonjour, je suis",
            "Привет Я",
            "こんにちは、私は",
            "你好，我是",
            "สวีสดีฉันเอง"
        ]
        const randomLang = Math.floor(Math.random() * lang.length);
        document.getElementById("randomLang").innerHTML = lang[randomLang];
    }
    changeText();
    window.setInterval(changeText, 5000);
}