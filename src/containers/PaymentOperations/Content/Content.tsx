import React from "react";
import { Paragraph, Title } from "src/components/common";
import { Box } from "src/components/ui";

import styles from "./Content.module.scss";

const PaymentsPageContent = () => {
  return (
    <div className={styles.root}>
      <Title>Способы оплаты на PRINTSTORES.RU</Title>
      <Box mb={20}>
        <Title fontWeight={600} level="h3">
          Банковские карты
        </Title>
        <Paragraph>
          Вы можете оплатить заказ, используя банковскую карту <b>Visa</b>, <b>Mastercard</b> или <b>Мир.</b> Для
          осуществления платежа вам потребуется сообщить данные вашей пластиковой карты. Передача этих сведений
          производится с соблюдением всех необходимых мер безопасности. Данные будут сообщены только на авторизационный
          сервер банка по защищенному каналу (протокол SSL 3.0). Информация передается в зашифрованном виде и
          сохраняется только на специализированном сервере платежной системы.
        </Paragraph>
      </Box>
      <Box mb={20}>
        <Box mb={10}>
          <Title fontWeight={600} level="h3">
            Электронные кошельки
          </Title>
          <Paragraph>
            Оплата осуществляется через сервис <b>PayMaster</b>, который обеспечивает безопасное/зашифрованные
            интернет-соединение и дополнительную защиту при пересылке платежных сообщений. Доступные кошельки:
          </Paragraph>
        </Box>
        <Box mb={10}>
          <Title fontWeight={500} level="h4">
            ЮMoney
          </Title>
          <Paragraph>
            ЮMoney — доступный и безопасный способ платить за товары и услуги через интернет. Для перевода средств на
            наш электронный кошелек необходимо иметь собственный счет в системе «ЮMoney» и достаточную для перевода
            сумму.
          </Paragraph>
        </Box>
        <Box>
          <Title level="h4">QIWI</Title>
          <Paragraph>
            Простой и быстрый способ оплаты покупок в интернет-магазинах для пользователей мобильных устройств на
            платформе Android. Платить через Google Pay не только удобно, но и безопасно: когда вы расплачиваетесь через
            Google Pay, данные вашей карты никуда не передаются.
          </Paragraph>
        </Box>
      </Box>
      <Box mb={20}>
        <Title fontWeight={600} level="h3" mb={10}>
          Платежные сервисы
        </Title>
        <Box mb={10}>
          <Title level="h4">Google Pay</Title>
          <Paragraph>
            Простой и быстрый способ оплаты покупок в интернет-магазинах для пользователей мобильных устройств на
            платформе Android. Платить через Google Pay не только удобно, но и безопасно: когда вы расплачиваетесь через
            Google Pay, данные вашей карты никуда не передаются.
          </Paragraph>
        </Box>
        <div>
          <Title level="h4">Apple Pay</Title>
          <Paragraph>
            Платежный сервис, доступный на любом устройстве от Apple. Использует индивидуальный номер вашего устройства
            и уникальный код транзакции. То есть номер карты не сохраняется на устройстве или серверах и не передаётся
            продавцам при оплате.
          </Paragraph>
        </div>
      </Box>
      <Box mb={20}>
        <Title fontWeight={600} level="h3">
          {" "}
          Наличными
        </Title>
        <Paragraph>
          При заказе <b>до 4000 рублей </b> можно оплатить покупку наличными в любом пункте выдачи или курьеру
          <b>(не все сервисы доставки поддерживают оплату наличными, уточняйте информацию при заказе)</b>
        </Paragraph>
      </Box>
    </div>
  );
};

export default PaymentsPageContent;
