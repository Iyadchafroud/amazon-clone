app.use(cors({ origin: true }));
app.use(express.json());
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("pay", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "eur",
    payment_method_types: ["card"],
    receipt_email: "chafroud.iyad@gmail.com",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
app.get("/", (req, res) => {
  res.status(200).send("hello");
});
