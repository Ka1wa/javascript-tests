// string 뒤바꿔야 한다.
// 예를 들면:
//   "hello" => "olleh"
//   "1234" => "4321"
function reverse(word)
{
    // 코드 여기 작성해야 한다. 리턴해야 한다!

    return;
}









// 테스트 코드
// 이 라인 후 수정하지 마세요.
var test = function(input, output)
{
    var pass = reverse(input) === output;

    console.log("Test: reverse(\"" + input + "\") === " + output + ": " + pass);

    return pass;
}

var tests = [
    test("hello", "olleh"),
    test("A longer sentence", "ecnetnes regnol A"),
    test("1234 with numbers", "srebmun htiw 4321")
];

var passed = tests.filter(function(output){ return output }).length === tests.length;

console.log("-------------------\r\nPractice question 1.3 reverse: " + (passed ? "Success. Next one!" : "Failed. Try again!"));