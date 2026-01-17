const initYandexMapV2x = () => {
    // Создание карты
    const myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: широта, долгота
        center: [43.0362, 131.89055],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 17,
        // Тип карты yandex#map - схема, yandex#satellite - спутник, yandex#hybrid - гибрид
        type: 'yandex#map',
        // Добавляем в свойство controls: [''], smallMapDefaultSet - мелкие элементы управления на карте, default - средние (по умолчанию) largeMapDefaultSet - большие
        controls: ['zoomControl', 'rulerControl', 'geolocationControl', 'typeSelector', 'fullscreenControl', 'searchControl'],

    },
    {
        // Если установлено smallMapDefaultSet или др то опции не нужны
        // Возможные атрибуты small, large
        zoomControlSize: 'small',
        typeSelectorSize: 'small',
        searchControlSize:  'small'
    });

    // Или так
    /* myMap.controls.get('zoomControl').options.set('size', 'small')
    myMap.controls.get('typeSelector').options.set('size', 'small')
    myMap.controls.get('searchControl').options.set('size', 'small') */

    // Функция для упрощения
    /* function setElemntsMapSize(element) {
        myMap.controls.get(element).options.set('size', 'small')
    }
    setElemntsMapSize('zoomControl')
    setElemntsMapSize('typeSelector')
    setElemntsMapSize('searchControl') */

    const myPlacemark = new ymaps.Placemark([43.0362, 131.89055],
        {
            // Заголовок
            balloonContentHeader: '',
            // Текст
            balloonContentBody: '',
            // Текст внизу
            balloonContentFooter: '',
            // Текст при наведении
            hintContent: '690922, Приморский край, г.о. Владивостокский, <br> о. Русский, пр-кт Университетский, зд. 33',
        },
        {
            // Значение 'default#image' или'default#imageWithContent' для меток без текста и с текстом поверх картинки
            iconLayout: 'default#image',
			iconCaption: '690922, Приморский край, г.о. Владивостокский, о. Русский, пр-кт Университетский, зд. 33',
            // Путь к картинке
            iconImageHref: 'icons/geo-mark.png',
            iconImageSize: [50, 70],
    	}
	)

    myMap.geoObjects.add(myPlacemark);


    const myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point", // тип геометрии - точка
            coordinates: [] // координаты точки, убрать если метка кастомная
        }
    });

    myMap.geoObjects.add(myGeoObject);
}


ymaps.ready(initYandexMapV2x)