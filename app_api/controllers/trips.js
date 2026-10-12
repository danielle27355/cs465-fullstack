const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model
const Model = mongoose.model('trips');
// GET: /trips - lists all trips
// Fetches every record from the database collection
const tripsList = async (req, res) => {
    try {
        const trips = await Model.find({}).exec();
        
        if (!trips || trips.length === 0) {
            return res
                .status(404)
                .json({ message: "No trips found in the database" });
        }
        
        return res
            .status(200)
            .json(trips);
            
    } catch (err) {
        return res
            .status(500)
            .json({ message: "Error retrieving trips list", error: err.message });
    }
};
// GET: /trips/:tripCode - lists a single trip
// Filters by the specific route parameter code
const tripsFindByCode = async (req, res) => {
    try {
        const q = await Model
            .find({ 'code' : req.params.tripCode }) // Return single record
            .exec();

        // Check if the query returned an empty array or null
        if (!q || q.length === 0) { 
            return res
                .status(404)
                .json({ message: `Trip with code '${req.params.tripCode}' not found` });
        } else { 
            return res
                .status(200)
                .json(q);
        }
    } catch (err) {
        return res
            .status(500)
            .json({ message: "Error executing trip search", error: err.message });
    }
};


//POST: /trips - Adds a new trip
const tripsAddTrip = async (req, res)=>{
    try{
        const newTrip = new Model({
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        });

        const q = await newTrip.save();

        if(!q) {
            return res
                .status(400)
                .json({message: "Trip could not be created"});
        }else{
            return res
                .status(201)
                .json(q);
        }
    }catch(err){
        return res
            .status(500)
            .json({message: "Error adding trip", error: err.message});
    }
}



// PUT: /trips/:tripCode - Adds a new Trip 
// Regardless of outcome, response must include HTML status code 
// and JSON message to the requesting client 
const tripsUpdateTrip = async(req, res) => { 
 
    // Uncomment for debugging     console.log(req.params);     console.log(req.body);      
    const q = await Model         
        .findOneAndUpdate( 
            { 'code' : req.params.tripCode }, 
            {                 
                code: req.body.code,                 
                name: req.body.name,                 
                length: req.body.length,                 
                start: req.body.start,                 
                resort: req.body.resort,                 
                perPerson: req.body.perPerson,                 
                image: req.body.image,                 
                description: req.body.description 
            }  
        ) .exec();                  
        if(!q) 
        { // Database returned no data             
        return res                 
            .status(400) 
            .json({message: "Trip not found"}); 
        } else { // Return resulting updated trip             
            return res                 
                .status(201) 
                .json(q); 
        }     
                        // Uncomment the following line to show results of operation         // on the console 
        // console.log(q); 
}; 

// DELETE: /trips/:tripCode - Deletes an existing trip
const tripsDeleteTrip = async (req, res) => {
    try{
        const deletedTrip = await Model.findOneAndDelete({
            code: req.params.tripCode
        });

        if(!deletedTrip){
            return res.status(404).json({
                message: "Trip not found"
            })
        }

        return res.status(200).json({
            message:"Trip deleted successfully",
            trip: deletedTrip
        });
    } catch(err){
        return res.status(500).json({
            message: "Error deleting trip",
            error: err.message
        });
    }
}

// Exporting both functions so they can be mapped to your routes
module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip,
    tripsDeleteTrip
};
