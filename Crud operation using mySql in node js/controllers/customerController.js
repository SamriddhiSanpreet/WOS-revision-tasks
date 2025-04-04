const db = require('../config/db');

module.exports.customer = async(req,res)=>{
    return res.render('customer');
}

module.exports.addCustomer = async(req,res)=>{
    try{
        console.log(req.body);
        console.log(req.file); 
        let {name,email,phone} = req.body;
        var image = '';
        if(req.file){
            image='/uploads'+'/'+req.file.filename;
        }
        let insertData = await db.query(`insert into customer(name,email,phone,image)values(?,?,?,?)`,[name,email,phone,image]);// ? placeholders use kiye jo SQL Injection se bachata hai.
        if(insertData){
            console.log("Record Inserted");
            return res.redirect('/');
        }
        else{
            console.log("Something went wrong");
            return res.redirect('/');
        }
    }
    catch(err){
        console.log(err);
        return res.redirect('/');
    }
}

module.exports.showCustomer = async(req,res)=>{
    const [allDetails] = await db.query(`select * from customer order by id asc`);
    console.log(allDetails);
    return res.render('showCustomer',{
        customerDetails : allDetails
    });
}

module.exports.deleteRecord = async (req,res)=>{
    // console.log(req.params.id);
    let deleteData = await db.query(`delete from customer where id= ?`,[req.params.id]);
    if(deleteData){
        console.log("Record Deleted");
        return res.redirect('/');
    }
    else{
        console.log("Something wrong");
        return res.redirect('/');
    }
}

module.exports.updateRecord = async(req,res) =>{
    let [updateData] = await db.query(`select * from customer where id= ?`,[req.params.id]);
    console.log(updateData[0]);
    return res.render('updateCustomer',{
        singleCustomer : updateData[0]
    })
}

module.exports.editCustomer = async (req, res) => {
    try {
        console.log("File = ", req.file);
        console.log("Body = ", req.body);
        console.log("ID = ", req.params.id);

        let { name, email, phone } = req.body;
        let image = "";

        let [existingData] = await db.query(
            `SELECT image FROM customer WHERE id = ?`, 
            [req.params.id]
        );

        if (existingData.length > 0) {
            image = existingData[0].image;  
        }

        if (req.file) {
            image = "/uploads/" + req.file.filename;
        }

        let editQuery = await db.query(
            `UPDATE customer SET name= ?, email= ?, phone= ?, image= ? WHERE id= ?`,
            [name, email, phone, image, req.params.id]
        );

        if (editQuery[0].affectedRows > 0) {
            console.log("Record Updated Successfully");
            return res.redirect("/");
        } else {
            console.log("No record updated (maybe ID is incorrect)");
            return res.redirect("/");
        }
    } catch (err) {
        console.log("Error updating record:", err);
        return res.redirect("/");
    }
};








