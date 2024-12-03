// Rating System
const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('rating-value');
let currentRating = 0;

// Function to handle star clicks
stars.forEach(star => {
    star.addEventListener('click', () => {
        currentRating = star.getAttribute('data-value');
        ratingValue.textContent = currentRating;
        updateStars(currentRating);
    });
});

// Function to update star colors based on rating
function updateStars(rating) {
    stars.forEach(star => {
        if (star.getAttribute('data-value') <= rating) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}

// Comment Section
function submitComment() {
    const commentText = document.getElementById('comment').value;

    if (commentText.trim() === '') {
        alert('Please write a comment before submitting.');
        return;
    }

    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');

    const commentParagraph = document.createElement('p');
    commentParagraph.textContent = commentText;

    commentDiv.appendChild(commentParagraph);
    document.getElementById('comments-list').appendChild(commentDiv);

    // Clear the comment textarea after submission
    document.getElementById('comment').value = '';
}
