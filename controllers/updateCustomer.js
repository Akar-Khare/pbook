const Customer = require("../schema/CustomerSchema");
exports.updateCustomer = (async (req, res) => {
  try {
    const id = req.params.id;

    /* 🔒 Lock immutable fields */
    delete req.body.id;
    delete req.body.createdAt;

    const updatedCustomer = await Customer.findOneAndUpdate(
      { id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedCustomer) {
      return res
        .status(404)
        .json({ message: "Customer not found" });
    }

    res.status(200).json(updatedCustomer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

