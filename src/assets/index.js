import data from "./DB/initialData.json";
const { TheraItems } = data;

export function setTheraItems() {
  return TheraItems;
}

// 클릭한 제품의 번호와 프로덕트아이템 데이터 문서의 id와 일치하면 반환
export function getItemId(itemId) {
  return TheraItems.find((TheraItem) => TheraItem.id === itemId);
}

//로컬스토리지 안에서 KEY로 사용할 것
const WISHLIST_KEY = "테라_위시리스트";
const wishlist = JSON.parse(localStorage.getItem(WISHLIST_KEY) || "{}");

export function addWishlist(itemId) {
  wishlist[itemId] = TheraItems[itemId].title;
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
}

export function delWishlist(itemId) {
  delete wishlist[itemId];
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
}

export function getWishlist() {
  return TheraItems.filter((item) => wishlist[item.id]);
}


