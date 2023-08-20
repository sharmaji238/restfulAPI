const Product = require('../Models/product')

const getAllProducts = async (req,res)=>{

    // myData= await Product.find({})    //--All
    // myData= await Product.find({company:"Redmi"})   //Manual Filter
    myData= await Product.find(req.query);             //Dynamic Filter
    console.log(req.query);
    res.status(200).json({myData})
    // res.status(200).json({msg: "I am getAllProducts"})
};

const getAllProductsTesting = async (req,res)=>{

    const {company,featured,name,sort,select}=req.query;
    const queryObject={};
    if(company){
        queryObject.company= company;
    }

    if(featured){
        queryObject.featured= featured;
    }

    if(name){
        queryObject.name= { $regex: name, $options:"i"};
    }

    apiData=  Product.find(queryObject); 

    if(sort){
        let sortFix= sort.replace(","," ");
        apiData= apiData.sort(sortFix);
    }
    if(select){
        let selectFix= select.replace(","," ");
        apiData= apiData.select(selectFix);
    }


    let page= Number(req.query.page) || 1
    let limit= Number(req.query.limit) || 3
    let skip=(page - 1)*limit;

    apiData= apiData.skip(skip).limit(limit)

    console.log(queryObject);
    
    Products_List= await apiData;
    res.status(200).json({Products_List, nbHits: Products_List.length})
    // res.status(200).json({msg: "I am getAllProductsTesting"})
};


module.exports={getAllProducts,getAllProductsTesting};