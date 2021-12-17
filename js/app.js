document.addEventListener('DOMContentLoaded', () => {
    const newItemForm = document.querySelector('#new-item-form');
    newItemForm.addEventListener('submit', handleNewItemFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);

})

const handleNewItemFormSubmit = function (event) {
    event.preventDefault();

    const albumListItem = createAlbumListItem(event.target);
    const albumList = document.querySelector('#album-list');
    albumList.appendChild(albumListItem);

    event.target.reset();
}

const createAlbumListItem = function (form) {
    const albumListItem = document.createElement('li');
    albumListItem.classList.add('album-list-item');

    const title = document.createElement('h2');
    title.textContent = form.title.value;
    albumListItem.appendChild(title);

    const artist = document.createElement('h3');
    artist.textContent = form.artist.value;
    albumListItem.appendChild(artist);

    const release_date = document.createElement('p');
    release_date.textContent = form.release_date.value;
    albumListItem.appendChild(release_date);

    return albumListItem;
    
}

const handleDeleteAllClick = function (event) {
    const albumList = document.querySelector('#album-list');
    albumList.innerHTML = '';
}