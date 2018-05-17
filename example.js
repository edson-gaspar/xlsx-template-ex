const fs = require('fs');
const XlsxTemplate = require('.');

const testData = {
    "reportBuildDate": "10.05.2018",
    "taskCode": "CHL002",
    "taskTechnicFio": "Бручко Андрей Техик",
    "taskName": "CHECK LIST СКЛАДЫ И ЛОГИСТИЧЕСКИЕ КОМПЛЕКСЫ",
    "taskDescription": "Провести осмотр нежилого помещения под склад и заполнить чек-лист",
    "taskDateStart": "30.04.2018",
    "taskDateEnd": "03.05.2018",
    "taskDateComplete": "05.05.2018",
    "objectCode": "CHL02",
    "objectName": "Склад на улице Красной армии 11",
    "results": [
        {
            "text": "Действительный  адрес объекта соответствует адресу, указанному в документах",
            "answerText": "Да",
            "comment": null,
            "measuringName": "",
            "measuringResult": ""
        },
        {
            "text": "Укажите этажность здания (уточнить точную этажность, в т.ч. указать наличие цоколя, подвала, мансарды)",
            "answerText": "Выполнено",
            "comment": 'Тестовый комментарий',
            "measuringName": "",
            "measuringResult": ""
        },
        {
            "text": "Условия для подъезда и разворота большегрузного транспорта",
            "answerText": "Нет",
            "comment": null,
            "measuringName": "",
            "measuringResult": ""
        },
        {
            "text": "Подъездной путь",
            "answerText": "Асфальтовое покрытие",
            "comment": 'Тестовый комментарий',
            "measuringName": "",
            "measuringResult": ""
        },
        {
            "text": "\nОкружающая застройка\n",
            "answerText": "Административно-торговая",
            "comment": null,
            "measuringName": "",
            "measuringResult": ""
        }
    ],
    steps: [
        {
            stepText: 'Текст шага инспекции 1',
            // fileName: __dirname + '/alex.jpg', created: new Date(), gpsPos: '48.800744, 44.726850',
            media: [
                {fileName: __dirname + '/152.jpg', created: new Date(), gpsPos: '48.2222222, 44.1111111'},
                {fileName: __dirname + '/alex.jpg', created: new Date(), gpsPos: '48.2222222, 44.222222222'},
                {fileName: __dirname + '/152.jpg', created: new Date(), gpsPos: '48.2222222, 44.3333333'},
                {fileName: __dirname + '/152.jpg', created: new Date(), gpsPos: '48.2222222, 44.4444444444'},
                {fileName: __dirname + '/alex.jpg', created: new Date(), gpsPos: '48.2222222, 44.5555555555'},
                {fileName: __dirname + '/152.jpg', created: new Date(), gpsPos: '48.2222222, 44.66666666'},
            ]
        },
        {
            stepText: 'Текст шага инспекции 2',
            // fileName: __dirname + '/152.jpg', created: new Date(), gpsPos: '48.800744, 44.726850',

            media: [
                {fileName: __dirname + '/152.jpg', created: new Date(), gpsPos: '48.2222222, 44.1111111'},
                {fileName: __dirname + '/alex.jpg', created: new Date(), gpsPos: '48.2222222, 44.222222222'},
                {fileName: __dirname + '/152.jpg', created: new Date(), gpsPos: '48.2222222, 44.3333333'},
                {fileName: __dirname + '/152.jpg', created: new Date(), gpsPos: '48.2222222, 44.4444444444'},
                {fileName: __dirname + '/alex.jpg', created: new Date(), gpsPos: '48.2222222, 44.5555555555'},
                {fileName: __dirname + '/152.jpg', created: new Date(), gpsPos: '48.2222222, 44.66666666'},
            ]
        },
        {
            stepText: 'Текст шага инспекции 3',
            // fileName: __dirname + '/alex.jpg', created: new Date(), gpsPos: '48.800744, 44.726850',
            media: [
                {fileName: __dirname + '/alex.jpg', created: new Date(), gpsPos: '48.33333, 44.111111'},
                {fileName: __dirname + '/alex.jpg', created: new Date(), gpsPos: '48.333333333, 44.22222222'},
                // {fileName: __dirname + '/alex.jpg', created: new Date(), gpsPos: '48.800744, 44.726850'},
            ]
        },
    ]
};

XlsxTemplate.xlsxBuildByTemplate(testData, __dirname + '/test-data/template.xlsx')
    .then((buffer) => {
        fs.writeFileSync('./out.xlsx', buffer);
    })
    .catch((error) => {
        console.log('xlsxHelper error:', error);
    });
