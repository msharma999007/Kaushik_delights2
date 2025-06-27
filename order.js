
        // JavaScript code to dynamically add items based on selected category
        const menuList = document.getElementById('menu-list');
        const itemList = document.getElementById('item-list');

        menuList.addEventListener('click', function(event) {
            const selectedCategory = event.target.textContent;
            const items = {
                'All': [
                    { name: 'Plain almond butter croissant', price: '$1.25' },
                    { name: 'Chocolate croissant', price: '$1.75' },
                    { name: 'Biryani', price: '$10.00' },
                    { name: 'Pizza', price: '$8.50' },
                    { name: 'Burger', price: '$6.75' },
                    { name: 'Pasta', price: '$9.25' },
                    { name: 'Cold Coffee', price: '$4.00' }
                ],
                'Biryani': [
                    { name: 'Chicken Biryani', price: '$12.00' },
                    { name: 'Vegetable Biryani', price: '$10.00' },
                    { name: 'Mutton Biryani', price: '$14.00' }
                ],
                'Pizza': [
                    { name: 'Margherita Pizza', price: '$8.50' },
                    {                name: 'Pepperoni Pizza', price: '$10.00' },
                    { name: 'Chicken Pizza', price: '$11.00'}
                ],
                'Burger': [
                    { name: 'Beef Burger', price: '$6.75' },
                    { name: 'Chicken Burger', price: '$7.00' },
                    { name: 'Veggie Burger', price: '$5.50' }
                ],
                'Pasta': [
                    { name: 'Spaghetti Bolognese', price: '$9.25' },
                    { name: 'Alfredo Pasta', price: '$10.50' },
                    { name: 'Pesto Pasta', price: '$11.00' }
                ],
                'Cold Coffee': [
                    { name: 'Iced Mocha', price: '$4.50' },
                    { name: 'Vanilla Frappe', price: '$5.00' },
                    { name: 'Caramel Latte', price: '$4.75' }
                ]
            };

            // Clear previous items
            itemList.innerHTML = '';

            // Populate items based on selected category
            items[selectedCategory].forEach(item => {
                const row = `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.price}</td>
                        <td>
                            <button class="minus-btn">-</button>
                            <input type="number" value="0" min="0" class="quantity" data-item="${item.name}">
                            <button class="plus-btn">+</button>
                        </td>
                    </tr>
                `;
                itemList.innerHTML += row;
            });
        });

        // Code for updating order and calculating subtotal goes here...
 