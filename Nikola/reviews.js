function addReview(){
const name =
document.getElementById('name').value;
const rating =
document.getElementById('rating').value;
const comment =
document.getElementById('comment').value;
if(!name || !rating || !comment){
alert('Please fill in all fields.');
return;
}
const reviewList =
document.getElementById('review-list');
const review =
document.createElement('div');
review.className = 'review-item';
review.innerHTML =`
<h3>${name} - ${rating}</h3>
<p>${comment}</p>`;
reviewList.appendChild(review);
document.getElementById('name').value ='';
document.getElementById('rating').value = '';
document.getElementById('comment').value = '';
}