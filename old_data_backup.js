// This file holds the old MENU_DATA for the migration script in the admin panel.
const OLD_MENU_DATA = [
    {
        categoryId: 'dishes',
        title: 'מנות',
        icon: '🥪',
        items: [
            {
                id: 'm1',
                name: '🔥 דיל משפחתי',
                image: 'dishes/m1.png',
                description: 'כולל: 2 ליטר קוסקוס, 2 ליטר מרק, 4 מפרום / עוף לבחירה, חמוצים ומטבוחה בצד',
                options: [{ label: 'משפחתי', price: 170 }],
                isSpecialDeal: true,
                customizable: true,
                customizationType: 'quantity-limit',
                customizationLimit: 4,
                customizationOptions: ['מפרום', 'עוף']
            },
            {
                id: 'm2',
                name: 'שניצל בג׳בטה',
                image: 'dishes/m2.jpeg',
                description: 'עם מטבוחה, חציל מטוגן, חומוס מבושל, פלפל חריף וחמוצים בצד',
                options: [{ label: 'רגיל', price: 40 }],
                customizable: true,
                customizationOptions: [
                    'ללא שינויים',
                    'ללא מטבוחה',
                    'ללא חציל מטוגן',
                    'ללא חומוס מבושל',
                    'ללא פלפל חריף'
                ]
            },
            {
                id: 'm3',
                name: 'מנה קוסקוס עם מפרום / עוף',
                image: 'dishes/m3.jpeg',
                options: [{ label: 'רגיל', price: 50 }],
                customizable: true,
                customizationType: 'quantity-limit',
                customizationLimit: 1,
                customizationOptions: ['מפרום', 'עוף']
            },
            { id: 'm4', name: 'מנה קוסקוס צמחוני', image: 'dishes/m4.jpeg', options: [{ label: 'רגיל', price: 40 }] },
            { id: 'm5', name: 'סולת 2 ליטר ', image: 'dishes/m5.jpeg', options: [{ label: 'רגיל', price: 60 }] },
        ]
    },
    {
        categoryId: 'mains',
        title: 'בשר / עוף',
        icon: '🍲',
        items: [
            { id: 'main1', name: 'רולדת בשר ורוטב פטריות', image: 'mains/main1.jpeg', options: [{ label: 'רגיל', price: 80 }] },
            { id: 'main2', name: 'פשטידת מחמאר', image: 'mains/main2.jpeg', options: [{ label: 'רגיל', price: 70 }] },
            { id: 'main3', name: 'צלי בשר - יחידה', image: 'mains/main3+4.jpeg', options: [{ label: 'יחידה', price: 30 }] },
            { id: 'main4', name: 'צלי בשר - 5 יחידות', image: 'mains/main3+4.jpeg', options: [{ label: '', price: 140 }] },
            { id: 'main5', name: 'מפרום (יחידה)', image: 'mains/main5.jpeg', options: [{ label: 'יחידה', price: 15 }] },
            { id: 'main6', name: 'שניצל (יחידה)', image: 'mains/main6.jpeg', options: [{ label: 'יחידה', price: 15 }] },
            { id: 'main7', name: 'כרע עוף (יחידה)', image: 'mains/main7.jpeg', options: [{ label: 'יחידה', price: 15 }] },
        ]
    },
    {
        categoryId: 'fish',
        title: 'דגים',
        icon: '🐟',
        items: [
            { id: 'f1', name: 'קציצות דגים (10 יח׳)', image: 'fish/f1.jpeg', options: [{ label: 'רגיל', price: 70 }] },
            { id: 'f2', name: 'דג טונה ברוטב מרוקאי', image: 'fish/f2.jpeg', options: [{ label: 'יחידה', price: 25 }] },
            { id: 'f3', name: 'דג מושט ברוטב מרוקאי', image: 'fish/f3.jpeg', options: [{ label: 'יחידה', price: 25 }] },
            { id: 'f4', name: 'דג מושט מטוגן', image: 'fish/f4.jpg', options: [{ label: 'יחידה', price: 25 }] },
        ]
    },
    {
        categoryId: 'salads',
        title: 'סלטים',
        icon: '🥗',
        subtitle: 'מחירים לפי 250 מ״ל / 500 מ״ל',
        items: [
            { id: 's1', name: 'מטבוחה', image: 'salads/matbuha.jpeg', options: [{ label: '250 מ"ל', price: 25 }, { label: '500 מ"ל', price: 40 }] },
            { id: 's10', name: 'סלט ביצים', image: 'salads/egg.jpeg', options: [{ label: '250 מ"ל', price: 20 }, { label: '500 מ"ל', price: 30 }] },
            { id: 's2', name: 'חציל באריסה', image: 'salads/eggplant_arisa.jpeg', options: [{ label: '250 מ"ל', price: 20 }, { label: '500 מ"ל', price: 30 }] },
            { id: 's3', name: 'תפוח אדמה במיונז', image: 'salads/potato_salad.jpeg', options: [{ label: '250 מ"ל', price: 20 }, { label: '500 מ"ל', price: 30 }] },
            { id: 's4', name: 'חציל במיונז', image: 'salads/eggplant_mayo.jpeg', options: [{ label: '250 מ"ל', price: 20 }, { label: '500 מ"ל', price: 30 }] },
            { id: 's5', name: 'כרוב אדום', image: 'salads/Cabbage_mayo.jpeg', options: [{ label: '250 מ"ל', price: 15 }, { label: '500 מ"ל', price: 25 }] },
            { id: 's6', name: 'כרוב תירס במיונז', image: 'salads/Cabbage_mayo_corn.jpeg', options: [{ label: '250 מ"ל', price: 15 }, { label: '500 מ"ל', price: 25 }] },
            { id: 's7', name: 'כרוב גזר במיונז', image: 'salads/cabbage_carrot_mayo.jpeg', options: [{ label: '250 מ"ל', price: 15 }, { label: '500 מ"ל', price: 25 }] },
            { id: 's8', name: 'כרוב חמוץ', image: 'salads/cabbage_3.jpeg', options: [{ label: '250 מ"ל', price: 15 }, { label: '500 מ"ל', price: 25 }] },
            { id: 's9', name: 'סלק אדום', image: 'salads/selek.jpeg', options: [{ label: '250 מ"ל', price: 20 }, { label: '500 מ"ל', price: 30 }] },
            { id: 's11', name: 'טחינה', image: 'salads/thina.jpeg', options: [{ label: '250 מ"ל', price: 15 }, { label: '500 מ"ל', price: 25 }] },
            { id: 's12', name: 'סלסה', image: 'salads/salsa.jpeg', options: [{ label: '250 מ"ל', price: 15 }, { label: '500 מ"ל', price: 25 }] },
            { id: 's13', name: 'גזר חי חריף', image: 'salads/carrot_live.jpeg', options: [{ label: '250 מ"ל', price: 15 }, { label: '500 מ"ל', price: 25 }] },
            { id: 's14', name: 'גזר מבושל', image: 'salads/carrot.jpeg', options: [{ label: '250 מ"ל', price: 15 }, { label: '500 מ"ל', price: 25 }] },
            { id: 's15', name: 'פלפל חריף מטוגן', image: 'salads/pilpel_metugan.jpeg', options: [{ label: '250 מ"ל', price: 25 }, { label: '500 מ"ל', price: 35 }] },
            { id: 's16', name: 'חמוצי הבית', image: 'salads/hamutim.jpeg', options: [{ label: '250 מ"ל', price: 15 }, { label: '500 מ"ל', price: 25 }] },
        ]
    },
    {
        categoryId: 'sides',
        title: 'תוספות',
        icon: '🍚',
        items: [
            { id: 'side4', name: 'חומוס מרוקאי מבושל', image: 'sides/side4.jpeg', options: [{ label: '1 ליטר', price: 40 }, { label: '2 ליטר', price: 80 }] },
            { id: 'side1', name: 'תפוח אדמה', image: 'sides/side1.jpeg', options: [{ label: '1 ליטר', price: 35 }, { label: '2 ליטר', price: 70 }] },
            { id: 'side2', name: 'זיתים ברוטב', image: 'sides/side2.jpeg', options: [{ label: '1 ליטר', price: 30 }, { label: '2 ליטר', price: 60 }] },
            { id: 'side3', name: 'אורז', image: 'sides/side3.avif', options: [{ label: '1 ליטר', price: 25 }, { label: '2 ליטר', price: 45 }] },
        ]
    }
];
