// Shopping Cart Functionality
let cart = [];
let cartTotal = 0;

// Product data with detailed information
const products = {
    'hp-laptop': { 
        name: 'HP Pavilion Laptop', 
        price: 85000, 
        originalPrice: 95000,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAiIHkxPSIwIiB4Mj0iNjAiIHkyPSI2MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNjY3ZWVhO3N0b3Atb3BhY2l0eToxIiAvPgo8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM3NjRiYTI7c3RvcC1vcGFjaXR5OjEiIC8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+',
        description: 'High-performance HP Pavilion laptop perfect for business and personal use. Features the latest Intel processor and ample storage for all your computing needs.',
        specifications: {
            'Processor': 'Intel Core i5-11th Gen',
            'RAM': '8GB DDR4',
            'Storage': '512GB SSD',
            'Display': '15.6" Full HD (1920x1080)',
            'Graphics': 'Intel UHD Graphics',
            'Operating System': 'Windows 10 Pro',
            'Battery Life': 'Up to 8 hours',
            'Weight': '1.75 kg'
        },
        features: [
            'Fast SSD storage for quick boot times',
            'Full HD display for crisp visuals',
            'Backlit keyboard for low-light use',
            'Multiple USB ports for connectivity',
            'HD webcam for video conferencing',
            'Wi-Fi 6 for faster internet',
            'Bluetooth 5.0 for wireless devices',
            '1-year warranty included'
        ]
    },
    'dell-laptop': { 
        name: 'Dell Inspiron Laptop', 
        price: 65000, 
        originalPrice: null,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAiIHkxPSIwIiB4Mj0iNjAiIHkyPSI2MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojN2MzYWVkO3N0b3Atb3BhY2l0eToxIiAvPgo8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNhODU1Zjc7c3RvcC1vcGFjaXR5OjEiIC8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+',
        description: 'Reliable Dell Inspiron laptop designed for everyday computing tasks. Compact and lightweight with excellent battery life.',
        specifications: {
            'Processor': 'Intel Core i3-10th Gen',
            'RAM': '4GB DDR4',
            'Storage': '256GB SSD',
            'Display': '14" HD (1366x768)',
            'Graphics': 'Intel UHD Graphics',
            'Operating System': 'Windows 10 Home',
            'Battery Life': 'Up to 6 hours',
            'Weight': '1.5 kg'
        },
        features: [
            'Compact 14-inch design',
            'Fast SSD storage',
            'HD display for clear viewing',
            'Multiple connectivity options',
            'Built-in webcam',
            'Wi-Fi connectivity',
            'Bluetooth support',
            '1-year warranty'
        ]
    },
    'cctv-camera': { 
        name: 'HD CCTV Camera', 
        price: 12500, 
        originalPrice: 15000,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAiIHkxPSIwIiB4Mj0iNjAiIHkyPSI2MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMjU2M2ViO3N0b3Atb3BhY2l0eToxIiAvPgo8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMzYjgyZjY7c3RvcC1vcGFjaXR5OjEiIC8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+',
        description: 'Professional HD CCTV camera with night vision and motion detection. Perfect for home and business security monitoring.',
        specifications: {
            'Resolution': '1080p Full HD',
            'Night Vision': 'Up to 30 meters',
            'Motion Detection': 'Yes',
            'Weatherproof': 'IP66 rated',
            'Viewing Angle': '120° wide angle',
            'Storage': 'Supports up to 128GB SD card',
            'Power': '12V DC / PoE',
            'Operating Temperature': '-20°C to +60°C'
        },
        features: [
            'Crystal clear 1080p HD video',
            'Advanced night vision technology',
            'Motion detection alerts',
            'Weatherproof outdoor design',
            'Wide viewing angle coverage',
            'Easy installation and setup',
            'Mobile app compatibility',
            '2-year warranty'
        ]
    },
    'biometric-device': { 
        name: 'Biometric Attendance System', 
        price: 25000, 
        originalPrice: null,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAiIHkxPSIwIiB4Mj0iNjAiIHkyPSI2MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDU5NjY5O3N0b3Atb3BhY2l0eToxIiAvPgo8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxMGI5ODE7c3RvcC1vcGFjaXR5OjEiIC8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+',
        description: 'Advanced biometric attendance system with fingerprint recognition. Ideal for businesses looking to streamline employee attendance tracking.',
        specifications: {
            'User Capacity': '1000 fingerprints',
            'Fingerprint Sensor': 'Optical sensor',
            'Display': '2.4" LCD color screen',
            'Communication': 'USB, TCP/IP, Wi-Fi',
            'Power Supply': '12V DC adapter',
            'Operating Temperature': '0°C to +45°C',
            'Humidity': '20% to 80%',
            'Dimensions': '180 x 150 x 50mm'
        },
        features: [
            'High-precision fingerprint recognition',
            'Large user capacity (1000 users)',
            'Color LCD display',
            'Multiple communication options',
            'Easy-to-use interface',
            'Attendance reports generation',
            'Data backup and restore',
            '1-year warranty'
        ]
    },
    'wireless-mouse': { 
        name: 'Wireless Optical Mouse', 
        price: 2500, 
        originalPrice: null,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAiIHkxPSIwIiB4Mj0iNjAiIHkyPSI2MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojN2MzYWVkO3N0b3Atb3BhY2l0eToxIiAvPgo8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNhODU1Zjc7c3RvcC1vcGFjaXR5OjEiIC8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+',
        description: 'High-precision wireless optical mouse with ergonomic design. Perfect for office and home use with long battery life.',
        specifications: {
            'DPI': '1200 DPI',
            'Connectivity': '2.4GHz Wireless',
            'Battery Life': 'Up to 12 months',
            'Buttons': '3 buttons + scroll wheel',
            'Compatibility': 'Windows, Mac, Linux',
            'Range': 'Up to 10 meters',
            'Weight': '95g',
            'Dimensions': '115 x 65 x 40mm'
        },
        features: [
            'High-precision 1200 DPI sensor',
            'Long battery life (12 months)',
            'Ergonomic design for comfort',
            'Plug-and-play installation',
            'Compatible with all major OS',
            'Smooth scrolling wheel',
            'Energy-saving technology',
            '6-month warranty'
        ]
    },
    'external-hdd': { 
        name: '1TB External Hard Drive', 
        price: 8500, 
        originalPrice: 12000,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAiIHkxPSIwIiB4Mj0iNjAiIHkyPSI2MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZGMyNjI2O3N0b3Atb3BhY2l0eToxIiAvPgo8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNlZjQ0NDQ7c3RvcC1vcGFjaXR5OjEiIC8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+',
        description: 'Portable 1TB external hard drive with USB 3.0 connectivity. Perfect for data backup and storage with fast transfer speeds.',
        specifications: {
            'Capacity': '1TB (1000GB)',
            'Interface': 'USB 3.0',
            'Transfer Speed': 'Up to 5 Gbps',
            'Compatibility': 'PC, Mac, Linux',
            'Power': 'USB powered',
            'Dimensions': '115 x 80 x 15mm',
            'Weight': '150g',
            'Operating Temperature': '0°C to +60°C'
        },
        features: [
            'Large 1TB storage capacity',
            'Fast USB 3.0 transfer speeds',
            'Plug-and-play compatibility',
            'Compact and portable design',
            'No external power required',
            'Cross-platform compatibility',
            'Data backup software included',
            '2-year warranty'
        ]
    },
    'security-monitor': { 
        name: 'Security Monitor', 
        price: 35000, 
        originalPrice: null,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAiIHkxPSIwIiB4Mj0iNjAiIHkyPSI2MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZWE1ODBjO3N0b3Atb3BhY2l0eToxIiAvPgo8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNmOTczMTY7c3RvcC1vcGFjaXR5OjEiIC8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+',
        description: 'Professional 19-inch security monitor designed for surveillance systems. Features multiple input support and wall mounting capability.',
        specifications: {
            'Screen Size': '19 inches',
            'Resolution': '1366 x 768 HD',
            'Inputs': 'BNC, VGA, HDMI',
            'Aspect Ratio': '16:9',
            'Viewing Angle': '170°/160°',
            'Response Time': '5ms',
            'Power Consumption': '25W',
            'Dimensions': '430 x 320 x 80mm'
        },
        features: [
            'Crystal clear HD display',
            'Multiple input connections',
            'Wall mountable design',
            'Wide viewing angles',
            'Fast response time',
            'Energy efficient operation',
            'Professional security grade',
            '3-year warranty'
        ]
    },
    'desktop-computer': { 
        name: 'Desktop Computer', 
        price: 75000, 
        originalPrice: null,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAiIHkxPSIwIiB4Mj0iNjAiIHkyPSI2MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDg5MWIyO3N0b3Atb3BhY2l0eToxIiAvPgo8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwNmI2ZDQ7c3RvcC1vcGFjaXR5OjEiIC8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+',
        description: 'High-performance desktop computer with Intel Core i5 processor. Perfect for business applications, gaming, and multimedia tasks.',
        specifications: {
            'Processor': 'Intel Core i5-10th Gen',
            'RAM': '8GB DDR4',
            'Storage': '1TB HDD',
            'Graphics': 'Intel UHD Graphics',
            'Operating System': 'Windows 10 Pro',
            'Power Supply': '300W',
            'Expansion Slots': 'PCIe x16, PCIe x1',
            'Dimensions': '350 x 150 x 380mm'
        },
        features: [
            'Powerful Intel Core i5 processor',
            '8GB RAM for smooth multitasking',
            'Large 1TB storage capacity',
            'Integrated graphics for basic tasks',
            'Multiple USB ports',
            'Professional Windows 10 Pro',
            'Upgradeable components',
            '1-year warranty'
        ]
    }
};

