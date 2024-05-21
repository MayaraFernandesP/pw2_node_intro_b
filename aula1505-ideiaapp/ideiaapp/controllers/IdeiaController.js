const { or, where } = require('../db/conn')
const Ideia = require('../models/Ideia')
const User = require('../models/User')

const { Op } = require('sequelize')

module.exports = class IdeiaController {
    static async dashboard(req, res) {
        const userId = req.session.userid

        const user = await User.findOne({
            where:{
                id: userId
            },
            include: Ideia,
            plain: true,
        })

        const ideias = user.Ideia.map((result) => result.dataValues)

        let emptyIdeias =  true

        if(ideias.length > 0){
            emptyIdeias = false
        }

        console.log(ideias)
        console.log(emptyIdeias)

        res.render('ideias/dashboard', {ideias, emptyIdeias})
    }
    static createIdeia(req, res){
        res.render('ideia/create')
    }
    static createIdeiaSave(req, res){
        const ideia = {
            title: req.body.title,
            UserId: req.session.userid
        }

        Ideia.create(ideia)
        .then(() => {
            req.flash('menssage', 'Pensamentos criado com sucesso')
            req.session.save(() => {
                res.redirect('/ideias/dashbord')
            })
        })
        .catch((error) => console.log(error))
    }
    static showIdeias(req, res){
        console.log(req.query)

        let search=''

        if(req.query.seach){
            search = req.query.search
        }

        let order = 'DESC'

        if(req.query.order == 'old'){
            order = 'ASC'
        }else{
            order = 'DESc'
        }

        Ideia.findAll({
            include: User,
            where: {
                title: {[Op.like]: `%${search}%`}
            },
            order: [['createAt',order]]
        })
        .then((data) => {
            let ideiaQty =  data.length

            if(ideiaQty === 0){
                ideiaQty = false
            }

            const ideias = data.map((result) => result.get({plain: true}))

            res.render('ideias/home', {ideias, ideiaQty, search})
        })
        .catch((error) => controler.error(error))
    }
    static removeIdeia(req, res){
        const id = req.body.id

        Ideia.destroy({where: {id: id}})
        .then(() =>{
            req.flash('message', 'Pensamento removido com sucesso!')
            req.session.save(() => {
                res.redirect('/ideias/dashboard')
            })
        })
        .catch((error) => console.error(error))
    }
    static updateIdeia(req, res){
        const id = req.params.id

        Ideia.findOne({where: {id:id}, raw: true})
        .then((ideia) =>{
            res.render('ideias/edit', {ideia})
        })
        .catch((error) => console.error(error))
    }
    static updateIdeiaPost(req, res){
        const id = req.body.id

        const ideia = {
            title: req.body.title,
            deescription: req.deescription,
        }

        Ideia.update(ideia ,{where: {id: id}})
        .then(() =>{
            req.flash('message', 'Pensamento editado conm sucesso!')
            req.session.save(() => {
                res.redirect('/ideias/dashboard')
            })
        })
        .catch((error) => console.error(error))
    }
}