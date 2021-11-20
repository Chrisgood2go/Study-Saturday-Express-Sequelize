const router = require('express').Router();
// const Student = require('../db/models/student')
const Test = require('../db/models/test')

// router.get('/', async (req, res, next) => {
//   try {
//     const tests = await Test.findAll()
//     res.send(tests)
//   } catch (error) {
//     next(error)
//   }
// })
router.get('/', async (req, res, next)=>{
    try {
        const tests = await Test.findAll()
        res.send(tests)
    } catch (error) {
        next(error)
    }
    
})

// router.get('/:id', async (req, res, next) => {
//   try {
//     let student = await Student.findByPk(req.params.id)
//     if (student) {
//       res.send(student)
//     } else {
//       res.status(404).send('Student not found')
//     }
//   } catch (error) {
//     next(error)
//   }
// })
router.get('/:id', async (req, res, next) => {
    try{
      let test = await Test.findByPk(req.params.id)
      if(test){
          res.send(test)
        } else {
          res.status(404).send('Student not found')
        }
      } catch(error){
        next(error)
    }
})

module.exports = router;

