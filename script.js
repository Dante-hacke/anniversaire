function typeWriter(elementId, text, speed, callback) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            document.getElementById(elementId).innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        } else if (callback) {
            callback();
        }
    }
    typing();
}

function start() {
    // 1. Cacher le bouton
    document.getElementById('btn').style.display = 'none';
    
    // 2. Jouer la musique
    document.getElementById('music').play();
    
    // 3. Écrire le nom lettre par lettre
    typeWriter("title", "Joyeux Anniversaire Nehemielle 😭✨❤️", 150, function() {
        // 4. Une fois le nom écrit, afficher la phrase douce
        document.getElementById('message-douce').style.display = 'block';
    });
    
    document.getElementById('message').style.display = 'block';
    setInterval(createElements, 300); // Lancer les emojis flottants
}

function createElements() {
    const emojis = ['❤️', '🌸', '⭐', '✨'];
    const el = document.createElement('div');
    el.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    el.className = 'element';
    el.style.left = Math.random() * 100 + 'vw';
    el.style.animationDuration = '6s';
    document.getElementById('container').appendChild(el);
    setTimeout(() => el.remove(), 6000);
}