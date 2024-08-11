const prompts = [
    {"prompt": "犬を描く", "category": "動物", "difficulty": "簡単"},
    {"prompt": "車を描く", "category": "乗り物", "difficulty": "普通"},
    {"prompt": "花を描く", "category": "自然", "difficulty": "簡単"},
    {"prompt": "飛行機を描く", "category": "乗り物", "difficulty": "難しい"}
];

let usedPrompts = [];

document.getElementById('startBtn').addEventListener('click', startGame);
document.getElementById('nextBtn').addEventListener('click', showNextPrompt);
document.getElementById('endBtn').addEventListener('click', endGame);

function startGame() {
    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'inline-block';
    document.getElementById('endBtn').style.display = 'inline-block';
    showNextPrompt();
}

function showNextPrompt() {
    if (prompts.length === 0) {
        alert('すべてのお題が表示されました。');
        return;
    }

    let randomIndex = Math.floor(Math.random() * prompts.length);
    let selectedPrompt = prompts.splice(randomIndex, 1)[0];
    usedPrompts.push(selectedPrompt);

    document.getElementById('prompt').textContent = `お題: ${selectedPrompt.prompt} (カテゴリ: ${selectedPrompt.category}, 難易度: ${selectedPrompt.difficulty})`;
}

function endGame() {
    alert('ゲームを終了します。');
    document.getElementById('prompt').textContent = '';
    document.getElementById('startBtn').style.display = 'inline-block';
    document.getElementById('nextBtn').style.display = 'none';
    document.getElementById('endBtn').style.display = 'none';
    prompts.push(...usedPrompts);
    usedPrompts = [];
}
