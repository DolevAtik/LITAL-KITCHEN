const MENU_DATA = [
    {
        categoryId: 'mannot',
        title: 'מנות',
        icon: '🥪',
        items: [
            { id: 'm1', name: 'שניצל בג׳בטה', description: 'עם מטבוחה, חציל מטוגן, חומוס מבושל, פלפל חריף וחמוצים בצד', options: [ { label: 'רגיל', price: 40 } ] },
            { id: 'm2', name: 'מנה קוסקוס עם מפרום / עוף', options: [ { label: 'רגיל', price: 50 } ] },
            { id: 'm3', name: 'מנה קוסקוס צמחוני', options: [ { label: 'רגיל', price: 40 } ] },
            { id: 'm4', name: 'דיל משפחתי', description: 'כולל: 2 ליטר קוסקוס, 2 ליטר מרק, 4 מפרום / עוף לבחירה, חמוצים ומטבוחה בצד', options: [ { label: 'משפחתי', price: 170 } ] }
        ]
    },
    {
        categoryId: 'salads',
        title: 'סלטים',
        icon: '🥗',
        subtitle: 'מחירים לפי 250 מ״ל / 500 מ״ל',
        items: [
            { id: 's1', name: 'מטבוחה', options: [ { label: '250 מ"ל', price: 25 }, { label: '500 מ"ל', price: 40 } ] },
            { id: 's2', name: 'חציל בעשייה', options: [ { label: '250 מ"ל', price: 20 }, { label: '500 מ"ל', price: 30 } ] },
            { id: 's3', name: 'תפוח אדמה במיונז', options: [ { label: '250 מ"ל', price: 20 }, { label: '500 מ"ל', price: 30 } ] },
            { id: 's4', name: 'חציל במיונז', options: [ { label: '250 מ"ל', price: 20 }, { label: '500 מ"ל', price: 25 } ] },
            { id: 's5', name: 'כרוב אדום', options: [ { label: '250 מ"ל', price: 15 }, { label: '500 מ"ל', price: 25 } ] },
            { id: 's6', name: 'כרוב סגול במיונז', options: [ { label: '250 מ"ל', price: 15 }, { label: '500 מ"ל', price: 25 } ] },
            { id: 's7', name: 'כרוב לבן', options: [ { label: '250 מ"ל', price: 15 }, { label: '500 מ"ל', price: 25 } ] },
            { id: 's8', name: 'כרוב חמוץ', options: [ { label: '250 מ"ל', price: 15 }, { label: '500 מ"ל', price: 25 } ] },
            { id: 's9', name: 'סלק אדום', options: [ { label: '250 מ"ל', price: 20 }, { label: '500 מ"ל', price: 30 } ] },
            { id: 's10', name: 'סלק ביצים', options: [ { label: '250 מ"ל', price: 20 }, { label: '500 מ"ל', price: 30 } ] },
            { id: 's11', name: 'טחינה', options: [ { label: '250 מ"ל', price: 15 }, { label: '500 מ"ל', price: 25 } ] },
            { id: 's12', name: 'סלטה', options: [ { label: '250 מ"ל', price: 15 }, { label: '500 מ"ל', price: 25 } ] },
            { id: 's13', name: 'גזר חי חריף', options: [ { label: '250 מ"ל', price: 15 }, { label: '500 מ"ל', price: 25 } ] },
            { id: 's14', name: 'גזר מבושל', options: [ { label: '250 מ"ל', price: 15 }, { label: '500 מ"ל', price: 25 } ] },
            { id: 's15', name: 'פלפל חריף מטוגן', options: [ { label: '250 מ"ל', price: 25 }, { label: '500 מ"ל', price: 35 } ] },
            { id: 's16', name: 'חמוצי הבית', options: [ { label: '250 מ"ל', price: 15 }, { label: '500 מ"ל', price: 25 } ] },
        ]
    },
    {
        categoryId: 'mains',
        title: 'עיקריות',
        icon: '🍲',
        items: [
            { id: 'main1', name: 'קציצות דגים (10 יח׳)', options: [ { label: 'רגיל', price: 60 } ] },
            { id: 'main2', name: 'דג טונה / מושט בחריימה מרוקאי / מושט מטוגן', options: [ { label: 'יחידה', price: 25 } ] },
            { id: 'main3', name: 'חומוס מבושל', options: [ { label: '1 ליטר', price: 40 } ] },
            { id: 'main4', name: 'פשטידת מחמאר', options: [ { label: 'רגיל', price: 70 } ] },
            { id: 'main5', name: 'צלי בשר - יחידה', options: [ { label: 'יחידה', price: 30 } ] },
            { id: 'main6', name: 'צלי בשר - 5 יחידות', options: [ { label: '5 יחידות', price: 140 } ] },
            { id: 'main7', name: 'רולדת בשר ורוטב פטריות', options: [ { label: 'רגיל', price: 35 } ] },
            { id: 'main8', name: 'מפרום (יחידה)', options: [ { label: 'יחידה', price: 12 } ] },
            { id: 'main9', name: 'שניצל (יחידה)', options: [ { label: 'יחידה', price: 12 } ] },
            { id: 'main10', name: 'כרע עוף (יחידה)', options: [ { label: 'יחידה', price: 15 } ] },
        ]
    },
    {
        categoryId: 'sides',
        title: 'תוספות',
        icon: '🍚',
        items: [
            { id: 'side1', name: 'תפוח אדמה', options: [ { label: '1 ליטר', price: 30 }, { label: '2 ליטר', price: 70 } ] },
            { id: 'side2', name: 'זיתים ברוטב', options: [ { label: '1 ליטר', price: 30 }, { label: '2 ליטר', price: 60 } ] },
            { id: 'side3', name: 'אורז', options: [ { label: '1 ליטר', price: 25 }, { label: '2 ליטר', price: 45 } ] },
        ]
    }
];

