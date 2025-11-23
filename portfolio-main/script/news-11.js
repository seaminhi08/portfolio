document.querySelectorAll('.recipe-search-form-form-a')
    .forEach(form => {
        form.addEventListener('submit', function () {
            let keyword = this.querySelector('input[name="keyword"]').value;
            alert("검색어: " + keyword);

        });
    });
