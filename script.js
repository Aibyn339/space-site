const celestialBodies = {
    Mercury: {
        mass: "3.30 x 10^23 kg",
        diameter: "4,880 km",
        radius: "2,440 km",
        description: "Mercury is the closest planet to the Sun.",
        image: "https://avatars.dzeninfra.ru/get-zen_doc/9123373/pub_63ec62fa2f253731cc5e9f17_63ec642e290c9a113cd7871a/scale_1200" // Замените на ваш путь к изображению
    },
    Venus: {
        mass: "4.87 x 10^24 kg",
        diameter: "12,104 km",
        radius: "6,052 km",
        description: "Venus is the second planet from the Sun.",
        image: "https://imgtest.mir24.tv/uploaded/images/crops/2021/September/1200x600_0x300_wide_crop_20210901092007_6fa502da_7aa778e6a90c8603e1967f89e4414fd7e60ac727a3b98f16d59542c56b2b6d10.jpg" // Замените на ваш путь к изображению
    },
    Earth: {
        mass: "5.97 x 10^24 kg",
        diameter: "12,742 km",
        radius: "6,371 km",
        description: "Earth is the third planet from the Sun and the only known planet to support life.",
        image: "https://www.rabstol.net/uploads/gallery/main/11/rabstol_net_space_31.jpg" // Замените на ваш путь к изображению
    },
    Mars: {
        mass: "6.42 x 10^23 kg",
        diameter: "6,779 km",
        radius: "3,389.5 km",
        description: "Mars is known as the Red Planet.",
        image: "https://cdna.artstation.com/p/assets/covers/images/060/777/346/large/nikita-kryukovchenko-nikita-kryukovchenko-image.jpg?1679316805" // Замените на ваш путь к изображению
    },
    Jupiter: {
        mass: "1.90 x 10^27 kg",
        diameter: "139,822 km",
        radius: "69,911 km",
        description: "Jupiter is the largest planet in our solar system.",
        image: "https://media.sketchfab.com/models/85d2ee4f43084582a2597c20356daf59/thumbnails/20bfb8b3aed8424094a0857e956b8dd4/1ae1472126f64ecf82b8708a88d398fc.jpeg" // Замените на ваш путь к изображению
    },
    Saturn: {
        mass: "5.68 x 10^26 kg",
        diameter: "116,464 km",
        radius: "58,232 km",
        description: "Saturn is famous for its rings.",
        image: "https://avatars.mds.yandex.net/i?id=85fc570bc05b85a43aac83181656efb9_l-4872349-images-thumbs&n=13" // Замените на ваш путь к изображению
    },
    Uranus: {
        mass: "8.68 x 10^25 kg",
        diameter: "50,724 km",
        radius: "25,362 km",
        description: "Uranus is known for its unusual rotation.",
        image: "https://sun9-71.userapi.com/impg/NFZ6811HXrf7oebOBTbIJ8rQrgc0Hypcjs39DQ/VGgClKnZBAU.jpg?size=1219x640&quality=96&sign=351f573ddd8b0e98bc1e80e66d298d5c&c_uniq_tag=mhjETwE3CzbnpAuoJZgjNRHGo8FCIvbrNWHElHHYhg8&type=album" // Замените на ваш путь к изображению
    },
    Neptune: {
        mass: "1.02 x 10^26 kg",
        diameter: "49,244 km",
        radius: "24,622 km",
        description: "Neptune is the farthest planet from the Sun.",
        image: "https://media.baamboozle.com/uploads/images/82375/1595260012_333359" // Замените на ваш путь к изображению
    },
    Ceres: {
        mass: "9.07 x 10^20 kg",
        diameter: "940 km",
        radius: "469 km",
        description: "Ceres is the largest object in the asteroid belt.",
        image: "https://avatars.mds.yandex.net/i?id=50cc6abedde6c079f5636d8acc6b5410_l-5858707-images-thumbs&n=13" // Замените на ваш путь к изображению
    },
    Vesta: {
        mass: "2.59 x 10^20 kg",
        diameter: "525.4 km",
        radius: "262.7 km",
        description: "Vesta is one of the largest asteroids in the asteroid belt.",
        image: "https://avatars.mds.yandex.net/i?id=50cc6abedde6c079f5636d8acc6b5410_l-5858707-images-thumbs&n=13" // Замените на ваш путь к изображению
    },
    Pallas: {
        mass: "4.2 x 10^20 kg",
        diameter: "512 km",
        radius: "256 km",
        description: "Pallas is the second largest asteroid.",
        image: "https://avatars.mds.yandex.net/i?id=50cc6abedde6c079f5636d8acc6b5410_l-5858707-images-thumbs&n=13" // Замените на ваш путь к изображению
    },
    Hygiea: {
        mass: "8.56 x 10^19 kg",
        diameter: "430 km",
        radius: "215 km",
        description: "Hygiea is the fourth largest asteroid.",
        image: "https://avatars.mds.yandex.net/i?id=50cc6abedde6c079f5636d8acc6b5410_l-5858707-images-thumbs&n=13" // Замените на ваш путь к изображению
    },
    Eros: {
        mass: "6.69 x 10^15 kg",
        diameter: "16.84 km",
        radius: "8.42 km",
        description: "Eros is a near-Earth asteroid.",
        image: "https://avatars.mds.yandex.net/i?id=50cc6abedde6c079f5636d8acc6b5410_l-5858707-images-thumbs&n=13" // Замените на ваш путь к изображению
    },
    Juno: {
        mass: "5.38 x 10^19 kg",
        diameter: "234.5 km",
        radius: "117.25 km",
        description: "Juno is one of the largest asteroids in the asteroid belt.",
        image: "https://avatars.mds.yandex.net/i?id=50cc6abedde6c079f5636d8acc6b5410_l-5858707-images-thumbs&n=13"
    },
    Ethel: {
        mass: "5.23 x 10^18 kg",
        diameter: "150 km",
        radius: "75 km",
        description: "Ethel is a smaller asteroid in the asteroid belt.",
        image: "https://avatars.mds.yandex.net/i?id=50cc6abedde6c079f5636d8acc6b5410_l-5858707-images-thumbs&n=13"
    },
    Davida: {
        mass: "6.94 x 10^19 kg",
        diameter: "220 km",
        radius: "110 km",
        description: "Davida is a large asteroid.",
        image: "https://avatars.mds.yandex.net/i?id=50cc6abedde6c079f5636d8acc6b5410_l-5858707-images-thumbs&n=13"
    },
    Euphrosyne: {
        mass: "6.56 x 10^19 kg",
        diameter: "320 km",
        radius: "160 km",
        description: "Euphrosyne is one of the largest asteroids in the asteroid belt.",
        image: "https://avatars.mds.yandex.net/i?id=50cc6abedde6c079f5636d8acc6b5410_l-5858707-images-thumbs&n=13"
    },
};

