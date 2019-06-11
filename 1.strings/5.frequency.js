// string에 가장 많이 있는 글자 확인해야 한다.
// 가장 많이 있는 글자가 없으면 false 리턴해야 한다.
// 예를 들면:
//   "aaaaaaaaaaaaaaaaabbbbcddddeeeeee" => "a"
//   "bBbbaababbBaaccccCdBbbbBbbdDdCcc" => "b"
//   "aaaaaabbbbbbccccccddddddeeeeee" => false
function frequency(letters)
{
    // 코드 여기 작성해야 한다. 리턴해야 한다!
    
    return;
}









// 테스트 코드
// 이 라인 후 수정하지 마세요.
var test = function(input, output)
{
    var pass = frequency(input) === output;

    console.log("Test: frequency(\"" + input + "\") === " + output + ": " + pass);

    return pass;
}

var tests = [
    test("aaaaaaaaaaaaaaaaabbbbcddddeeeeee", "a"),
    test("bBbbaababbBaaccccCdBbbbBbbdDdCcc", "b"),
    test("abcdeabcdeabcdeabcdeabcdeabcde", false)
];

var passed = tests.filter(function(output){ return output }).length === tests.length;

console.log("-------------------\r\nPractice question 1.5 frequency: " + (passed ? "Success. Next one!" : "Failed. Try again!"));