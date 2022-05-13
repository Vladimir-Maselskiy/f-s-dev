import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { clientPercentage } from './const';
import { Report } from 'notiflix/build/notiflix-report-aio';

export function onMarginButtonClick() {
  const margin = clientPercentage.tradeMargin;
  Confirm.prompt(
    'Привіт',
    'Введи торгову націнку',
    margin,
    'Answer',
    'Cancel',
    clientAnswer => {
      if (!isNaN(Number(clientAnswer)) && Number(clientAnswer) >= 0) {
        clientPercentage.setTradeMargin(Number(clientAnswer));
        const markup = `Нова націнка: ${clientPercentage.tradeMargin}%`;
        Report.success('Успішно', markup, 'Okay');
        return;
      }
      Report.failure('Помилка', 'Невірний формат', 'Okay');
    },
    clientAnswer => {
      //   Report.failure('Відміна', '', 'Okay');
    },
    {},
  );
}
