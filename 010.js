const level = 5;

for (let i = 1; i <= level; i++) {
  let tree = '';
  //공백 증가
  for (let k = 1; k <= level - i; k++) {
    tree = tree + ' ';
  }
  // 별 증가
  for (let j = 1; j <= i * 2 - 1; j++) {
    tree = tree + '*';
  }
  console.log(tree);
}