let cart = {};

function init() {
    renderTabs();
    renderMenu();
    setupEventListeners();
    
    if (MENU_DATA.length > 0) {
        selectCategory(MENU_DATA[0].categoryId);
    }
}

function renderTabs() {
    const tabsContainer = document.getElementById('category-tabs');
    tabsContainer.innerHTML = '';
    
    MENU_DATA.forEach(category => {
        const btn = document.createElement('button');
        btn.className = 'category-tab';
        btn.id = `tab-${category.categoryId}`;
        btn.innerHTML = `<span>${category.icon}</span> <span>${category.title}</span>`;
        btn.onclick = () => selectCategory(category.categoryId);
        tabsContainer.appendChild(btn);
    });
}

function selectCategory(categoryId) {
    document.querySelectorAll('.category-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.category-section').forEach(section => section.classList.remove('active'));
    
    const activeTab = document.getElementById(`tab-${categoryId}`);
    if (activeTab) {
        activeTab.classList.add('active');
        activeTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
    
    const activeSection = document.getElementById(`section-${categoryId}`);
    if (activeSection) activeSection.classList.add('active');
}

function renderMenu() {
    const container = document.getElementById('menu-container');
    container.innerHTML = '';

    MENU_DATA.forEach(category => {
        const section = document.createElement('section');
        section.className = 'category-section';
        section.id = `section-${category.categoryId}`;

        const header = document.createElement('div');
        header.className = 'category-header';
        header.innerHTML = `
            <span class="category-icon">${category.icon}</span>
            <h2 class="category-title">${category.title}</h2>
        `;
        section.appendChild(header);

        if (category.subtitle) {
            const subtitle = document.createElement('p');
            subtitle.className = 'category-subtitle';
            subtitle.textContent = category.subtitle;
            section.appendChild(subtitle);
        }

        const itemsGrid = document.createElement('div');
        itemsGrid.className = 'items-grid';

        category.items.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.className = 'menu-item';
            
            let descriptionHtml = item.description ? `<p class="item-description">${item.description}</p>` : '';
            
            let optionsHtml = '<div class="price-options">';
            item.options.forEach((opt, idx) => {
                const uniqueId = `${item.id}-${idx}`;
                const cartQty = cart[uniqueId]?.quantity || 0;
                
                const labelDisplay = (opt.label === 'רגיל' || opt.label === 'יחידה' || opt.label === 'משפחתי') ? '' : opt.label;
                const labelHtml = labelDisplay ? `<span>${labelDisplay}</span>` : '';
                
                optionsHtml += `
                    <div class="price-pill">
                        <div class="price-info">
                            ${labelHtml}
                            <strong>₪${opt.price}</strong>
                        </div>
                        <div class="quantity-control">
                            <button class="qty-btn" aria-label="Decrease quantity" onclick="updateCart('${uniqueId}', '${item.name.replace(/'/g, "\\'")}', '${opt.label.replace(/'/g, "\\'")}', ${opt.price}, -1, '${category.categoryId}')">−</button>
                            <span class="qty-val" id="qty-${uniqueId}">${cartQty}</span>
                            <button class="qty-btn" aria-label="Increase quantity" onclick="updateCart('${uniqueId}', '${item.name.replace(/'/g, "\\'")}', '${opt.label.replace(/'/g, "\\'")}', ${opt.price}, 1, '${category.categoryId}')">+</button>
                        </div>
                    </div>
                `;
            });
            optionsHtml += '</div>';

            itemEl.innerHTML = `
                <div class="item-header">
                    <span class="item-name">${item.name}</span>
                </div>
                ${descriptionHtml}
                ${optionsHtml}
            `;
            itemsGrid.appendChild(itemEl);
        });

        section.appendChild(itemsGrid);
        container.appendChild(section);
    });
}

function updateCart(id, name, optionLabel, price, change, categoryId) {
    if (!cart[id]) {
        cart[id] = { name, optionLabel, price, quantity: 0, categoryId };
    }
    
    cart[id].quantity += change;
    if (cart[id].quantity <= 0) {
        delete cart[id];
    }
    
    const qtyEl = document.getElementById(`qty-${id}`);
    if (qtyEl) {
        qtyEl.textContent = cart[id] ? cart[id].quantity : 0;
    }
    
    updateCartSummary();
}