document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value.trim();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    const celestialBody = celestialBodies[query.charAt(0).toUpperCase() + query.slice(1).toLowerCase()];

    if (celestialBody) {
        resultsDiv.innerHTML = `
            <h2>${query.charAt(0).toUpperCase() + query.slice(1).toLowerCase()}</h2>
            <img src="${celestialBody.image}" alt="${query}" style="width: 100%; border-radius: 8px;"/>
            <p><strong>Mass:</strong> ${celestialBody.mass}</p>
            <p><strong>Diameter:</strong> ${celestialBody.diameter}</p>
            <p><strong>Radius:</strong> ${celestialBody.radius}</p>
            <p><strong>Description:</strong> ${celestialBody.description}</p>
        `;
        resultsDiv.style.opacity = 1;
    } else {
        resultsDiv.innerHTML = '<p>Body not found. Please enter a valid planet or asteroid name.</p>';
    }
});





    

// Генерация звезд
function createStars() {
    const starContainer = document.querySelector('.stars');
    const numberOfStars = 150; // Количество звезд

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        const size = Math.random() * 3 + 1; // Размер звезды
        star.className = `star star-${Math.random() < 0.5 ? 'small' : Math.random() < 0.5 ? 'medium' : 'large'}`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}vw`; // Позиция по горизонтали
        star.style.animationDuration = `${Math.random() * 5 + 15}s`; // Разная скорость анимации
        star.style.animationDelay = `${Math.random() * 10}s`; // Задержка анимации, чтобы звезды появлялись постепенно
        starContainer.appendChild(star);
    }
}

// Вызов функции для генерации звезд
createStars();