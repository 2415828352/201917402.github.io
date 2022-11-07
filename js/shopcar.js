var price = document.getElementsByClassName('li_price');
var sum = document.getElementsByClassName('li_sum');
var btn1 = document.getElementsByClassName('btn1');
var btn2 = document.getElementsByClassName('btn2');
var shop_num = document.getElementsByClassName('list_input');
var l_select = document.getElementsByClassName('li_select');
var l_delete = document.getElementsByClassName('li_delete');
var l_selectall = document.getElementById('selectall');
var l_ul = document.getElementsByClassName('li_ul');
var shop_moneysum = document.getElementById('shop_moneysum');



function ji(i)
{
  sum[i].value = Number(shop_num[i].value) * Number(price[i].innerText);
  sum[i].innerText = sum[i].value;
}
function sub(i){
  if(shop_num[i].value>1)
    shop_num[i].value--;
    ji(i);
}
function add(i){
    shop_num[i].value++;
    ji(i);
}

function selectall(){
  if(l_selectall.checked == true){
    for(var i=0;i<l_select.length;i++){
      l_select[i].checked = true;
    }
  }
  else{
    for(var i=0;i<l_select.length;i++){
      l_select[i].checked = false;
    }
  }
  isTrue();
}


function deleteUL(i){
  l_ul[i].remove();
  init();
}

function moneysum(){
  var m_sum=0;
  var k=0;
  for(var a=0;a<l_select.length;a++){
    if(l_select[a].checked == true){
      m_sum += Number(sum[a].innerText);
    }
    else k++;
  }
  if(k==l_select.length){
    alert('您还未选中任何商品！');
  }
  shop_moneysum.innerText = m_sum;

}

function isTrue(){
  for(var a=0;a<l_select.length;a++){
    if(l_select[a].checked == true){
      l_ul[a].style.cssText = 'border: 2px solid dodgerblue';
    }
    else{
      l_ul[a].style.cssText = 'border: 1px solid #666';
    }
  }
}



function init(){
  for(var a=0;a<btn1.length;a++)
  {
    var b,c,d,e,f;
    b = btn1[a];
    c = btn2[a];
    d = l_select[a];
    e = l_delete[a];
    f = l_ul[a];
    b.index = a;
    c.index = a;
    d.index = a;
    e.index = a;
    f.index = a;
    ji(a);
  }
}
init();


var clickadd = function(x){
  add(x);
}

var clicksub = function(y){
  sub(y);
}

var clickselectall = function(){
  selectall();
}

var clickdelete = function(x){
  deleteUL(x);
}

var clicksum = function(){
  moneysum();
}





