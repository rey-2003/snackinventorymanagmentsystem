// api.js

const apiUrl = 'http://localhost:8081'; // Update with your actual API URL

const placeOrder = async (orderData) => {
    console.log('Sending request with data:', orderData);

    if (!orderData) {
        console.error('Order data is null or undefined');
        return;
    }

    try {
        const response = await fetch(`${apiUrl}/api/place-order`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
        });

        if (!response.ok) {
            // If the response status is not OK, throw an error with the status and response text
            const errorText = await response.text();
            throw new Error(`HTTP error! Status: ${response.status}, Response: ${errorText}`);
        }

        const data = await response.json();
        console.log('Order placed:', data);
        // Handle the data as needed
    } catch (error) {
        // Log the detailed error message
        console.error('Error placing order:', error.message);
        // You might want to rethrow the error here if you want the calling code to handle it
        // throw error;
    }
};

export { placeOrder };