// Add to cart functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add to cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product');
            addToCart(productId);
        });
    });

    // View details buttons
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productId = productCard.querySelector('.add-to-cart').getAttribute('data-product');
            showProductDetails(productId);
        });
    });

  // Function to close product modal
function closeProductModal() {
    const modal = document.getElementById('product-modal');
    if (modal) {
        modal.style.display = "none";
    }
}

// Product details modal close button
const closeProductModalBtn = document.getElementById('close-product-modal');
if (closeProductModalBtn) {
    closeProductModalBtn.addEventListener('click', closeProductModal);
}

// Add to cart from details modal
const addToCartDetail = document.getElementById('add-to-cart-detail');
if (addToCartDetail) {
    addToCartDetail.addEventListener('click', function() {
        const productId = this.getAttribute('data-product-id');
        addToCart(productId);
        closeProductModal();
    });
}

// Contact about product button
const contactAboutProduct = document.getElementById('contact-about-product');
if (contactAboutProduct) {
    contactAboutProduct.addEventListener('click', function() {
        const productName = document.getElementById('product-detail-title').textContent;
        window.location.href = `#contact`;
        closeProductModal();
        showNotification(`We'll contact you about ${productName}`);
    });
}

// View details buttons
document.querySelectorAll('.view-details').forEach(button => {
    button.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const productId = productCard.querySelector('.add-to-cart').getAttribute('data-product');
        showProductDetails(productId);
    });
});

    // Cart button
    const cartBtn = document.getElementById('cart-btn');
    if (cartBtn) {
        cartBtn.addEventListener('click', openCart);
    }

    // Modal close button
    const closeBtn = document.querySelector('.close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeCart);
    }

    // Clear cart button
    const clearCartBtn = document.getElementById('clear-cart');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', clearCart);
    }

    // Checkout button
    const checkoutBtn = document.getElementById('checkout');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkout);
    }

    // Product category filtering
    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            filterProducts(category);
            
            // Update active button
            document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        const cartModal = document.getElementById('cart-modal');
        const productModal = document.getElementById('product-modal');
        if (event.target === cartModal) {
            closeCart();
        }
        if (event.target === productModal) {
            closeProductModal();
        }
    });
});

