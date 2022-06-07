"use strict";

let scrollToTop =document.querySelector('.scroll-top'),
    instagram = document.querySelector('.instagram-p'),
    telegram = document.querySelector('.telegram-p'),
    russian = document.querySelector('.russian'),
    uzbek = document.querySelector('.uzbek'),
    aboutProduct = document.querySelector('.about-product-h2'),
    descriptionH3 = document.querySelector('.description-h3'),
    descriptionP = document.querySelector('.description-p'),
    descriptionTech = document.querySelector('.description-tech'),
    descriptionTechP = document.querySelector('.description-tech-p'),
    orderH2 = document.querySelector('.order-h2'),
    fName = document.querySelector('.fname'),
    tel = document.querySelector('.tel'),
    fNamePlace = document.querySelector('.fname-place'),
    price = document.querySelector('.price'),
    succesText = document.querySelector('.succes-text'),
    failText = document.querySelector('.fail-text')


scrollToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})




let rus = () => {
    instagram.textContent = "Инстаграм";
    telegram.textContent = "Телеграм";
    aboutProduct.textContent = " О продукте";
    descriptionH3.textContent = "Описание";
    descriptionP.textContent = `
    Профессиональная перезаряжаемая электрическая машинка для стрижки резьбы оснащена режущей головкой из титановой керамики, долговечна, не легко нагревается, имеет низкий уровень шума и высокую эффективность стрижки.
    Соответствует инженерному дизайну человеческого тела, имеет обтекаемый корпус и удобен, прост в эксплуатации.
    Мощный двигатель, более плавная стрижка волос, более удобная работа, эффективное предотвращение таких проблем, как застревание волос.
    Низкочастотная вибрация эффективно уменьшает ненужный шум, тихо и комфортно.
    Т-образный контур и 0 шагов зубцов, вырезание изображения или прояснение всего, легко сделать многовариантную прическу.
    `;
    descriptionTech.textContent = "Технические характеристики:";
    descriptionTechP.innerHTML = `
    Модель: БЗ-Т99
    <br>
    Материал: титановая керамика + АБС-пластик
    <br>
    Размер: 143x40,8x23,9 мм
    <br>
    Номинальная мощность: 5 Вт
    <br>
    Номинальное напряжение: 3,7 В постоянного тока
    <br>
    Вход: 100–240 В переменного тока / 4,2 постоянного тока == 1,0 А
    <br>
    Скорость: 6800+/-10% об/мин
    <br>
    Время использования: около 2 часов
    <br>
    Время зарядки: около 3 часов
    <br>
    Батарея: литиевая батарея 1200 мАч 18500 (не входит в комплект)
    <br>
    <br>
    <h3>
    Пакет включает в себя:
    </h3>
    <br>
    1 шт. машинка для стрижки волос
    <br>
    1 шт. зарядное устройство
    <br>
    3 направляющих гребня
    <br>
    1 шт. щетка для чистки
    `;
    orderH2.textContent = 'Заказать';
    fName.textContent = "Введите ваше имя:";
    tel.textContent = "Введите свой номер телефона:";
    fNamePlace.placeholder = 'Введите ваше имя:';
    price.textContent = "Цена: 299 000 сум";
    failText.textContent = "Не удалось";
    succesText.textContent = "Успех"
};


let uzb = () => {
    instagram.textContent = "Instagram";
    telegram.textContent = "Telegram";
    aboutProduct.textContent = "Mahsulot haqida";
    descriptionH3.textContent = "Tavsif";
    descriptionP.textContent = `
        Professional o'ymakorlik qayta zaryadlanuvchi elektr kesish mashinasi, titaniumli keramik to'sar boshini qabul qiladi, bardoshli, isitish oson emas, shovqinni pasaytiradi, yuqori kesish samaradorligi.
        Inson tanasi muhandislik dizayniga muvofiq, soddalashtirilgan tanani ushlab turing va qulay, ishlatish uchun qulay.
        Kuchli vosita, sochni silliqroq qirqish, qulayroq ishlaydi, sochlar yopish kabi muammolarni samarali oldini oladi.
        Past chastotali tebranish keraksiz shovqinni samarali ravishda kamaytiradi va jim va qulay.
        T-chiziq va 0 tish tirgaklari, tasvir dizaynini o'yib olish yoki barchasini aniqlashtirish, osongina ko'p variantli soch turmagini yaratish.
    `;
    descriptionTech.textContent = "Texnik tavsifi:";
    descriptionTechP.innerHTML = `
    Model: BZ-T99
    <br>
    Material: titanium keramika + ABS plastik
    <br>
    Hajmi: 143x40.8x23.9mm
    <br>
    Nominal quvvat: 5 Vt
    <br>
    Nominal kuchlanish: DC 3.7V
    <br>
    Kirish: AC 100-240V / DC 4.2==1.0A
    <br>
    Tezlik: 6800+/-10% RPM
    <br>
    Foydalanish vaqti: taxminan 2 soat
    <br>
    Zaryadlash vaqti: Taxminan 3 soat
    <br>
    Batareya: 1200mAh 18500 lityum batareya (qo'shilmagan)
    <br>
    <br>
    <h3>
    Paketga quyidagilar kiradi:
    </h3>
    <br>         
    1 dona soch kesish mashinasi
    <br>                
    1 dona batareya zaryadlovchi
    <br>
    3 dona qo'llanma taroqlari
    <br>
    1 dona tozalash cho'tkasi
    `;
    orderH2.textContent = 'Buyurtma qilish';
    fName.textContent = "Ismingizni kiriting:";
    fNamePlace.placeholder = 'Ismingizni kiriting:';
    tel.textContent = "Telefon raqamingizni kiriting:";
    price.textContent = "  Narxi: 299 000 so'm";
    failText.textContent = "Muvaffaqiyatsiz";
    succesText.textContent = "Muvaffaqiyatli";
};



