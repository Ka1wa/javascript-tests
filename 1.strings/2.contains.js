// word가 text에 들어 있는지 확인해야 한다.
// 대문자 무시해야 한다!
// 예를 들면:
//   "hello" in "Hello world" = true
//   "Numbers" in "1234 with numbers" = false
//   "word" => in "A longer sentence" = false
function contains(word, text)
{
    // 코드 여기 작성해야 한다. 리턴해야 한다!

    var lowerCase = text.toLowerCase();

    return lowerCase.indexOf(word.toLowerCase()) >= 0;
}









// 테스트 코드
// 이 라인 후 수정하지 마세요.
var test = function(inputWord, inputText, output)
{
    var pass = contains(inputWord, inputText) === output;

    console.log("Test: contains(\"" + inputWord + "\", \"" + inputText + "\") === " + output + ": " + pass);

    return pass;
}

var tests = [
    test("example", "an easy example", true),
    test("hello", "Hello world", true),
    test("Numbers", "1234 with numbers", true),
    test("word", "A longer sentence", false)
];

var passed = tests.filter(function(output){ return output }).length === tests.length;

console.log("-------------------\r\nPractice question 1.2 contains: " + (passed ? "Success. Next one!" : "Failed. Try again!"));