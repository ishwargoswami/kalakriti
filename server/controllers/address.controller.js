import Address from '../models/address.model.js';

// Add new address
export const newAddress = async (req, res) => {
  try {
    const { type, name, phone, street, city, state, pincode, isDefault } = req.body;

    // If this address is set as default, remove default from other addresses
    if (isDefault) {
      await Address.updateMany(
        { user: req.user.userId },
        { $set: { isDefault: false } }
      );
    }

    const address = new Address({
      user: req.user.userId,
      type,
      name,
      phone,
      street,
      city,
      state,
      pincode,
      isDefault
    });

    const savedAddress = await address.save();
    res.status(201).json(savedAddress);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all addresses for a user
export const getUserAddresses = async (req, res) => {
  try {
    const addresses = await Address.find({ user: req.user.userId });
    res.json(addresses);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update address
export const updateAddress = async (req, res) => {
  try {
    const { type, name, phone, street, city, state, pincode, isDefault } = req.body;

    const address = await Address.findOne({
      _id: req.params.id,
      user: req.user.userId
    });

    if (!address) {
      return res.status(404).json({ message: 'Address not found' });
    }

    // If this address is being set as default, remove default from other addresses
    if (isDefault && !address.isDefault) {
      await Address.updateMany(
        { user: req.user.userId },
        { $set: { isDefault: false } }
      );
    }

    address.type = type;
    address.name = name;
    address.phone = phone;
    address.street = street;
    address.city = city;
    address.state = state;
    address.pincode = pincode;
    address.isDefault = isDefault;

    const updatedAddress = await address.save();
    res.json(updatedAddress);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete address
export const deleteAddress = async (req, res) => {
  try {
    const address = await Address.findOneAndDelete({
      _id: req.params.id,
      user: req.user.userId
    });

    if (!address) {
      return res.status(404).json({ message: 'Address not found' });
    }

    res.json({ message: 'Address removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};