import React from 'react';
import Tour from 'reactour';
import { useDispatch, useSelector } from 'react-redux';
import { setTour } from 'store/thunks/tourThunks';
import { TabContext } from 'context/TabContext';

const steps = [
  {
    selector: '[data-guid="web-cam"]',
    content: 'Это окно вебкамеры показывающее реальное аппаратное устройство',
  },
  {
    selector: '[data-guid="switcher"]',
    content: 'Кнопки переключения между окнами',
  },
  {
    selector: '[data-guid="logger"]',
    content:
      'Это окно логгирования информации уходящей с клиента и приходящей с сервера',
  },
  {
    selector: '[data-guid="form-commands"]',
    content: 'Это окно содержит в себе форму со списком доступных комманд',
  },
  {
    selector: '[data-guid="form-stringInput"]',
    content:
      'Строка отправляемая на сервер состоит из комманды + адресса RAM или регистра или Порта и операнда',
  },
  {
    selector: '[data-guid="form-register"]',
    content:
      'В этом поле выбирается регистр от 0 - 25 и записывается в строку для отправки на сервер (в шестнадцетиричной системе счисления)',
  },
  {
    selector: '[data-guid="form-ram"]',
    content:
      'В этом поле вводиться значение памяти устройства от 0100 до 0200 (в шестнадцетиричной системе счисления)',
  },
  {
    selector: '[data-guid="form-operand"]',
    content:
      'В этом поле вводиться операнд с которомы можно работать от 1 до 255 (01-FF в шестнадцетиричной системе счисления)',
  },
  {
    selector: '[data-guid="form-command"]',
    content:
      'В этом поле выбирается комманда которую распознает программа работающая с ней (например: read_memo - прочитать память)',
  },
  {
    selector: '[data-guid="form-portInput"]',
    content: 'В этом поле выбирается порт устройства для работы с ним',
  },
  {
    selector: '[data-guid="form-comment"]',
    content:
      'В этом поле вы пишите свой комментарий к строке, что ваша комманда делает или просто что вам придет в голову :)',
  },
  {
    selector: '[data-guid="list-commands"]',
    content:
      'Здесь представлен список доступных комманд, а так же доступны комманды для работы',
  },
];

const PlatformGuideBox = () => {
  const { setTab } = React.useContext(TabContext);
  const { isTourOpen } = useSelector((store) => store.tour);
  const dispatch = useDispatch();

  const handleChangeTab = (cur) => {
    if (cur === 11) {
      setTab(1);
    } else {
      setTab(0);
    }
  };

  return (
    <>
      <Tour
        getCurrentStep={handleChangeTab}
        steps={steps}
        isOpen={isTourOpen}
        onRequestClose={() => dispatch(setTour(false))}
      />
    </>
  );
};

export default PlatformGuideBox;
