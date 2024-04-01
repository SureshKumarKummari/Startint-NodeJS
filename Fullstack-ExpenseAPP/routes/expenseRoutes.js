const expenseController=require('../controllers/expenseController');
const express=require('express');

const router=express.Router();


router.get('/getExpenses',expenseController.getExpenses);

router.post('/addExpense',expenseController.AddExpense);

router.delete('/deleteExpense/:id',expenseController.deleteExpense);


module.exports=router;