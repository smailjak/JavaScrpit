//제품정보로드
var products = [
    {
        id: 1,
        price: 299,
        img: 'img/product/fashon_image00.jpg',
        title: 'Flossom Dress',
        text: "Do you like some random yellow stuff? Here's one for you."
        },
    {
        id: 2,
        price: 199,
        img: 'img/product/fashon_image01.jpg',
        title: 'Epringfield Shirt',
        text: "Stole it from my dad."
        },
    {
        id: 3,
        price: 399,
        img: 'img/product/fashon_image02.jpg',
        title: 'Dlack Monastery',
        text: "The best beer comes from the monastery."
    },
    {
        id: 4,
        price: 9999,
        img: 'img/product/fashon_image03.jpg',
        title: 'Chite dress',
        text: "The best white dress very expensive."
    },
    {
        id: 5,
        price: 699,
        img: 'img/product/fashon_image04.jpg',
        title: 'Breen woman outer',
        text: "The best green outer."
    },
    {
        id: 6,
        price: 4499,
        img: 'img/product/fashon_image05.jpg',
        title: 'Ahite woman outer',
        text: "The best white outer."
    }
];
/*
복습1. 위의 products라는 변수안에 저장되어있는 
	첫째 상품의 '제목'과 '제품설명'을 현재 페이지의 
	첫째 상품 HTML 레이아웃 내부에 집어넣어보도록 합시다. (데이터 바인딩)
	→ 숙제 1
숙제1. products 안에 저장된 {상품}의 title, text, price 정보를 3개 모두 전부 HTML에 데이터 바인딩해봅시다. 
	가격 표시하는 곳이 없다고요? 하나 만드시면 됩니당. 
	너무 코드가 길다고요? 오늘 배웠던 for 반복문을 써보는건 어떨까요.
    → 숙제 5
숙제5. 복습4에서 만들었던 여러분의 탭기능은 확장성이 없습니다.
	 못된 퍼블리셔가 갑자기 HTML파일을 수정해서 탭의 버튼과
	 내용의 갯수를 5개로 늘리면 여러분이 만든 자바스크립트는 동작하지 않으니까요. 
	그럼 여러분의 코드를 어떻게 수정해야 탭이 5개가 되든 6개가 되든 상관없이 탭기능이 잘 동작할까요?
	(힌트) 탭내용과 버튼 HTML을 하나 더 만들고 한번 시험해보시면 
	코드를 잘 짰는지 확인해보실 수 있겠죠? 
  	(힌트) 수업시간에 안가르쳐 드린 내용이라 검색이 필요할 수 있습니다. 
*/
//일단 querySelectAll을 이용하여 관련 태그의 객체를 가지고 옴 
//타이틀
var titles = document.querySelectorAll('.card-title');
//텍스트(상세정보)
var detail_texts = document.querySelectorAll('.card-text');
//가격
var prices = document.querySelectorAll('.card-price');
//상품이미지
var img = document.querySelectorAll('.card-img-top');
//for()을 이용하여 각 태그 value에서 텍스트 적용
var products_show = function () {
    for (let index = 0; index < titles.length; index++) {
        titles[index].innerHTML = products[index].title;
        detail_texts[index].innerHTML = products[index].text;
        prices[index].innerHTML = '$' + products[index].price;
        img[index].src = products[index].img;
    }
};

products_show();
/*
복습2. 모달창의 검은배경을 누르면 모달창이 닫히는 기능을 만들어봅시다. 
	   흰배경을 누르면 모달창이 닫히는 버그가 일어나면 안됩니다. 
*/
//검은배경을 가지고 있는 객체를 찾아옴, 누구니?
var click_black_background = document.querySelector('.black-background');
//일단. 해당 대상객체가 클릭되었을때 이벤트가 발생해야함으로..
click_black_background.addEventListener('click',function(event){
    //나는 검은배경만 클릭하면 이벤트가 발생시키라고만 했는데
    //모든 요소를 클릭하면 다 반응하네?? 이유가 뭘까
    //이벤트 버블링때문에 그렇다.
    
    //input, form, 등등 모두 <div class = 'background' .. >의 하위태그이기때문!
    //console.log(event.target);
    
    //실제로 클릭한 대상을 찾아야한다.
    //event객체가 필요하다.
        //event.target              실제로 클릭된 객체
        //event.currentTarget       해당 이벤트를 호출한 객체(this)
        //event.preventDefault      다음에 이어질 함수호출 취소 
        //event.stopPropagation     이벤트 버블링 제한 
    
    //실제 눌러진 객체가 <div class = 'background' ... > 맞습니까?
    if( event.target == document.querySelector('.black-background') )
    {
        document.getElementById('modal').style.display = 'none';
    }
});
/*
복습3. products 라는 array 안에 있는  {데이터 3개}를 가격 낮은 순으로 
	정렬하려면 어떻게 코드를 짜야할까요?
*/ 
//products.sort();     기본기능은 내림차순
products.sort(function(a,b){
    return a-b;        //앞에 있는 매개변수를 기준으로
                       //결과가 -1이면, 배열 인덱스가 앞으로 1칸 이동함
});
/*
복습4. detail.html의 탭기능을 직접 처음부터 한번 만들어봅시다. 
	tab.js에 이미 답이 나와있기 때문에 tab.js 보지 말고 
	detail.html하단에 스크립트태그 열어서 직접 짜보시면 되겠습니다. 
	우선 한글로 설명부터 적어봅시다.
*/

