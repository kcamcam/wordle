function getOpenList(){
  let absent = document.getElementById("absent").value.toLowerCase();
  let correct = '';
  for (let i = 0; i < 5; i++) {
    correct += document.getElementById(`correct-${i}`).value.toLowerCase();
  }
  let present = [];
  for (let i = 0; i < 5; i++) {
    present = '';
    for (let j = 0; j < 5; j++) {
      present[i] += document.getElementById(`present-${i}-${j}`).value.toLowerCase();
    }
  }
  let openList = [];

  for (let word of words) {
    let invalid = false;

    // the word contains a character from the absent list
    for (let i = 0; i < absent.length; i++) {
      for (let j = 0; j < word.length; j++) {
        if (absent[i] === word[j]) {
          invalid = true;
          break;
        }
      }
      if(invalid) break;
    }
    if (invalid) continue;

    // the word does not have the correct letter(s) in the correct position(s)
    for (let i = 0; i < correct.length; i++) {
      if (correct[i] === '.') continue;
      invalid = !(correct[i] === word[i]);
      if (invalid) break;
    }
    if (invalid) continue

    for (let pres of present) {
      for (let i = 0; i < pres.length; i++) {
        if (pres[i] === '.') continue;
        // the word does not contain a character that should be present
        invalid = !word.includes(pres[i]);
        if (invalid) break;
        // the word contains a character that should be prresent but in the wrong position
        invalid = word[i] === pres[i];
        if (invalid) break;
      }
      if (invalid) break;
    };
    if (invalid) continue;

    openList.push(word);
  };

  document.getElementById("result").innerHTML = openList.join('<br/>');
  document.getElementById("resultCount").innerHTML = openList.length;
  return openList;
}