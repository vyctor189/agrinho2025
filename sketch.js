let trees = [];    // Lista de árvores plantadas
let farmer;        // Posição do agricultor

function setup() {
  createCanvas(600, 400);  // Tamanho do campo
  textSize(32);  // Tamanho do texto para os emojis
  farmer = { x: mouseX, y: mouseY }; // Inicializa o agricultor na posição do mouse
}

function draw() {
  background(0, 200, 0); // Cor de fundo verde (campo)

  // Desenhando o solo (uma faixa na parte inferior)
  fill(139, 69, 19);  // Cor marrom para o solo
  noStroke();
  rect(0, height - 60, width, 60);

  // Desenhando o agricultor (emoji de agricultor)
  textSize(40);
  text("👩‍🌾", farmer.x, farmer.y);  // Desenha o agricultor

  // Desenhando as árvores com emojis
  for (let tree of trees) {
    fill(34, 139, 34);  // Cor verde para as folhas
    textSize(tree.size);  // Tamanho aleatório da árvore
    text("🌳", tree.x, tree.y);  // Desenha a árvore
  }
}

// Função para atualizar a posição do agricultor com o mouse
function mouseMoved() {
  farmer.x = mouseX;  // Atualiza a posição x do agricultor com o ponteiro do mouse
  farmer.y = mouseY;  // Atualiza a posição y do agricultor com o ponteiro do mouse
}

// Função para plantar árvores ao clicar com o mouse
function mousePressed() {
  // Gerar posição aleatória perto do ponteiro do mouse
  let x = mouseX + random(-50, 50);  // Desloca a árvore aleatoriamente em torno do clique
  let y = mouseY + random(-50, 50);
  
  // Gerar um tamanho aleatório para a árvore (entre 30 e 50)
  let size = random(30, 50);

  // Adiciona uma nova árvore na posição calculada com o tamanho aleatório
  trees.push({ x: x, y: y, size: size });
}
