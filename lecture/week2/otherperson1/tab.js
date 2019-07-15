var 탭버튼 = document.querySelectorAll('.tab-button');
var 탭내용 = document.querySelectorAll('.tab-content');

//for (let i = 0; i < 3; i++ ){
//	
//	탭버튼[i].addEventListener('click',function(){
//        탭주황색칠하기(i);
//        탭내용보여주기(i);
//		
//	});
//}

document.querySelector('ul.list').addEventListener('click',function(e){
//   지금누른게 버튼0이면.. 탭주황색칠하기(0) ; 탭내용보여주기(0);
    
    탭주황색칠하기(e.target.dataset.id);
    탭내용보여주기(e.target.dataset.id);
    
});

function 탭주황색칠하기(a){
    탭버튼[0].classList.remove('active');
		탭버튼[1].classList.remove('active');
		탭버튼[2].classList.remove('active');
		탭버튼[a].classList.add('active');
}

function 탭내용보여주기(a){
    탭내용[0].classList.remove('show');
		탭내용[1].classList.remove('show');
		탭내용[2].classList.remove('show');
		탭내용[i].classList.add('show');
}

for (var i = 0; i < 3; i++ ){
	console.log(1)
};



//1번째 버튼을 누르면, 
//	0번째버튼에 있던 주황색제거
//	1번째버튼에 있던 주황색제거 
//	2번째버튼에 있던 주황색제거 
//	1번째버튼에 이쁘게 주황색 씌워주기 
//
//	0번째내용 없애기 
//	1번째내용 없애기
//	2번째내용 없애기 
//	1번째내용 보여주기
	
	
	