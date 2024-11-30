<script setup>
import { APP_NAME, EMAIL_SUPPORT, APP_URL } from "@/helpers/config.js";
</script>
<template>
    <div class="flex items-center justify-center wrapper-922">
        <div class="flex flex-col relative mt-10">
            <h1 class="text-xl uppercase font-bold mb-6 sm:text-2xl md:text-3xl">Политика конфиденциальности</h1>
            <p class="mb-1">Дата последнего обновления: 26.10.2024</p>
            <p class="mb-2">
                В данной Политике конфиденциальности описывается, как компания <strong>{{ APP_NAME }}</strong> (далее — «Мы», «Наш» или «Компания») собирает, использует и защищает личные данные пользователей (далее — «Вы» или «Пользователь») на сайте <a :href="APP_URL" class="link">{{ APP_URL }}</a
                >.
            </p>

            <h2 class="text-xl font-semibold mb-1">1. Сбор личных данных</h2>
            <p class="mb-2">Мы собираем следующие личные данные у Пользователей:</p>
            <ul class="list-disc pl-5 mb-2">
                <li>Имя</li>
                <li>Адрес электронной почты</li>
            </ul>

            <h2 class="text-xl font-semibold mb-1">2. Способы сбора данных</h2>
            <p class="mb-2">Личные данные собираются через формы на сайте.</p>

            <h2 class="text-xl font-semibold mb-1">3. Использование данных</h2>
            <p class="mb-2">Собранные данные используются для следующих целей:</p>
            <ul class="list-disc pl-5 mb-2">
                <li>Улучшение наших услуг</li>
                <li>Отправка уведомлений</li>
            </ul>

            <h2 class="text-xl font-semibold mb-1">4. Хранение данных</h2>
            <p class="mb-2">Мы не удаляем собранные данные. Данные хранятся на протяжении всего срока использования услуг.</p>

            <h2 class="text-xl font-semibold mb-1">5. Защита данных</h2>
            <p class="mb-2">Доступ к личным данным имеют только некоторые сотрудники компании, которые уполномочены на это. Мы принимаем все разумные меры для защиты личной информации от несанкционированного доступа.</p>

            <h2 class="text-xl font-semibold mb-1">6. Раскрытие данных</h2>
            <p class="mb-2">Мы не передаем личные данные третьим лицам, если это не требуется по закону.</p>

            <h2 class="text-xl font-semibold mb-1">7. Права пользователей</h2>
            <p class="mb-2">
                Пользователи имеют право запросить удаление своих данных. Для этого необходимо отправить письмо на адрес электронной почты:
                <a :href="'mailto:' + EMAIL_SUPPORT" class="link">{{ EMAIL_SUPPORT }}</a
                >.
            </p>

            <h2 class="text-xl font-semibold mb-1">8. Контактная информация</h2>
            <p class="mb-2">
                Если у вас есть вопросы по поводу нашей Политики конфиденциальности, вы можете связаться с нами по следующему адресу электронной почты:
                <a :href="'mailto:' + EMAIL_SUPPORT" class="link">{{ EMAIL_SUPPORT }}</a
                >.
            </p>

            <h2 class="text-xl font-semibold mb-1">9. Изменения в политике конфиденциальности</h2>
            <p class="mb-2">Мы не уведомляем Пользователей об изменениях в данной Политике конфиденциальности. Рекомендуем периодически проверять эту страницу для получения актуальной информации.</p>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$emit("disableBackgroundElement");
    },
};
</script>