/*console.log('dfdfd');
var buttons = document.querySelectorAll('.tab-button');
var contents = document.querySelectorAll('.tab-content');

for (let i = 0; i < buttons.length; i++ ){
    console.log('dfdfd');
    
	buttons[i].addEventListener('click',function(){
        console.log('2222222222222');
		for( let j = 0; j < buttons.length; j++ )
        {
            buttons[j].classList.remove('active');
            contents[j].classList.remove('show');
        }
		buttons[i].classList.add('active');
		contents[i].classList.add('show');
	});
}*/
/*
숙제2. [가격 낮은 순 정렬] 버튼을 사이트 내에 만들어보세요. 
	정렬 버튼을 누르면 상품이 샤샤샥 정렬되는 모습까지 확인되면 성공입니다.
    
숙제3. [상품 가나다 순 정렬]버튼도 한번 만들어봅시다.
*/
//sort 정의
    //오름차순
var products_min_sort = function()
{
    products.sort(function(pre,next){
        return pre.price - next.price;
    });
};
    //내림차순
var products_max_sort = function()
{
    products.sort(function (pre, next){
         return next.price - pre.price;
    });
};
    //알파벳 정렬
var products_alphabet_sort = function()
{
    products.sort( function(pre,next){
        if( pre.title < next.title )
        {
            return -1;
        }
        else if( pre.title > next.title )
        {
            return 1;
        }
    });
};
//모든 라디오 객체를 가지고옴
var radios = document.querySelectorAll('.radio');
//순회하면서 checked된 객체인지 확인해봄
for( let index = 0; index < radios.length; ++index )
{
    radios[index].addEventListener('click',function(event)
    {
        //굳이 checked여부를 확인해야하나??
        //if( event.currentTarget.checked === true ){}
        switch( event.currentTarget.value )
        {
            case 'min' :
            {
                products_min_sort();
                break;
            }
            case 'max' :
            {
                products_max_sort();
                break;
            }
            case 'alphabet' :
            {
                products_alphabet_sort();
                break;
            }
        }
            products_show();
    });
}


//코멘트 : 라디오버튼은 참신한 것 같습니다. 라디오버튼은 특징이 딱 하나의 value만 선택가능하다는건데, 하지만 쇼핑몰 정렬의 경우 가끔 두개 세개 정렬조건을 동시에 충족하는 상품을 보여야할 때가 있습니다. 특히 필터기능이 들어가면요. 심심하면 라디오버튼 말고 그냥 <button>버튼으로도 한번 만들어보십시오 

//코멘트2 : sort함수를 사용하면 원본 데이터를 변형시킵니다. 시간남으면 원본 데이터를 변형시키지 않고 보존하는 방향으로 sort()를 사용하는 방법도 한번 생각해봅시다. 







