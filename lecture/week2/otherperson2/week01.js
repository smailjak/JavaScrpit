//text change
function change_modal_title_text(text) {
    //1. 모달창 띄우기
    document.getElementById('modal').style.display = 'block';
    //2. 제목에 '가입하세요'라고 바꾸기
    document.getElementById('title').innerHTML = text;
}
//button sign up
document.getElementById('close').addEventListener('click', function () {
    document.getElementById('modal').style.display = 'none';
});
//button close
document.getElementById('login').addEventListener('click', function () {

    document.getElementById('modal').style.display = 'block';
});

//input 유효성 검사
document.getElementById('form').addEventListener('submit', function (event) {

    //email password을 가지고옴
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;

    var email_sucess = Boolean(false);
    var pass_sucess = Boolean(false);

    //reg
    var reg = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

    //혹시 이메일이 공백인가요?
    if (email === '') {
        document.getElementById('emailHelp').innerHTML = 'your email empty!';
        document.getElementById('emailHelp').style.display = 'block';
        console.log('이메일 공백');
        email_sucess = false;
    }
    //공백은 아닌데 형식이 올바르지않습니다.
    else if (!reg.test(email)) {
        document.getElementById('emailHelp').innerHTML = 'email format is invalid!.';
        console.log('공백은 아닌데 형식이 틀림');
        email_sucess = false;
    } else {
        email_sucess = true;
    }

    //패스워드가 공백인가요?
    if (pass === '') {
        document.getElementById('passHelp').style.display = 'block';
        console.log('패스워드 공백');
        pass_sucess = false;
    } else {
        document.getElementById('passHelp').style.display = 'none';
        pass_sucess = true;
    }

    //모두 검사해보니
    if (email_sucess && pass_sucess) {
        console.log('전송 성공');
        return true;
    } else {
        console.log('전송 실패');
        event.preventDefault();
    }
});
