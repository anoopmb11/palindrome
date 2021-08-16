const inputWord = document.querySelector("#inputWord");
const submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", checkPalindrome2);

function checkPalindrome(e) {
    e.preventDefault();
    const inputString = inputWord.value;
    const inputStringLength = inputString.length;
    const halfLength = inputStringLength / 2;
    const halfLengthInt = Math.floor(halfLength);
    let firstHalfStr = "",
        lastHalfStr = "";
    for (let i = 0; i < halfLengthInt; i++) {
        firstHalfStr = firstHalfStr.concat(inputString[i]);
    }

    for (let i = inputStringLength; i < length - 1; i--) {
        lastHalfStr = lastHalfStr.concat(inputString[i]);
    }

    console.log(firstHalfStr, lastHalfStr);

    if (firstHalfStr === lastHalfStr) {
        console.log("true");
        return true;
    } else {
        console.log("false");

        return false;
    }
}

function checkPalindrome2(e) {
    e.preventDefault();
    const inputString = inputWord.value;
    const inputStringLength = inputString.length;

    let reverseString = "";
    for (let i = inputStringLength - 1; i >= 0; i--) {
        reverseString = reverseString.concat(inputString[i]);
    }

    console.log(inputString, reverseString)

    if (inputString === reverseString) {
        console.log("true");
        return true;
    } else {
        console.log("false");

        return false;
    }
}
// console.log(inputWord.value);