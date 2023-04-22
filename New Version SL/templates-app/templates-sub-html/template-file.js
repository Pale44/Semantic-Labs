// copy to clipboard the prompts
// for the first container
  //first copy 
  const firstCopy = document.getElementById("first-copy");
  const firstResponse = document.getElementById("first-response");
  /* copyFirst() {
    const firstResponseText = "hello world";
    navigator.clipboard.writeText(firstResponseText)
        .then(() => {
          console.log('Text copied to clipboard');
        })
        .catch((err) => {
          console.error('Could not copy text: ', err);
        });
  }
  firstCopy.addEventListener("click", copyFirst); */

  // count first con words
  const countFirst = document.getElementById("first-count-words");
  const textFirst = firstResponse.innerText;
  const wordsFirst = textFirst.split(" ");
  const wordCountFirst = wordsFirst.length;
  countFirst.innerHTML = wordCountFirst;
    
// for the second container 