function calculateTotal() {
    let total = 0;
    let salads250Items = [];

    Object.values(cart).forEach(item => {
        if (item.categoryId === 'salads' && item.optionLabel === '250 מ"ל') {
            for(let i=0; i<item.quantity; i++) {
                salads250Items.push(item);
            }
        } else {
            total += item.price * item.quantity;
        }
    });

    salads250Items.sort((a, b) => b.price - a.price);

    const groupsOf6 = Math.floor(salads250Items.length / 6);
    total += groupsOf6 * 100;
    
    const remainderStart = groupsOf6 * 6;
    let originalPriceForGroups = 0;

    for (let i = 0; i < remainderStart; i++) {
        originalPriceForGroups += salads250Items[i].price;
    }

    for (let i = remainderStart; i < salads250Items.length; i++) {
        total += salads250Items[i].price;
    }
    
    const discountTextEl = document.getElementById('discount-text');
    const discountAlert = document.getElementById('discount-alert');
    
    if (groupsOf6 > 0) {
        const saved = originalPriceForGroups - (groupsOf6 * 100);
        discountAlert.classList.remove('hidden');
        discountTextEl.textContent = `נהדר! הופעל מבצע 6 סלטים ב-100 (חסכת ${saved} ₪)`;
    } else {
        discountAlert.classList.add('hidden');
    }

    return total;
}

function updateCartSummary() {
    let totalItems = 0;
    Object.values(cart).forEach(item => {
        totalItems += item.quantity;
    });

    const cartSummary = document.getElementById('cart-summary');
    const cartCountEl = document.getElementById('cart-count');
    const cartTotalPriceEl = document.getElementById('cart-total-price');

    if (totalItems > 0) {
        cartSummary.classList.remove('hidden');
    } else {
        cartSummary.classList.add('hidden');
        const cartModal = document.getElementById('cart-modal');
        if (!cartModal.classList.contains('hidden')) {
            renderCartModal();
        }
    }

    cartCountEl.textContent = totalItems;
    
    const total = calculateTotal();
    cartTotalPriceEl.textContent = '₪' + total;
    
    renderCartModal();
}

function renderCartModal() {
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyMessage = document.getElementById('cart-empty-message');
    const orderForm = document.getElementById('order-form-container');
    const modalTotal = document.getElementById('modal-total-price');

    cartItemsContainer.innerHTML = '';

    const items = Object.values(cart);
    
    if (items.length === 0) {
        emptyMessage.style.display = 'block';
        orderForm.classList.add('hidden');
        modalTotal.textContent = '₪0';
        return;
    }

    emptyMessage.style.display = 'none';
    orderForm.classList.remove('hidden');

    items.forEach(item => {
        const row = document.createElement('div');
        row.className = 'cart-item-row';
        const labelText = (item.optionLabel === 'רגיל' || item.optionLabel === 'יחידה' || item.optionLabel === 'משפחתי') ? '' : ` | ${item.optionLabel}`;
        
        row.innerHTML = `
            <div class="cart-item-info">
                <span class="cart-item-title">${item.name}</span>
                <span class="cart-item-opt">${labelText} (x${item.quantity})</span>
            </div>
            <div class="cart-item-price">₪${item.price * item.quantity}</div>
        `;
        cartItemsContainer.appendChild(row);
    });

    const total = calculateTotal();
    modalTotal.textContent = '₪' + total;
}

function setupEventListeners() {
    const viewCartBtn = document.getElementById('view-cart-btn');
    const closeCartBtn = document.getElementById('close-cart');
    const cartModal = document.getElementById('cart-modal');
    const checkoutBtn = document.getElementById('checkout-btn');

    viewCartBtn.addEventListener('click', () => {
        renderCartModal();
        cartModal.classList.remove('hidden');
    });

    closeCartBtn.addEventListener('click', () => {
        cartModal.classList.add('hidden');
    });

    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.classList.add('hidden');
        }
    });

    const dateInput = document.getElementById('order-date');
    const tmr = new Date();
    tmr.setDate(tmr.getDate() + 1);
    dateInput.valueAsDate = tmr;

    checkoutBtn.addEventListener('click', () => {
        const date = dateInput.value;
        const deliveryType = document.querySelector('input[name="delivery"]:checked').value;
        
        if (!date) {
            alert('אנא בחר תאריך להזמנה');
            return;
        }

        const formattedDate = new Date(date).toLocaleDateString('he-IL');

        let message = `*שלום ליטל, אשמח להזמין:* 👩‍🍳\n\n`;
        
        Object.values(cart).forEach(item => {
            const labelText = (item.optionLabel === 'רגיל' || item.optionLabel === 'יחידה' || item.optionLabel === 'משפחתי') ? '' : ` (${item.optionLabel})`;
            message += `• ${item.quantity}x ${item.name}${labelText}\n`;
        });

        const total = calculateTotal();

        message += `\n*סה"כ לתשלום:* ₪${total}`;
        message += `\n*תאריך:* ${formattedDate}`;
        message += `\n*סוג הזמנה:* ${deliveryType}`;
        message += `\n\nתודה רבה!`;

        const url = `https://wa.me/972548082606?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    });
}

document.addEventListener('DOMContentLoaded', init);
