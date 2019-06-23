// 영문 대문자로 바꿔야 한다.
// 예를 들면: "lower" => "LOWER"
// 숫자 무시하면 된다.
function capitalize(word)
{
    // 코드 여기 작성해야 한다. 대영문자로 리턴해야 한다!

    return word.toUpperCase();
}
 var aa=AudioParamMap
 //이렇게 다시 보낼께








// 테스트 코드
// 이 라인 후 수정하지 마세요.
var test = function(input, output)
{
    var pass = capitalize(input) === output;

    console.log("Test: capitalize(\"" + input + "\") === " + output + ": " + pass);

    return pass;
}

var tests = [
    test("word", "WORD"),
    test("A longer sentence", "A LONGER SENTENCE"),
    test("1234 with numbers", "1234 WITH NUMBERS")
];

var passed = tests.filter(function(output){ return output }).length === tests.length;

console.log("-------------------\r\nPractice question 1.1 Capitalize: " + (passed ? "Success. Next one!" : "Failed. Try again!"));