function addToCart(productId) {
    const product = products[productId];
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    updateCartDisplay();
    showNotification('Product added to cart!');
}

function updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart items display
    cartItems.innerHTML = '';
    cartTotal = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #64748b;">Your cart is empty</p>';
    } else {
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            cartTotal += itemTotal;

            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">KSh ${item.price.toLocaleString()}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateQuantity('${item.id}', -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
                    </div>
                </div>
                <button class="quantity-btn" onclick="removeFromCart('${item.id}')" style="background: #ef4444; color: white;">×</button>
            `;
            cartItems.appendChild(cartItem);
        });
    }

    // Update total
    cartTotalElement.textContent = `KSh ${cartTotal.toLocaleString()}`;
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartDisplay();
        }
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

function clearCart() {
    cart = [];
    updateCartDisplay();
    showNotification('Cart cleared!');
}

function openCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }

    // Simulate checkout process
    showNotification('Redirecting to checkout...');
    
    // In a real implementation, this would redirect to a payment gateway
    setTimeout(() => {
        alert(`Thank you for your order!\nTotal: KSh ${cartTotal.toLocaleString()}\n\nPlease contact us at +254 742407938 to complete your purchase.`);
        clearCart();
        closeCart();
    }, 2000);
}

function filterProducts(category) {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.5s ease-in';
        } else {
            card.style.display = 'none';
        }
    });
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #2563eb;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10001;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Product Details Functions
function showProductDetails(productId) {
    const product = products[productId];
    if (!product) return;

    // Update modal content
    document.getElementById('product-detail-title').textContent = product.name;
    document.getElementById('product-detail-current-price').textContent = `KSh ${product.price.toLocaleString()}`;
    
    if (product.originalPrice) {
        document.getElementById('product-detail-original-price').textContent = `KSh ${product.originalPrice.toLocaleString()}`;
        document.getElementById('product-detail-original-price').style.display = 'inline';
    } else {
        document.getElementById('product-detail-original-price').style.display = 'none';
    }

    document.getElementById('product-detail-description').textContent = product.description;
    
    // Update product image
    const detailImage = document.getElementById('product-detail-image');
    detailImage.className = `product-img-placeholder ${productId.replace('-', '-')}`;
    document.getElementById('product-detail-name').textContent = product.name;

    // Update specifications
    const specsContainer = document.getElementById('product-detail-specs');
    specsContainer.innerHTML = '<h4>Specifications</h4><ul>';
    Object.entries(product.specifications).forEach(([key, value]) => {
        specsContainer.innerHTML += `<li><span class="spec-label">${key}:</span> <span>${value}</span></li>`;
    });
    specsContainer.innerHTML += '</ul>';

    // Update features
    const featuresContainer = document.getElementById('product-detail-features');
    featuresContainer.innerHTML = '<h4>Key Features</h4><ul>';
    product.features.forEach(feature => {
        featuresContainer.innerHTML += `<li>${feature}</li>`;
    });
    featuresContainer.innerHTML += '</ul>';

    // Set product ID for add to cart button
    document.getElementById('add-to-cart-detail').setAttribute('data-product-id', productId);

    // Show modal
    const modal = document.getElementById('product-modal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    const modal = document.getElementById('product-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Form submission handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelector('input[placeholder="Subject"]').value;
        const message = this.querySelector('textarea').value;
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .portfolio-item, .contact-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Set initial body opacity
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    // Add typing effect to hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }
    
    // Add parallax effect to hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
});

// Service card hover effects
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Testimonial card hover effects
document.querySelectorAll('.testimonial-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Portfolio item click effects
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});

// Add counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const stats = entry.target.querySelectorAll('.stat h3');
            stats.forEach(stat => {
                const target = parseInt(stat.textContent);
                animateCounter(stat, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const aboutSection = document.querySelector('.about');
if (aboutSection) {
    statsObserver.observe(aboutSection);
} 
