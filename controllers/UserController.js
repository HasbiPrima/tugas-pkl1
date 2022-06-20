import User from "../models/User.js";

const UserController = {
    getAll : async(req, res) => {

        try {
          const data = await User.findAll({
            attributes: ['id', 'user', 'nama']
          })
           
          res.json(data)
        } catch (error) {
            res.status(404).json({msg : error})
        }

    },
    getId : async(req, res) => {

        try {
            const data = await User.findAll({
                attributes: ['id', 'user', 'nama'],
                where : { id : req.params.id }
              })
               
              res.json(data)
        } catch (error) {
            res.status(404).json({msg : error})
        }

    },
    Input : async(req, res) => {

        try {
            const data = await User.create(req.body)
            res.status(201).json({ msg : "sukses" })
        } catch (error) {
            res.status(404).json({msg : error})
        }
        
    },
    Update : async(req, res) => {

        try {
            const data = await User.update(req.body, {
                where : { id : req.params.id }
            })
            res.status(201).json({ msg : "sukses" })
        } catch (error) {
            res.status(404).json({msg : error})
        }

    },
    Delete : async(req, res) => {

        try {
            const data = await User.destroy({
                where : { id : req.params.id }
            })
            res.status(201).json({ msg : "sukses" })
        } catch (error) {
            res.status(404).json({msg : error})
        }

    },

}

export default UserController