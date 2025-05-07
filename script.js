// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Add click event for the "New post" button
    const newPostBtn = document.querySelector('.btn-primary');
    if (newPostBtn) {
        newPostBtn.addEventListener('click', function() {
            alert('New post creation would open here');
        });
    }

    // Add click event for the "Upgrade" button
    const upgradeBtn = document.querySelector('.btn-outline');
    if (upgradeBtn) {
        upgradeBtn.addEventListener('click', function() {
            alert('Upgrade options would open here');
        });
    }

    // Add click event for the "Update payment method" button
    const updatePaymentBtn = document.querySelector('.btn-update');
    if (updatePaymentBtn) {
        updatePaymentBtn.addEventListener('click', function() {
            alert('Payment method update would open here');
        });
    }

    // Add click event for the "Save" button in user count
    const saveBtn = document.querySelector('.btn-save');
    if (saveBtn) {
        saveBtn.addEventListener('click', function() {
            alert('User count saved');
        });
    }

    // Add click events for all menu items
    const menuItems = document.querySelectorAll('.navigation ul li a');
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all menu items
            document.querySelectorAll('.navigation ul li').forEach(li => {
                li.classList.remove('active');
            });
            
            // Add active class to clicked menu item's parent
            this.parentElement.classList.add('active');
            
            // For demo purposes, show which section was clicked
            const sectionName = this.textContent.trim().split(' ')[0];
            console.log(`Navigated to ${sectionName} section`);
        });
    });

    // Add click events for more options buttons in orders table
    const moreButtons = document.querySelectorAll('.btn-more');
    moreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const invoiceRow = this.closest('tr');
            const invoiceId = invoiceRow.querySelector('a').textContent;
            alert(`Options for ${invoiceId}`);
        });
    });
}); 