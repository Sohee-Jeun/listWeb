/*const addBtn = document.querySelector('.add');
addBtn.addEventListener('click', () =>{

});

class Todo_Class {
    constructor(item){
        this.ulElement = item;
    }
    add(){

    }

    delete(){

    }
};
*/
const items = document.querySelector(".items");
const form = document.querySelector(".new_form");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__button");
const date = new Date().toDateString();

form.addEventListener("submit", (event) => {
  event.preventDefault(); // 이것을 해주지 않으면 페이지가 자동으로 로딩이 되어 방금 입력되어진 메모가 사라진다. 그렇기 때문에 이거 해줘야함.
  onAdd();
});
function onAdd() {
  //1. 사용자가 입력한 텍스트를 받아옴
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }
  //2. 새로운 아이템을 만든다.(텍스트 + 삭제버튼)
  const item = createItem(text);
  //3. items 컨테이너 안에 새로 만든 아이템을 추가한다.
  items.appendChild(item);
  //4. 새로 추가된 아이템으로 스크롤링
  item.scrollIntoView({ block: "center" });
  //5. input을 초기화 한다.
  input.value = "";
  input.focus(); /*자동으로 포커스가 온다 */
}

let id = 0; // pretty bad, better to use 'UUID' or 'object #'/
function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");
  itemRow.setAttribute("data-id", id);

  itemRow.innerHTML = `    
<div class="item" >
    <div class="item__detail">
        <span class="item__date">${date}</span>
        <span class="item__name">${text}</span>
    </div>
    <button class="item__delete" >
        <i class="fas fa-trash-alt" data-id=${id}></i>
    </button>
</div>
<div class="item__divider"></div>`;
  id++;
  return itemRow;
}

items.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});

console.log(date);
