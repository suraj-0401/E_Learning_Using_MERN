import Stripe from 'stripe';
const stripe = new Stripe('sk_test_51PlmgsCRaWWPfJ2zzdcdMdpJN7Y82uQKk1xmj1rg1wezWncfOGuGOUtWiV9IHtAfiTqMRP6oik0frzOk35Mad388008Pe59TwF');

 const payment = async (req, res) => {
    try {
        const { items } = req.body;
        const lineItems = items.map((item) => ({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.name,
                },
                unit_amount: item.price * 100,
            },
            quantity: item.quantity,
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'], 
            line_items: lineItems,
            mode: 'payment', 
            success_url: 'https://your-website.com/success',
            cancel_url: 'https://your-website.com/cancel',
        });

        res.status(200).json({ url: session.url });
    } catch (error) {
        console.error('Error creating payment session:', error);
        res.status(500).json({ error: error.message });
    }
};

export default payment;