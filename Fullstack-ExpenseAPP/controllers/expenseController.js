const Expense=require('../models/expenses');

exports.getExpenses=(req,res,next)=>{
     Expense.findAll().then((resolve)=>{
         console.log(resolve);
        const data=resolve.map(v=>v.dataValues);
        res.send(data);
    }).catch((err)=>{
        console.log(err);
    });
}

exports.AddExpense=(req,res,next)=>{
    Expense.create({
        expense: req.body.expense,
        description: req.body.description,
        category: req.body.category
    }).then((resolve)=>{
        res.send(resolve.dataValues);
    }).catch((err)=>{
        console.log(err);
    });
}

exports.deleteExpense=(req,res,next)=>{
    console.log(req.params);
    Expense.findByPk(req.params.id).then((resolve)=>{
        resolve.destroy();
        res.send(resolve)
    }).catch((err)=>{
        console.log(err);
    })
}