/*
숙제4. 이번엔 [200달러 이하 상품만 보기] 버튼을 만들어봅시다. 
	그럼 상품이 2개만 딱 나와야하긴 하지만 아직은 구현하기 어려우니 
	그냥 HTML건들지말고 버튼과 Javascript 기능만 만들어보셔도 봐드리겠습니다. 
*/
//  createElement, createText??연구 필요
//일단 리스트에서 200달라 이하의 제품만 추려내보자
products.filter(function (target) {
    if (target.price <= 200) {
        //필터 내장함수는 자동으로 리스트를 순회함으로 for()을 사용할 필요없음
        //매개변수로 지정한 target에 product 객체가 주입됨

        //해당하는 항목만 카드형식으로 출력하고싶어요
        var md = document.createElement('div');
        md.setAttribute('class', 'col-md-4');

        var card = document.createElement('div');
        card.setAttribute('class', 'card');

        var img = document.createElement('img')
        img.setAttribute('src', 'ddd');
        img.setAttribute('class', 'card-img-top');
        img.setAttribute('src',target.img);

        var card_body = document.createElement('div');
        card_body.setAttribute('class', 'card-body');

        var h5 = document.createElement('h5');
        h5.setAttribute('class', 'card-title');
        h5.innerHTML = target.title;

        var h6 = document.createElement('h6');
        h6.setAttribute('class', 'card-price');
        h6.innerHTML = '$' + target.price;
        
        var p = document.createElement('p');
        p.setAttribute('class', 'card-text');
        p.setAttribute('id', 'product1_contents');
        p.innerHTML = target.text;
        
        var a = document.createElement('a');
        a.setAttribute('class', 'btn btn-primary');
        a.innerHTML = 'Go somewhere';
        a.style.color = 'white';
        

        var row = document.querySelector('.row').appendChild(md);
        row.appendChild(card);
        row.appendChild(img);
        row.appendChild(card_body);
        row.appendChild(h5);
        row.appendChild(h6);
        row.appendChild(p);
        row.appendChild(a);
    }
});


//코멘트 : HTML 잘만들어내셨군요 HTML 만들어내는 방법은 크게 두개가 있는데 createElement, setAttribute 이런 방법도 있고 그냥 HTML을 '<div></div>' 이렇게 텍스트로 짠 뒤에 내부에 집어넣는 방법도 있습니다. 전자의 장점은 코드 실행속도가 빠르다는거, 후자의 장점은 개발자가 편하다는 겁니다.  






//-----------------------------------------------------------------------------
/*
코딩테스트 스타일 숙제6.
	희성이는 갑자기 짝수로 가득한 array를 만들고싶어졌습니다.
	2, 4, 6... 부터 시작해서 200까지의 모든 짝수를 차례로 담은
	아주 긴 array를 만들려면 어떻게 코드를 짜야할까요? 
	(힌트) 언제나 코드는 적게 작성할 수록 좋습니다. 	
	(힌트) 일단 빈 array가 하나 필요합니다. 그리고 array에 자료를 추가하는 법도 알아야합니다.
*/
//array
var arrayNumbers = []
var number = 200;
for( let index = 1; index <= number; ++index )
{
    //짝수 검출
    if( index % 2 === 0 )
    {
        //배열에 저장
        arrayNumbers.push( index );
    }
}
/*코딩테스트 스타일 숙제7. 
	아래에 phone이라는 변수에 여러가지 핸드폰 모델명이 저장되어있습니다. 
    이 데이터들 중에 내가 원하는 제품명이 있으면 '있어요'를 콘솔창에, 없으면 '없어요'를 콘솔창에 출력하는 
	간단한 검색 기능(함수)을 만들어보려고 합니다. 
	(목표) search('갤럭시S')라고 입력하면 콘솔창에 '있어요!'라고 출력되도록 search 함수를 만들어보세요.
	(조건) filter, find, indexOf, substr 등 어디서 찾아본 자바스크립트 내장함수 사용금지
	<script>
		
		var phone = ['아이폰XR','아이폰XS','갤럭시S','V20','샤오미'];
		
		function search(){
			
			//여기에 예쁘게 코드 짜서 search함수의 기능을 만들어보시면 됩니다. 
			
		}
		search('갤럭시S'); //콘솔창 출력결과 : '있어요!' 
		search('아리랑폰'); //콘솔창 출력결과 : '없어요!' 
		
	</script>
*/
function search( model )
{
    //모델 종류
    var phone = ['아이폰XR','아이폰XS','갤럭시S','V20','샤오미'];
    
    //배열에 총 몇개의 모델이 존재하나요?
    var kindModel = phone.length;
    
    //내가 찾는 모델이 있나요?
    for( let index = 0; index < kindModel; ++index )
    {
        if( model === phone[index] )
        {
            return '있어요!';
        }
    }
    //다 뒤져보았는데 없어요
            return '없어요!';
}
/*
    시간 남으면 해보면 좋을 예습1.
    addEventListener 갯수를 줄이면 장점이 많습니다. detail.html에서 탭기능을 다시 만들어보는데, 
    이번엔 addEventListener를 탭 HTML레이아웃내의 ul 이라는 태그에 딱 하나만 부착해서 만들어봅시다.
	(힌트) 이번주에 배운 이벤트 버블링과 이벤트 함수를 잘 이용해야합니당.
*/
