const Pop = require(`../models/pop`);
const Origin = require(`../models/origin`);
const Seller = require(`../models/seller`);
const Shipping = require(`../models/shipping`);
const pop = require("../models/pop");

async function getOrigins (req, res) {
    try {
        const origin = await Origin.find();
        return res.status(201).json({origin})
        } catch (error) {
        return res.status(500).send(error.messsage)
    }
}

async function getSellers (req, res) {
    try {
        const seller = await Seller.find();
        return res.status(201).json({seller})
        } catch (error) {
        return res.status(500).send(error.messsage)
    }
}

async function getShippings (req, res) {
    try {
        const shipping = await Shipping.find();
        return res.status(201).json({shipping})
        } catch (error) {
        return res.status(500).send(error.messsage)
    }
}

async function getPops (req, res) {
    try {
        const pop = await Pop.find().populate("media", "media media_aired ratings character_info -_id").populate("vendor", "vendor price availability shipping_company -_id");
        return res.status(201).json({pop})
        } catch (error) {
        return res.status(500).send(error.messsage)
    }
}

async function deleteById (req, res) {
    try {
        const {id} = await Pop.findByIdAndDelete(req.params.id);
        return res.status(200).json("deleted the pop figure :(")
        } catch (error) {
        return res.status(500).send(error.messsage)
    }
}

async function createOrigins (req, res) {
    try {
        const origin = await new Origin(req.body)
        await origin.save()
        return res.status(201).json({origin})
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
}

async function createShippings (req, res) {
    try {
        const shipping = await new Shipping(req.body)
        await shipping.save()
        return res.status(201).json({shipping})
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
}

async function createSellers (req, res) {
    try {
        const seller = await new Seller(req.body)
        await seller.save()
        return res.status(201).json({seller})
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
}

async function createPops (req, res) {
    try {
        const pop = await new Pop(req.body)
        await pop.save()
        return res.status(201).json({pop})
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
}

function updatePops (req, res) {
    try {
        const {id} = req.params;
        Pop.findByIdAndUpdate(id, req.body, { new: true }, (err, pop) => {
          if (err) {
              res.status(500).send(err);
          }
          if (!pop) {
              res.status(500).send('Pop not found!');
          }
          return res.status(200).json(pop)
    })
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
}

module.exports = {
    getOrigins,
    getSellers,
    getShippings,
    getPops,
    deleteById,
    createOrigins,
    createShippings,
    createSellers,
    createPops,
    updatePops
}