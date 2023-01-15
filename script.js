(() => {

    const imgDB = [
        'https://robertelliotthomes.com/wp-content/uploads/2020/11/Luxury-homes-in-Dallas.jpg',
        'https://static01.nyt.com/images/2022/04/17/realestate/17selling-ORANGE-COUNTY/oakImage-1648591069013-superJumbo.jpg',
        'https://nelson-homes.com/media/images/Chestermere_house_plan_nelson_home.2e16d0ba.fill-860x550.jpg',
        'https://thrivehomes.com.au/-/media/thrive-homes/brand/home-page/thive-homepage-banner-2168x1355.ashx',
    ];

    const render = () => {
        const itemsUL = document.getElementById('imgList');

        for (let i in imgDB) {
            const imgTag = document.createElement('img');
            imgTag.style.width = '80px';
            imgTag.style.height = '80px';
            imgTag.style.backgroundColor = 'grey';
            imgTag.setAttribute('src', imgDB[i]);
            itemsUL.appendChild(imgTag);
        }

        const imgContent = document.getElementById('imgContent');
        const alertZoneDiv = document.getElementById('alertZone');
        const alertContentDiv = document.getElementById('alertContent');

        itemsUL.addEventListener('click', e => {
            const src = e.target.getAttribute('src');
            if (src) {
                imgContent.setAttribute('src', src);
                alertContentDiv.classList.remove('hide');
                alertZoneDiv.classList.remove('hide');
            }
        })

        alertZoneDiv.addEventListener('click', () => {
            alertZoneDiv.classList.add('hide');
            alertContentDiv.classList.add('hide');
        });

        alertContentDiv.addEventListener('click', (event) => {
            if (event.target.id === 'close') {
                alertZoneDiv.classList.add('hide');
                alertContentDiv.classList.add('hide');
            } else {
                const inVal = document.getElementById('name').value;
                console.log(inVal);
            }
            ;
        });
    }
    render();
})();