import { Radio, Form } from "antd";
import React from "react";
import { Title, Paragraph } from "src/components/common";

import cn from "classnames";
import styles from "./payment.module.scss";
import { CartCheckoutPaymentsMethods } from "../../constants/checkout.form.constans";
import { Flex } from "src/components/ui";

interface IProps {
  showNonCashPayment: boolean;
}

const CartCheckoutFormPaymentFields: React.FC<IProps> = ({ showNonCashPayment }) => {
  return (
    <Flex>
      <Flex.Item span={12}>
        <Title level="h4">
          <b>Способы оплаты</b>
        </Title>
      </Flex.Item>
      <Form.Item name="payment_method">
        <Radio.Group defaultValue={CartCheckoutPaymentsMethods.CASH.key} className={styles.antRadioGroup}>
          <Flex>
            {showNonCashPayment && (
              <Flex.Item sm={{ span: 12, mb: 20, mr: 0 }} mr={20}>
                <Radio.Button
                  value={CartCheckoutPaymentsMethods.NON_CASH.key}
                  className={cn(styles.antRadio, styles.mr)}
                >
                  <div className={styles.infoBlock}>
                    <Title level="h4">Оплатить сейчас</Title>
                    <div>Банковской картой или электронными деньгами</div>
                    <div className={styles.payment}>
                      <img src="/visa.svg" width={60} height={60} />
                      <img src="/mastercard.svg" width={60} height={60} />
                      <img src="/mir.svg" width={60} height={60} />
                      <img src="/yandex.svg" width={60} height={60} />
                    </div>
                  </div>
                </Radio.Button>
              </Flex.Item>
            )}
            <Flex.Item sm={{ span: 12 }}>
              <Radio.Button value={CartCheckoutPaymentsMethods.CASH.key} className={styles.antRadio}>
                <div className={styles.infoBlock}>
                  <Title level="h4">Оплата при получении</Title>
                  <div>
                    <b>Наличными или банковской картой</b>
                    <Paragraph paragraphClassName={styles.textInfo}>
                      О возможности безналичного расчета уточняйте в службе доставки
                    </Paragraph>
                  </div>
                </div>
              </Radio.Button>
            </Flex.Item>
          </Flex>
        </Radio.Group>
      </Form.Item>
    </Flex>
  );
};

export default CartCheckoutFormPaymentFields;
